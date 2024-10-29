// Gets country name based on the

import toast from "react-hot-toast";

// latitude and longitude passed to it
export async function getCountryName(lat: number, lng: number) {
  const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=1&appid=${
    import.meta.env.VITE_GEOCODING_API_KEY
  }`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Check if the city was found
    if (data[0] && data[0].country) {
      return data[0].country;
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    toast.error(`${error}`);
  }
}
