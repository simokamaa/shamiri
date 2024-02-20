// pages/resident/[id]/index.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Resident {
  id: number;
  name: string;
  status: string;
  image: string;
  origin: {
    name: string;
  };
  characterNames: string[]; // List of associated character names
}

const ResidentDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [resident, setResident] = useState<Resident | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResidentDetails = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch resident details');
        }
        const data = await response.json();
        const residentData: Resident = {
          id: data.id,
          name: data.name,
          status: data.status,
          image: data.image,
          origin: {
            name: data.origin.name,
          },
          characterNames: data.episode.map((episode: any) => episode.name), // Assuming each episode contains character names
        };
        setResident(residentData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resident details:', error);
      }
    };

    if (id) {
      fetchResidentDetails();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!resident) {
    return <div>Resident not found</div>;
  }

  return (
    <div>
      <h1>{resident.name} Details</h1>
      <img src={resident.image} alt={resident.name} />
      <p>Status: {resident.status}</p>
      <p>Origin: {resident.origin.name}</p>
      <p>Character Names:</p>
      <ul>
        {resident.characterNames.map((characterName, index) => (
          <li key={index}>{characterName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentDetailPage;
