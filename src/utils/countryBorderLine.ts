import borders from "../lib/countries.json";

// Find border lines of a country
export function findCountryBorderLine(cca2: string) {
  const borderLines = borders as any;
  const borderLine = borderLines?.features.find(
    (feature: any) => feature.properties.ISO_A3 === cca2
  );

  return borderLine;
}
