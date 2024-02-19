

const API_URL = 'https://rickandmortyapi.com/api';

export const getLocationsWithResidents = async () => {
  try {
    // Fetch list of locations
    const locationsResponse = await fetch(`${API_URL}/location`);
    if (!locationsResponse.ok) {
      throw new Error('Failed to fetch locations');
    }
    const locationsData = await locationsResponse.json();
    const locations = locationsData.results;

    // Fetch residents for each location
    const locationsWithResidents = await Promise.all(locations.map(async (location: any) => {
      const residentsPromises = location.residents.map(async (residentUrl: string) => {
        const residentResponse = await fetch(residentUrl);
        if (!residentResponse.ok) {
          throw new Error(`Failed to fetch resident: ${residentUrl}`);
        }
        return residentResponse.json();
      });
      const residentsData = await Promise.all(residentsPromises);
      return { ...location, residents: residentsData };
    }));

    return locationsWithResidents;
  } catch (error) {
    console.error('Error fetching locations with residents:', error);
    return []; // Return empty array in case of error
  }
};
