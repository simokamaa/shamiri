'use client'
import { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import  { LocationList }  from '../../components/LocationList';
import { LocationFilter } from '../../components/LocationFilter';

interface Location {
    id: number;
    name: string;
    type: string;
   
  }
  

export default function Home() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);


  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await api.getLocations();
        setLocations(response.data.results);
        setFilteredLocations(response.data.results);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    }
    fetchLocations();
  }, []);

  return (
    <div>
      <h1>Locations</h1>
      <LocationFilter locations={locations} setFilteredLocations={setFilteredLocations} />
      <LocationList locations={filteredLocations} />
    </div>
  );
}
