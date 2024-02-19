import React from 'react';

interface Location {
  id: number;
  name: string;
  type: string;

}

interface LocationListProps {
  locations: Location[];
}

export const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div>
      <h2>Locations:</h2>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            <strong>Name:</strong> {location.name}, <strong>Type:</strong> {location.type}
            {/* Render other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};
