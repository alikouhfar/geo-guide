import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useCountryStore from "../stores/useCountryStore";
import { CountryBrief } from "../types/country";

interface IProps {
  border: CountryBrief;
}

export default function CountryBorderItem({ border }: IProps) {
  const [opened, { close, open }] = useDisclosure(false);
  const { setSelectedCountry } = useCountryStore();

  return (
    <Popover
      width={70}
      position="top-start"
      arrowPosition="side"
      arrowOffset={10}
      withArrow
      shadow="xl"
      transitionProps={{ transition: "fade-up", duration: 500 }}
      opened={opened}
    >
      <Popover.Target>
        <li
          onMouseEnter={open}
          onMouseLeave={close}
          onClick={() => setSelectedCountry(border.cca2)}
          className="cursor-pointer"
          aria-label={`Show details for ${border.name.common}`}
        >
          <img
            src={border.flags.svg}
            alt={`Flag of ${border.name.common}`}
            className="min-h-11 object-cover"
          />
        </li>
      </Popover.Target>
      <Popover.Dropdown
        style={{
          pointerEvents: "none",
          zIndex: 1005,
          padding: "6px 10px",
          width: "fit-content",
        }}
      >
        <Text size="xs">{border.name.common}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
