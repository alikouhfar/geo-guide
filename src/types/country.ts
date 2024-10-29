export type CountryBrief = {
  flags: {
    [format: string]: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        [type: string]: string;
      };
    };
  };
  cca2: string;
  cca3: string;
  capital: string[];
};
