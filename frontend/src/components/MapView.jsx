import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px"
};

/* ===== MARKER ICONS ===== */

// 🔵 Normal Bus
const normalIcon = {
  url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
};

// 🟢 Booked Bus
const bookedIcon = {
  url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
};

// 🎯 Selected Bus (yellow)
const selectedIcon = {
  url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
};

export default function MapView({ buses, selectedBus, bookedBusId }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const mapRef = useRef(null);
  const [activeBus, setActiveBus] = useState(null);

  /* ===== 🧭 ZOOM TO SELECTED BUS ===== */
  useEffect(() => {
    if (selectedBus && mapRef.current) {
      mapRef.current.panTo({
        lat: selectedBus.latitude,
        lng: selectedBus.longitude
      });
      mapRef.current.setZoom(10);
      setActiveBus(selectedBus);
    }
  }, [selectedBus]);

  if (!isLoaded) return <p>Loading Map...</p>;
  if (!buses || buses.length === 0) return null;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: buses[0].latitude,
        lng: buses[0].longitude
      }}
      zoom={6}
      onLoad={(map) => (mapRef.current = map)}
    >
      {/* ===== BUS MARKERS ===== */}
      {buses.map((bus) => {
        let icon = normalIcon;

        if (bus._id === bookedBusId) icon = bookedIcon;
        if (selectedBus && bus._id === selectedBus._id) icon = selectedIcon;

        return (
          <Marker
            key={bus._id}
            position={{ lat: bus.latitude, lng: bus.longitude }}
            icon={icon}
            onClick={() => setActiveBus(bus)}
          />
        );
      })}

      {/* ===== INFO WINDOW ===== */}
      {activeBus && (
        <InfoWindow
          position={{
            lat: activeBus.latitude,
            lng: activeBus.longitude
          }}
          onCloseClick={() => setActiveBus(null)}
        >
          <div>
            <b>{activeBus.busNumber}</b>
            <br />
            {activeBus.from} ➝ {activeBus.to}
            <br />
            Status:{" "}
            <b
              style={{
                color:
                  activeBus._id === bookedBusId ? "green" : "#003366"
              }}
            >
              {activeBus._id === bookedBusId
                ? "Booked"
                : "Available"}
            </b>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}