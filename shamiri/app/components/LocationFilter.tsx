import React, { useState } from 'react';

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

interface LocationFilterProps {
  locations: Location[];
  handleFilterChange: (filtered: Location[]) => void;
}

const LocationFilter: React.FC<LocationFilterProps> = ({ locations, handleFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterLocations(event.target.value);
  };

  const filterLocations = (term: string) => {
    const filtered = locations.filter(location =>
      location.name.toLowerCase().includes(term.toLowerCase()) ||
      location.residents.some(resident =>
        resident.name.toLowerCase().includes(term.toLowerCase())
      )
    );
    handleFilterChange(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by location name, character name, or episode name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default LocationFilter;
