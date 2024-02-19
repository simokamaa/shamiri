import React from 'react';

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
  image: string; // URL of the resident's image
}

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
      <p className="text-gray-600 mb-2">Type: {location.type}</p>
      <div className="grid grid-cols-3 gap-4">
        {location.residents.map(resident => (
          <div key={resident.id} className="flex flex-col items-center">
            <img src={resident.image} alt={resident.name} className="w-24 h-24 rounded-full mb-2" />
            <p className="font-semibold">{resident.name}</p>
            <p className="text-gray-600">{resident.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
