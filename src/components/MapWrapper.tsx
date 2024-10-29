import { MapContainer } from "react-leaflet";
import { mediterraneanSeaLatlng } from "../lib/defaultValues";
import Map from "./Map";

export default function MapWrapper() {
  return (
    <main className="flex-1">
      <MapContainer
        preferCanvas={true}
        center={mediterraneanSeaLatlng}
        zoom={4}
        zoomControl={false}
        className="w-full h-full"
      >
        <Map />
      </MapContainer>
    </main>
  );
}
