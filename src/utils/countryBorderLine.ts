import toast from "react-hot-toast";

// Get border lines file
async function getBorderLines() {
  try {
    const response = await fetch("./src/lib/countries.geojson");
    if (!response.ok) {
      throw new Error("Network response for border lines was not ok");
    }

    return await response.json();
  } catch (error) {
    toast.error(`${error}`);
  }
}

export const borderLines = await getBorderLines();

// Find border lines of a country
export function findCountryBorderLine(cca2: string) {
  const borderLine = borderLines?.features.find(
    (feature: any) => feature.properties.ISO_A3 === cca2
  );

  return borderLine;
}
