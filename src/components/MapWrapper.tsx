import { MapContainer } from "react-leaflet";
import Map from "./Map";

export default function MapWrapper() {
  return (
    <main className="flex-1">
      <MapContainer
        preferCanvas={true}
        center={[40, -4]}
        zoom={6}
        zoomControl={false}
        className="w-full h-full"
      >
        <Map />
      </MapContainer>
    </main>
  );
}
