interface Resident {
    id: number;
    name: string;
    status: string;
    image: string;
    origin: string;
    characterName: string;
    character: string;
    episode: string;
  }
  
  export async  function getResident(id: number): Promise<Resident> {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch resident details');
      }
      const residentData = await response.json();
      return {
        id: residentData.id,
        name: residentData.name,
        status: residentData.status,
        image: residentData.image,
        origin: residentData.origin.name,
        characterName: residentData.characterName,
        character: residentData.character,
        episode: residentData.episode
      };
    } catch (error) {
      console.error('Error fetching resident details:', error);
      throw error;
    }
  }


  