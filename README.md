MyMedCompass
MyMedCompass is a web platform designed to help users find, export, and share information about hospitals within Nigeria. Built using modern web technologies, it integrates with Mapbox API for geolocation and Firebase for authentication and data management.

NOTE: MyMedCompass IS CURRENTLY A WORK IN PROGRESS. I AM ACTIVELY WORKING ON ADDITIONAL FEATURES AND IMPROVEMENTS TO FULLY REALIZE ITS GOALS AND OBJECTIVES. PLEASE CHECK BACK FOR UPDATES AND FEEL FREE TO CONTRIBUTE! 
Thank you. 

Features
Hospital Search: Users can search for hospitals based on their location.
Export to CSV: Export hospital lists to a CSV file.
Share via Email/Link: Share hospital information via email or a shareable link.
Admin Panel: Admins can manage hospital data through a secure login system.
Markdown Editor: Create and format hospital entries using Markdown.

Technologies Used
Frontend: React, TypeScript, Vite, Tailwind CSS, Material-UI (MUI)
Backend: Firebase (Authentication, Firestore, Storage)
APIs: Mapbox API for hospital data
Utilities: Axios for HTTP requests, PapaParse for CSV handling

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/my-med-compass.git
Navigate to the project directory:

bash
Copy code
cd my-med-compass
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root of the project and add your Firebase and Mapbox credentials:

env
Copy code
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
Run the development server:

bash
Copy code
npm run dev
Deployment
To deploy the application on Firebase Hosting:

Build the application:

bash
Copy code
npm run build
Initialize Firebase in your project if you haven't already:

bash
Copy code
firebase init
Deploy to Firebase:

bash
Copy code
firebase deploy

Acknowledgments
Altschool Africa: Special thanks to Altschool Africa for their support and guidance throughout this amazing journey. 
Contributing
Fork the repository.

Create a feature branch:

bash
Copy code
git checkout -b feature/your-feature
Commit your changes:

bash
Copy code
git commit -am 'Add new feature'
Push to the branch:

bash
Copy code
git push origin feature/your-feature
Create a new Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
