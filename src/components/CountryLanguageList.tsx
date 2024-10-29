import { RiSpeakLine } from "@remixicon/react";

type Language = {
  [language: string]: string;
};

interface IProps {
  languages: Language;
}

export default function CountryLanguageList({ languages }: IProps) {
  return (
    <ul>
      {Object.keys(languages).map((language) => (
        <li key={language} className="flex items-center gap-1">
          <RiSpeakLine size="17px" color="#ffb83e" />
          <span>{languages[language]}</span>
        </li>
      ))}
    </ul>
  );
}
