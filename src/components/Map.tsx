import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import {
  GeoJSON,
  TileLayer,
  useMap,
  useMapEvent,
  ZoomControl,
} from "react-leaflet";
import { mediterraneanSeaLatlng } from "../lib/defaultValues";
import { getCountryByCCA2 } from "../services/countriesService";
import { getCountryName } from "../services/geocodingService";
import useCountryStore from "../stores/useCountryStore";
import { findCountryBorderLine } from "../utils/countryBorderLine";
import { generateRandomColor } from "../utils/randomValueGenerators";
import toast from "react-hot-toast";

function getMapScaleByCountryArea(area: number) {
  if (area < 500) {
    return 11;
  } else if (area >= 500 && area < 5000) {
    return 9;
  } else if (area >= 5000 && area < 50000) {
    return 7;
  } else if (area >= 50000 && area < 500000) {
    return 6;
  } else if (area >= 500000 && area < 5000000) {
    return 5;
  } else {
    return 3;
  }
}

export default function Map() {
  const map = useMap();
  const { selectedCountry, setSelectedCountry } = useCountryStore();

  const {
    data: country,
    status,
    error,
  } = useQuery({
    queryKey: ["countries", { cca2: selectedCountry }],
    queryFn: () => getCountryByCCA2(selectedCountry),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (status === "success" && country) {
      map.setView(country.latlng, getMapScaleByCountryArea(country.area));
    }
    if (status === "success" && !country) {
      map.setView(mediterraneanSeaLatlng, 4);
    }
  }, [country]);

  useMapEvent("click", async (event) => {
    const { lat, lng } = event.latlng;
    const country = await getCountryName(lat, lng);
    if (country === selectedCountry || !country) return;
    setSelectedCountry(country);
  });

  if (status === "pending") return;
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        accessToken="f6ba29e8-2ded-49c3-8740-07af5a2ee1d8"
        minZoom={4}
        maxZoom={12}
      />
      <ZoomControl position="topright" />
      {status === "error" && toast.error(error.message)}
      {country?.latlng && status === "success" && (
        <GeoJSON
          key={selectedCountry}
          data={findCountryBorderLine(country?.cca3)}
          style={{ color: generateRandomColor() }}
        />
      )}
    </>
  );
}
