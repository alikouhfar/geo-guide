import { create } from "zustand";

type State = {
  searchQuery: string;
  selectedCountry: string;
};

export type Actions = {
  setSearchQuery: (query: string) => void;
  setSelectedCountry: (country: string) => void;
  resetSelectedCountry: () => void;
};

const useCountryStore = create<State & Actions>((set) => ({
  searchQuery: "",
  selectedCountry: "",
  setSearchQuery: (query: string) => set(() => ({ searchQuery: query })),
  setSelectedCountry: (country: string) =>
    set(() => ({ selectedCountry: country })),
  resetSelectedCountry: () =>
    set(() => ({ selectedCountry: "", countryBorders: [] })),
}));

export default useCountryStore;
