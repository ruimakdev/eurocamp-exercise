// Define type for the response data
interface ParcData {
  id: string;
  name: string;
  description: string;
}

// import { baseUrl } from './apiUtils'; // Assuming you have a utility function for the base URL
export const baseUrl = 'http://localhost:3001';

// Function to fetch parcs
export const fetchParcs = async (): Promise<ParcData[]> => {
  try {
    const response = await fetch(`${baseUrl}/api/1/parcs`);
    if (!response.ok) {
      throw new Error('Failed to fetch parcs');
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching parcs:', error);
    throw error;
  }
};
