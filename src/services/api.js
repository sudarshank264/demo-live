// This service will handle all API calls once backend is integrated.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
