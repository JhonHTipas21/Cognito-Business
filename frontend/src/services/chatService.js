const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const sendMessageToAPI = async (message, history = []) => {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error en la comunicación con el servidor');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en chatService:', error);
    throw error;
  }
};
