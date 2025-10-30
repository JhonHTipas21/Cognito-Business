import React from 'react';
import ChatWindow from './components/Chat/ChatWindow';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <ChatWindow />
    </div>
  );
}

export default App;
