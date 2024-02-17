import React from 'react';

interface Location {
  id: number;
  name: string;
  type: string;
}

interface Props {
  location: Location;
}

const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <h2>{location.name}</h2>
      <p>Type: {location.type}</p>
    </div>
  );
};

export default LocationCard;
