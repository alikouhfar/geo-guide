import useCountryStore from "../stores/useCountryStore";
import { CountryBrief } from "../types/country";

interface IProps {
  country: CountryBrief;
}

export default function CountryListItem({ country }: IProps) {
  const { setSelectedCountry } = useCountryStore();

  return (
    <li
      onClick={() => setSelectedCountry(country.cca2)}
      aria-label={`Show details for ${country.name.common}`}
      className="border-b border-zinc-700 py-2 flex gap-2 items-center cursor-pointer hover:bg-zinc-900 hover:pl-2 transition-all duration-300"
    >
      <img
        src={country.flags.svg}
        width="50"
        loading="lazy"
        alt={`Flag of ${country.name.common}`}
        className="min-h-8"
      />
      <div>
        <h5 className="font-bold leading-4">{country.name.common}</h5>
        <p className="text-xs leading-3 font-light">{country.capital[0]}</p>
      </div>
    </li>
  );
}
