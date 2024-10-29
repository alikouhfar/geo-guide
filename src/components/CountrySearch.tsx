import { CloseButton, TextInput } from "@mantine/core";
import { RiSearchLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import useCountryStore from "../stores/useCountryStore";

export default function CountrySearch() {
  const [term, setTerm] = useState("");
  const { searchQuery, setSearchQuery, resetSelectedCountry } =
    useCountryStore();
  const debouncedValue = useDebounce(term, 500);

  function handleSearchInput(value: string) {
    setTerm(value);
  }

  function resetSearchInput() {
    setTerm("");
    setSearchQuery("");
    resetSelectedCountry();
  }

  useEffect(() => {
    setSearchQuery(debouncedValue);
  }, [debouncedValue]);

  return (
    <header>
      <TextInput
        placeholder="Country name in English"
        value={term}
        leftSectionPointerEvents="none"
        leftSection={<RiSearchLine size={16} />}
        onKeyDown={resetSelectedCountry}
        onChange={(e) => handleSearchInput(e.target.value)}
        rightSection={
          <CloseButton
            size="xs"
            onClick={resetSearchInput}
            className={`${searchQuery ? "block" : "hidden"}`}
          />
        }
        aria-label="Search for countries"
      />
    </header>
  );
}
