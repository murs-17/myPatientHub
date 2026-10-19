import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LocationMap() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmad",
      type: "Doctor",
      position: [3.139, 101.6869],
    },
    {
      id: 2,
      name: "City Clinic",
      type: "Clinic",
      position: [3.1478, 101.6953],
    },
    {
      id: 3,
      name: "Dr. Sara",
      type: "Doctor",
      position: [3.125, 101.684],
    },
  ];

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <MapContainer
        center={[3.139, 101.6869]}
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {doctors.map((doctor) => (
          <Marker key={doctor.id} position={doctor.position}>
            <Popup>
              <strong>{doctor.name}</strong>
              <br />
              {doctor.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
