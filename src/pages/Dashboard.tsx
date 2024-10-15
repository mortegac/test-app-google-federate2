import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <User className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-6 flex items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
            </div>
            <div className="ml-6 flex items-center">
              <button
                onClick={handleSignOut}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user?.attributes?.email}!</h2>
            <p className="text-gray-600">This is your private dashboard. You can add more content and features here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;