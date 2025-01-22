import React from 'react';
import { useNavigate } from 'react-router-dom';

function FoodMenu() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-yellow-400 p-4 shadow-md">
        <div className="max-w-md mx-auto flex items-center">
          <button 
            onClick={() => navigate('/')}
            className="mr-4 text-gray-800"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Foods Menu</h1>
        </div>
      </header>
      
      <main className="max-w-md mx-auto p-4">
        <div className="grid gap-4">
          {/* Add your food menu items here */}
          <p className="text-gray-600">Food menu items will be displayed here</p>
        </div>
      </main>
    </div>
  );
}

export default FoodMenu;