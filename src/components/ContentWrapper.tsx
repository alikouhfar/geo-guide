import MapWrapper from "./MapWrapper";
import Sidebar from "./Sidebar";

export default function ContentWrapper() {
  return (
    <div className="flex min-h-dvh relative">
      <Sidebar />
      <MapWrapper />
    </div>
  );
}
