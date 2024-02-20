'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  params: { id: string }; // Change id to string since it's coming from Next.js router
}

interface Resident {
  id: number;
  name: string;
  status: string;
  image: string;
}

const ResidentDetailsPage: React.FC<Props> = ({ params: { id } }) => {
  const [resident, setResident] = useState<Resident | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchResidentDetails = async () => {
      try {
        // Make request to Rick and Morty API with the provided id
        const characterResponse: Response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const characterData: Resident = await characterResponse.json();

        // Set resident state with the fetched data
        setResident(characterData);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching resident details:', error);
        setLoading(false); // Set loading to false if an error occurs
      }
    };

    fetchResidentDetails();
  }, [id]); // Fetch data whenever id changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!resident) {
    return <div>Error: Resident not found</div>;
  }

  return (
    <div>
      <h1>{resident.name} Details</h1>
      <p>Status: {resident.status}</p>
      <p>Image: <img src={resident.image} alt={resident.name} /></p>
    </div>
  );
};

export default ResidentDetailsPage;
