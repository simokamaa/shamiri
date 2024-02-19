'use client'
import React, { useEffect, useState } from 'react';
import LocationList from '../../components/LocationList';
import { getLocationsWithResidents } from '../../utils/getLocationsWithResidents';

interface Location {
  id: number;
  name: string;
  type: string;
  residents: Resident[];
}

interface Resident {
  id: number;
  name: string;
  status: string;
  image: string;
}


const HomePage: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsData = await getLocationsWithResidents();
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div >
    <div>
    <h1 className="text-3xl font-bold mb-4">Locations</h1>
      <LocationList locations={locations} />
    </div>
    </div>
  );
};

export default HomePage;
