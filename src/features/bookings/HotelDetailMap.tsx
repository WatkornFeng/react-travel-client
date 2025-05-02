import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MARKER_RED } from "./MapConstant";

interface IProps {
  lat: number;
  lng: number;
}

function HotelDetailMap({ lat, lng }: IProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={8}
      scrollWheelZoom={true}
      style={{ height: "500px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={MARKER_RED} />
    </MapContainer>
  );
}

export default HotelDetailMap;
