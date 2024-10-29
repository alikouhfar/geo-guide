import { Notification } from "@mantine/core";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getCountriesByCCA2 } from "../services/countriesService";
import { CountryBrief } from "../types/country";
import CountryBorderItem from "./CountryBorderItem";
import ErrorMessage from "./ErrorMessage";

interface IProps {
  countryBorders: string[];
}

export default function CountryBorders({ countryBorders }: IProps) {
  const { data: borders, error } = useSuspenseQuery({
    queryKey: ["borders", { borders: countryBorders }],
    queryFn: () => getCountriesByCCA2(countryBorders),
  });

  return (
    <div id="borders-container" className="flex flex-col gap-3">
      <h3 className="uppercase font-black text-xl">Neighbors</h3>
      {error ? (
        <ErrorMessage title="An Error Occured" message={error.message} />
      ) : borders.length === 0 ? (
        <Notification color="red" withCloseButton={false}>
          This country has no neighbors
        </Notification>
      ) : (
        <ul id="borders-list" className="grid grid-cols-4 gap-3 items-start">
          {borders?.map((border: CountryBrief) => (
            <CountryBorderItem key={border.cca2} border={border} />
          ))}
        </ul>
      )}
    </div>
  );
}
