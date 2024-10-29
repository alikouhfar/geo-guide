import {
  RiArrowDropLeftLine,
  RiGroup3Line,
  RiMap2Line,
} from "@remixicon/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getCountryByCCA2 } from "../services/countriesService";
import useCountryStore from "../stores/useCountryStore";
import {
  convertToCompactNumber,
  formatNumber,
} from "../utils/numberFormatters";
import CountryBorders from "./CountryBorders";
import CountryCurrencyList from "./CountryCurrencyList";
import CountryLanguageList from "./CountryLanguageList";
import ErrorMessage from "./ErrorMessage";
import { Suspense } from "react";
import CountryBordersSkeleton from "./CountryBordersSkeleton";

interface IProps {
  cca2: string;
}

export default function CountryDetails({ cca2 }: IProps) {
  const { resetSelectedCountry } = useCountryStore();

  const { data: country, error } = useSuspenseQuery({
    queryKey: ["countries", { cca2 }],
    queryFn: () => getCountryByCCA2(cca2),
    staleTime: Infinity,
  });

  return (
    <section className="overflow-hidden flex flex-col mb-4">
      <button
        onClick={resetSelectedCountry}
        aria-label="Go back to country list"
        className="text-sm text-zinc-50 flex my-4 items-center gap-1"
      >
        <RiArrowDropLeftLine />
        <span>All countries</span>
      </button>
      {error ? (
        <ErrorMessage
          spacing="mt-2"
          title="An Error Occured"
          message={error.message}
        />
      ) : (
        <article className="overflow-y-auto pb-4 flex flex-col">
          <ul className="flex flex-col sm:flex-row md:flex-col sm:gap-4 md:gap-0 sm:items-center md:items-start">
            <li>
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="mb-2.5"
              />
            </li>
            <li className="sm:mr-4 md:mr-0">
              <h2 className="font-bold text-2xl">{country.name.common}</h2>
              <p className="leading-3 font-light">
                {country.capital.length > 0 ? country.capital : "N/A"} &mdash;{" "}
                {country.continents}
              </p>
            </li>
          </ul>
          <div className="text-sm mt-10 sm:mt-2 md:mt-10 flex flex-col gap-2">
            {Object.keys(country.languages).length > 0 && (
              <CountryLanguageList languages={country.languages} />
            )}
            {Object.keys(country.currencies).length > 0 && (
              <CountryCurrencyList currencies={country.currencies} />
            )}
            <ul className="flex items-center gap-3">
              <li className="flex items-center gap-1">
                <RiGroup3Line size="17px" color="#ffb83e" />
                <span>{convertToCompactNumber(country.population)}</span>
              </li>
              <span>&mdash;</span>
              <li className="flex items-center gap-1">
                <RiMap2Line size="17px" color="#ffb83e" />
                <span>{formatNumber(country.area)} km²</span>
              </li>
            </ul>
          </div>
          <hr className="my-5 border-zinc-500" />
          <Suspense fallback={<CountryBordersSkeleton />}>
            <CountryBorders countryBorders={country.borders} />
          </Suspense>
        </article>
      )}
    </section>
  );
}
