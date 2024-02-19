// components/LocationList.tsx

import React from 'react';

interface Resident {
  id: number;
  name: string;
  status: string;
}

interface Location {
  id: number;
  name: string;
  type: string;
  residents: Resident[];
}

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div>
      {locations.map(location => (
        <div key={location.id} className="mb-4">
          <h2 className="text-lg font-bold">{location.name}</h2>
          <p className="text-gray-600 mb-2">Type: {location.type}</p>
          <div className="flex flex-col gap-2">
            {location.residents.map(resident => (
              <div key={resident.id} className="border rounded p-2">
                <h3 className="font-medium">{resident.name}</h3>
                <p>Status: {resident.status}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
