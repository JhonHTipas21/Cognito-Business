import React from 'react';

const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl">🤖</span>
        </div>
        <div>
          <h1 className="text-xl font-bold">Cognito Business</h1>
          <p className="text-sm text-blue-100">Asistente Virtual Empresarial</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
