

const API_URL = 'https://rickandmortyapi.com/api/location';

export const getLocations = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch locations');
    }
    const data = await response.json();
    return data.results; // Assuming locations are under the 'results' key
  } catch (error) {
    console.error('Error fetching locations:', error);
    return []; // Return empty array in case of error
  }
};
