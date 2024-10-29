import { useSuspenseQuery } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { getCountries } from "../services/countriesService";
import useCountryStore from "../stores/useCountryStore";
import { CountryBrief } from "../types/country";
import CountryListItem from "./CountryListItem";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const DynamicCountryDetails = lazy(() => import("./CountryDetails"));

export default function CountryList() {
  const { searchQuery, selectedCountry } = useCountryStore();
  const { data: countries, error } = useSuspenseQuery({
    queryKey: ["countries", searchQuery],
    queryFn: () => getCountries(searchQuery),
    staleTime: Infinity,
  });

  // Show country details if there is
  // any country selected
  if (selectedCountry)
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicCountryDetails cca2={selectedCountry} />
      </Suspense>
    );

  if (error)
    return (
      <ErrorMessage
        spacing="mt-2"
        title="An Error Occured"
        message={error.message}
      />
    );

  // Sorting the countries based on their name
  countries.sort((a: any, b: any) => (a.name.common < b.name.common ? -1 : 1));

  return (
    <ul className="overflow-y-auto my-4">
      {countries.map((country: CountryBrief) => (
        <CountryListItem country={country} key={country.cca2} />
      ))}
    </ul>
  );
}
