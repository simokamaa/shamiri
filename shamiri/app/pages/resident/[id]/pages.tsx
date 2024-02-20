import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Resident {
  id: number;
  name: string;
  status: string;
  image: string;
}

const ResidentDetailsPage: React.FC = () => {
  const [resident, setResident] = useState<Resident | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query; // Directly access the ID from the router object

  useEffect(() => {
    const fetchResidentDetails = async () => {
      try {
        if (id) {
          const characterResponse = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          if (!characterResponse.ok) {
            throw new Error('Resident not found');
          }
          const characterData: Resident = await characterResponse.json();
          setResident(characterData);
        }
      } catch (error) {
        console.error('Error fetching resident details:', error);
      } finally {
        setLoading(false); // Set loading to false whether fetching succeeds or fails
      }
    };

    fetchResidentDetails();
  }, [id]);

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
