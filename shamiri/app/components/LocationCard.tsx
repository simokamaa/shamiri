import React from 'react';
import Link from 'next/link';

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

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="border border-gray-200 rounded-md shadow-md p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
      <p className="text-gray-600 mb-2">Type: {location.type}</p>
      <div className="grid grid-cols-3 gap-4">
        {location.residents.map(resident => (
          <div key={resident.id} className="flex flex-col items-center">
            <Link href={`/pages/resident/${resident.id}`} passHref>
              <div>
                <img src={resident.image} alt={resident.name} className="w-24 h-24 rounded-full mb-2 shadow-md" />
              </div>
            </Link>
            <p className="font-semibold text-center">{resident.name}</p>
            <p className="text-gray-600 text-center">{resident.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
