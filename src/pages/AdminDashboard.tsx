import React from 'react';
import MarkdownEditor from '../components/MarkdownEditor';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <MarkdownEditor />
    </div>
  );
};

export default AdminDashboard;
