// Get selected data for
// all countries by given name
export async function getCountries(name: string) {
  const url = !name
    ? "https://restcountries.com/v3.1/all?fields=flags,name,capital,cca2"
    : `https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,cca2`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

// Get selected data for countries
// based on the cca2List passed to it
export async function getCountriesByCCA2(cca2List: string[]) {
  if (cca2List.length === 0) return [];
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${String(
      cca2List
    )}&?fields=flags,name,capital,cca2`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

// Get selected data for country
// based on the cca2 passed to it
export async function getCountryByCCA2(cca2: string) {
  if (!cca2) return null;
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${cca2}?fields=flags,name,cca2,cca3,capital,continents,languages,currencies,population,area,latlng,borders`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
