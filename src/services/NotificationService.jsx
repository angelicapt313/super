import React from 'react';

const notificationService = ({ isOpen, onClose, children }) => {
  
  if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2">
        <div className="p-4 border-b">
          <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
            Close
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default notificationService;
