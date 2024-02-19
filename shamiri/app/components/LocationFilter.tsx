import React from 'react';
import {Location} from '../utils/LocationTypes'


// In LocationFilter.tsx
interface LocationFilterProps {
    locations: Location[];
    setFilteredLocations: React.Dispatch<React.SetStateAction<Location[]>>;
  }
  

export const LocationFilter: React.FC<LocationFilterProps> = ({ locations, setFilteredLocations }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredLocations = locations.filter(location =>
      location.name.toLowerCase().includes(searchTerm) ||
      location.type.toLowerCase().includes(searchTerm)
    );
    setFilteredLocations(filteredLocations);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or type..."
        onChange={handleFilterChange}
      />
    </div>
  );
};
