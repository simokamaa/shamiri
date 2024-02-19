import React, { useState } from 'react';
import LocationFilter from './LocationFilter';
import LocationCard from './LocationCard';

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

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  const [filteredLocations, setFilteredLocations] = useState(locations);

  const handleFilterChange = (filtered: Location[]) => {
    setFilteredLocations(filtered);
  };

  return (
    <div>
      <LocationFilter locations={locations} handleFilterChange={handleFilterChange} />
      <div>
        {filteredLocations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationList;
