import React from 'react';
import { Settings, User } from 'lucide-react';

export default function Header() {
  // You can pass these as props or fetch from state/context
  const greeting = 'السلام عليكم';
  const data = new Date();
  const islamicDate = `${data.getDate()} ${data.toLocaleString('default', { month: 'long' })} ${data.getFullYear()}`;

  return (
    <header className="bg-gradient-to-b from-gray-50 to-white px-6 py-2">
      <div className="max-w-2xl mx-auto">
        {/* Top Row: Settings and User Profile */}
        <div className="flex justify-between items-center mb-8">
          {/* Settings Icon */}
          <button
            className="p-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition-all duration-200"
            aria-label="Settings">
            <Settings size={24} className="text-gray-700" />
          </button>

          {/* Right Side: Badge and Avatar */}
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center shadow-md">
              <User size={28} className="text-amber-700" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="text-right">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{greeting}</h1>
          <p className="text-gray-500 text-base">{islamicDate}</p>
        </div>
      </div>
    </header>
  );
}
