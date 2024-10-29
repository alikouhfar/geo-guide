import { RiCoinsLine } from "@remixicon/react";

type Currency = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};

interface IProps {
  currencies: Currency;
}

export default function CountryCurrencyList({ currencies }: IProps) {
  return (
    <ul>
      {Object.keys(currencies).map((currency) => (
        <li key={currencies[currency].name} className="flex items-center gap-1">
          <RiCoinsLine size="17px" color="#ffb83e" />
          <span>
            {currencies[currency].name} - {currencies[currency].symbol}
          </span>
        </li>
      ))}
    </ul>
  );
}
