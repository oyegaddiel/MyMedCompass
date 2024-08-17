import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Papa from 'papaparse';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

mapboxgl.accessToken = process.env.VITE_MAPBOX_ACCESS_TOKEN!;

interface Hospital {
  id: string;
  text: string;
  place_name: string;
  properties?: {
    phone?: string;
    email?: string;
  };
}

const SearchResults: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    const userLocation = { lat: 6.5244, lng: 3.3792 }; // Lagos, Nigeria

    const fetchHospitals = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json`,
          {
            params: {
              proximity: `${userLocation.lng},${userLocation.lat}`,
              access_token: mapboxgl.accessToken,
            },
          }
        );
        setHospitals(response.data.features);
      } catch (error) {
        console.error('Error fetching hospital data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const handleExportCSV = async () => {
    const csv = Papa.unparse(
      hospitals.map((hospital) => ({
        name: hospital.text,
        address: hospital.place_name,
        phone: hospital.properties?.phone || 'N/A',
        email: hospital.properties?.email || 'N/A',
      }))
    );

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const storage = getStorage();
    const storageRef = ref(storage, 'hospital-list.csv');
    uploadBytes(storageRef, blob)
      .then(() => {
        console.log('Uploaded CSV to Firebase Storage');
      })
      .catch((error) => {
        console.error('Error uploading CSV:', error);
      });
  };

  const handleShareCSV = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, 'hospital-list.csv');

    getDownloadURL(storageRef)
      .then((url) => {
        console.log('CSV file is available at:', url);
        window.location.href = `mailto:?subject=Hospital List&body=Download the hospital list here: ${url}`;
      })
      .catch((error) => {
        console.error('Error getting download URL:', error);
      });
  };

  const handleShareLink = async () => {
    const auth = getAuth();
    const userEmail = prompt('Enter email to share the link:'); // Replace with dynamic email input
    const actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true,
    };

    if (userEmail) {
      try {
        await sendSignInLinkToEmail(auth, userEmail, actionCodeSettings);
        console.log('Link sent to email:', userEmail);
      } catch (error) {
        console.error('Error sending link:', error);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {loading ? (
        <div>
          <Skeleton count={5} height={100} />
        </div>
      ) : (
        <div>
          {hospitals.length > 0 ? (
            hospitals.map((hospital) => (
              <div key={hospital.id} className="mb-4">
                <h2 className="text-xl font-semibold">{hospital.text}</h2>
                <p>{hospital.place_name}</p>
                <p>Phone: {hospital.properties?.phone || 'N/A'}</p>
                <p>Email: {hospital.properties?.email || 'N/A'}</p>
              </div>
            ))
          ) : (
            <p>No hospitals found in this area.</p>
          )}
          <button onClick={handleExportCSV} className="btn btn-primary">
            Export to CSV
          </button>
          <button onClick={handleShareCSV} className="btn btn-secondary">
            Share CSV
          </button>
          <button
            onClick={handleShareLink}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Share via Email Link
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
