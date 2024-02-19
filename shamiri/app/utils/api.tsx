// utils/api.ts

export  const api = {
    getLocations: async () => {
     
      const response = await fetch('https://example.com/api/locations');
      const data = await response.json();
      return data;
    },
  };
  