
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import {
  Search,
  Map as MapIcon,
  List,
  ChevronDown,
  Stethoscope,
  LocateFixed,
  Heart,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import banner from "../../assets/reyhana/banner.jpg";
import "./FindClinic.css";

/* =====================================
   Fix Leaflet marker icons
===================================== */

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

/* =====================================
   Clinic data
===================================== */

const clinics = [
  {
    id: 1,
    name: "Klinik Pakar Kesihatan USIM",
    specialty: "Primary Care",
    address:
      "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    locationCode: "RQ6F+ P7 NILAI, Negeri Sembilan, Malaysia",
    image: "/images/usim-clinic.jpg",
    lat: 2.8184,
    lng: 101.7954,
    gender: "All",
    condition: "General",
    languages: ["English", "Malay"],
    ages: ["Children", "Adults"],
    onlineScheduling: true,
    primaryCare: true,
  },
  {
    id: 2,
    name: "Dialysis Centers",
    specialty: "Dialysis",
    address:
      "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    locationCode: "RQ6F+ P7 NILAI, Negeri Sembilan, Malaysia",
    image: "/images/usim-dialysis.jpg",
    lat: 2.8184,
    lng: 101.7954,
    gender: "All",
    condition: "Dialysis",
    languages: ["English", "Malay"],
    ages: ["Adults"],
    onlineScheduling: true,
    primaryCare: false,
  },
];

/* =====================================
   Map controller
===================================== */

function MapController({ selectedClinic, currentLocation }) {
  const map = useMap();

  useEffect(() => {
    if (selectedClinic) {
      map.flyTo(
        [selectedClinic.lat, selectedClinic.lng],
        13,
        { duration: 1 }
      );
    } else if (currentLocation) {
      map.flyTo(
        [currentLocation.lat, currentLocation.lng],
        13,
        { duration: 1 }
      );
    }
  }, [selectedClinic, currentLocation, map]);

  return null;
}

/* =====================================
   Filter select component
===================================== */

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="filter-select-wrapper">
      <select
        value={value}
        onChange={onChange}
        aria-label={label}
      >
        <option value="">{label}</option>

        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown size={17} />
    </div>
  );
}

/* =====================================
   Find Clinic page
===================================== */

export default function FindClinic() {
  const navigate = useNavigate();
  const {
    Header,
    onToggleSidebar,
    isSidebarOpen,
    isCompact,
    isScrolled,
    pageTitle,
  }= useOutletContext();
  

  const [activeView, setActiveView] = useState("map");

  const [search, setSearch] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [specialty, setSpecialty] = useState("");
  const [gender, setGender] = useState("");
  const [condition, setCondition] = useState("");
  const [language, setLanguage] = useState("");

  const [children, setChildren] = useState(false);
  const [adults, setAdults] = useState(false);
  const [allAges, setAllAges] = useState(false);

  const [onlineScheduling, setOnlineScheduling] = useState(false);
  const [primaryCare, setPrimaryCare] = useState(false);

  const [selectedClinic, setSelectedClinic] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  /* =====================================
     Filter clinics
  ===================================== */

  const filteredClinics = useMemo(() => {
    return clinics.filter((clinic) => {
      const searchText = [
        clinic.name,
        clinic.address,
        clinic.specialty,
        clinic.condition,
        clinic.locationCode,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !search || searchText.includes(search.toLowerCase());

      const matchesZip =
        !zipCode ||
        `${clinic.address} ${clinic.locationCode}`
          .toLowerCase()
          .includes(zipCode.toLowerCase());

      const matchesSpecialty =
        !specialty || clinic.specialty === specialty;

      const matchesGender =
        !gender ||
        clinic.gender === "All" ||
        clinic.gender === gender;

      const matchesCondition =
        !condition || clinic.condition === condition;

      const matchesLanguage =
        !language || clinic.languages.includes(language);

      const matchesAge =
        (!children && !adults && !allAges) ||
        (allAges &&
          clinic.ages.includes("Children") &&
          clinic.ages.includes("Adults")) ||
        (children && clinic.ages.includes("Children")) ||
        (adults && clinic.ages.includes("Adults"));

      const matchesOnline =
        !onlineScheduling || clinic.onlineScheduling;

      const matchesPrimaryCare =
        !primaryCare || clinic.primaryCare;

      return (
        matchesSearch &&
        matchesZip &&
        matchesSpecialty &&
        matchesGender &&
        matchesCondition &&
        matchesLanguage &&
        matchesAge &&
        matchesOnline &&
        matchesPrimaryCare
      );
    });
  }, [
    search,
    zipCode,
    specialty,
    gender,
    condition,
    language,
    children,
    adults,
    allAges,
    onlineScheduling,
    primaryCare,
  ]);

  /* =====================================
     Current location
  ===================================== */

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      window.alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setCurrentLocation(location);
        setSelectedClinic(null);
        setActiveView("map");
      },
      () => {
        window.alert(
          "Unable to get your current location. Please allow location access."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  /* =====================================
     Search
  ===================================== */

  const handleSearch = (event) => {
    event?.preventDefault();

    if (filteredClinics.length > 0) {
      setSelectedClinic(filteredClinics[0]);
    } else {
      setSelectedClinic(null);
    }
  };

  /* =====================================
     Clear filters
  ===================================== */

  const clearFilters = () => {
    setSearch("");
    setZipCode("");
    setSpecialty("");
    setGender("");
    setCondition("");
    setLanguage("");

    setChildren(false);
    setAdults(false);
    setAllAges(false);

    setOnlineScheduling(false);
    setPrimaryCare(false);

    setSelectedClinic(null);
  };

  /* =====================================
     Render
  ===================================== */

  return (
    <main className="find-clinic-page">
      {/* Hero */}
      <section
  className="clinic-hero"
  style={{
    backgroundImage: `linear-gradient(310deg, rgba(121, 40, 202, 0.6), rgba(255, 0, 128, 0.6)), url(${banner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Header over the hero banner */}
  <div className="absolute top-0 left-0 right-0 z-20">
    <Header
      onToggleSidebar={onToggleSidebar}
      isSidebarOpen={isSidebarOpen}
      isCompact={isCompact}
      isScrolled={isScrolled}
      pageTitle={pageTitle}
      isOverlay={true}
    />
  </div>

  <div className="hero-content">
          <h1>Find a Clinic</h1>

          <p>
            Search Clinics and schedule an appointment
            with doctors through Clinic
          </p>

          <form className="hero-search" onSubmit={handleSearch}>
            <div className="hero-input">
              <Search size={20} />

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="hero-input zip-input">
              <input
                type="text"
                placeholder="Zip Code or Neighborhood"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="current-button"
              onClick={handleCurrentLocation}
            >
              CURRENT
            </button>

            <button type="submit" className="search-button">
              SEARCH
            </button>
          </form>
        </div>
      </section>

      {/* Map / List tabs */}
      <div className="view-tabs">
        <button
          type="button"
          className={
            activeView === "map"
              ? "view-tab active"
              : "view-tab"
          }
          onClick={() => setActiveView("map")}
        >
          <MapIcon size={21} />
          <span>Map</span>
        </button>

        <button
          type="button"
          className={
            activeView === "list"
              ? "view-tab active"
              : "view-tab"
          }
          onClick={() => setActiveView("list")}
        >
          <List size={21} />
          <span>List</span>
        </button>
      </div>

      {/* Main content */}
      <div className="clinic-content">
        {/* Filter sidebar */}
        <aside className="filters-panel">
          <div className="filter-search-section">
            <div className="filter-input">
              <input
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                placeholder="Search specialty"
                aria-label="Search specialty"
              />
            </div>

            <div className="filter-input">
              <input
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Zip code or Neighborhood"
                aria-label="Zip code or Neighborhood"
              />
            </div>
          </div>

          {/* Filter by */}
          <div className="filter-group">
            <h3>Filter By</h3>

            <FilterSelect
              label="Specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              options={["Primary Care", "Dialysis"]}
            />

            <FilterSelect
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={["Male", "Female"]}
            />

            <FilterSelect
              label="Condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              options={["General", "Dialysis"]}
            />

            <FilterSelect
              label="Languages"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              options={["English", "Malay"]}
            />
          </div>

          {/* Providers who treat */}
          <div className="checkbox-section">
            <h3>Providers Who Treat</h3>

            <label>
              <input
                type="checkbox"
                checked={allAges}
                onChange={(e) => {
                  setAllAges(e.target.checked);

                  if (e.target.checked) {
                    setChildren(false);
                    setAdults(false);
                  }
                }}
              />
              <span>All Ages</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={children}
                onChange={(e) => {
                  setChildren(e.target.checked);
                  setAllAges(false);
                }}
              />
              <span>Children</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={adults}
                onChange={(e) => {
                  setAdults(e.target.checked);
                  setAllAges(false);
                }}
              />
              <span>Adults</span>
            </label>
          </div>

          {/* View only */}
          <div className="checkbox-section">
            <h3>View Only</h3>

            <label>
              <input
                type="checkbox"
                checked={onlineScheduling}
                onChange={(e) =>
                  setOnlineScheduling(e.target.checked)
                }
              />
              <span>Online Scheduling</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={primaryCare}
                onChange={(e) =>
                  setPrimaryCare(e.target.checked)
                }
              />
              <span>Primary Care</span>
            </label>
          </div>

          
        </aside>

        {/* Right content */}
        <section className="results-section">
          {activeView === "map" ? (
            <div className="map-wrapper">
              <MapContainer
                center={
                  currentLocation
                    ? [currentLocation.lat, currentLocation.lng]
                    : [3.139, 101.6869]
                }
                zoom={currentLocation ? 13 : 9}
                scrollWheelZoom={true}
                className="clinic-map"
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapController
                  selectedClinic={selectedClinic}
                  currentLocation={currentLocation}
                />

                {filteredClinics.map((clinic) => (
                  <Marker
                    key={clinic.id}
                    position={[clinic.lat, clinic.lng]}
                    eventHandlers={{
                      click: () => setSelectedClinic(clinic),
                    }}
                  >
                    <Popup>
                      <div className="map-popup">
                        <h4>{clinic.name}</h4>
                        <p>{clinic.address}</p>
                        <span>{clinic.specialty}</span>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {currentLocation && (
                  <Marker
                    position={[
                      currentLocation.lat,
                      currentLocation.lng,
                    ]}
                  >
                    <Popup>Your current location</Popup>
                  </Marker>
                )}
              </MapContainer>

              {/* Map controls */}
              <div className="map-type-buttons">
                <button type="button" className="active">
                  Map
                </button>

                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Satellite
                </button>
              </div>

              <button
                type="button"
                className="location-button"
                onClick={handleCurrentLocation}
                aria-label="Find my current location"
                title="Find my current location"
              >
                <LocateFixed size={19} />
              </button>
            </div>
          ) : (
            <div className="clinic-list"
            
            >
              {filteredClinics.length === 0 ? (
                <div className="empty-state">
                  <Stethoscope size={45} />

                  <h3>No clinics found</h3>

                  <p>
                    Try changing your search or filters.
                  </p>

                  <button
                    type="button"
                    className="clinic-action-button"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredClinics.map((clinic) => (
                  <article
                    className="clinic-card"
                    key={clinic.id}
                  >
                    <div
                      className="clinic-card-image"
                      onClick={() => setSelectedClinic(clinic)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (
                          e.key === "Enter" ||
                          e.key === " "
                        ) {
                          e.preventDefault();
                          setSelectedClinic(clinic);
                        }
                      }}
                    >
                      {clinic.image ? (
                        <img
                          src={clinic.image}
                          alt={clinic.name}
                        />
                      ) : (
                        <Stethoscope size={40} />
                      )}
                    </div>

                    <div
                      className="clinic-info"
                      onClick={() => setSelectedClinic(clinic)}
                    >
                      <h3>{clinic.name}</h3>

                      <p>{clinic.address}</p>

                      {clinic.website && (
                        <p>
                          <a
                            href={clinic.website}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {clinic.website}
                          </a>
                        </p>
                      )}

                      {clinic.phone && (
                        <p>{clinic.phone}</p>
                      )}

                      {clinic.locationCode && (
                        <p>{clinic.locationCode}</p>
                      )}

                      
                    </div>

                    <div className="clinic-card-actions">
                      <button
                        type="button"
                        className="clinic-action-button"
                        onClick={() =>
                          navigate("/clinic-details", {
                            state: { clinic },
                          })
                        }
                      >
                        <span>MORE ABOUT THIS LOCATION</span>
                      </button>

                      <button
                        type="button"
                        className="clinic-action-button"
                        onClick={() =>
                          navigate("/clinic-details", {
                            state: {
                              clinic,
                              action: "schedule",
                            },
                          })
                        }
                      >
                        <span>FIND A DOCTOR AND SCHEDULE</span>
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="px-8 py-4 flex flex-wrap justify-between items-center gap-4 text-[13.5px] text-[#7f8c8d]">
        <div className="flex items-center gap-1.5">
          <span>© 2026, made with</span>

          <Heart
            size={16}
            color="#67748E"
            fill="#67748E"
            strokeWidth={2}
          />

          <span>by</span>

          <span
          className="font-bold ml-1"
          style={{ color: "rgb(52, 71, 103)" }}
          >
           MyPiHUB
          </span>

          <span className="ml-1">for a better web.</span>
        </div>

        <div className="flex items-center gap-7">
          <a
            href="#"
            className="hover:text-[#ec407a] transition-colors"
          >
            MyPatientHUB
          </a>

          <a
            href="#"
            className="hover:text-[#ec407a] transition-colors"
          >
            About Us
          </a>

          <a
            href="#"
            className="hover:text-[#ec407a] transition-colors"
          >
            Blog
          </a>
        </div>
      </footer>
    </main>
  );
}
