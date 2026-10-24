import { useEffect, useRef } from 'react';

const KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

/* مختصات تقریبی ۷ مارکر از روی عکس سایت اصلی.
   اگر در doctors.js مختصات واقعی داری، اینجا جایگزین کن */
const MARKERS = [
  { lat: 3.338, lng: 101.593 },
  { lat: 3.24, lng: 101.49 },
  { lat: 3.192, lng: 101.49 },
  { lat: 3.128, lng: 101.492 },
  { lat: 3.139, lng: 101.595 },
  { lat: 3.139, lng: 101.687 },
  { lat: 3.147, lng: 101.7 },
];

let loader = null;
function loadGoogle() {
  if (window.google && window.google.maps) return Promise.resolve();
  if (!loader) {
    loader = new Promise(function (resolve, reject) {
      const s = document.createElement('script');
      s.src = 'https://maps.googleapis.com/maps/api/js?key=' + KEY;
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return loader;
}

function DoctorMap({ markers = MARKERS }) {
  const boxRef = useRef(null);

  useEffect(
    function () {
      let map = null;
      loadGoogle().then(function () {
        if (!boxRef.current) return;
        map = new window.google.maps.Map(boxRef.current, {
          center: { lat: 3.12, lng: 101.62 },
          zoom: 9,
          mapTypeControl: true,
          zoomControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          cameraControl: false,
        });
        markers.forEach(function (p) {
          new window.google.maps.Marker({ position: p, map: map });
        });
      });
    },
    [markers]
  );

  return (
    <div className="fd-map border-0 bg-transparent shadow-none outline-none">
      <div ref={boxRef} style={{ width: '100%', height: '100%', minHeight: 400 }} />
    </div>
  );
}

export default DoctorMap;