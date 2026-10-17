import { useState } from 'react';
function DoctorMap() { const [mapStyle, setMapStyle] = useState('map'); const [showLabels, setShowLabels] = useState(false); const [showTerrain, setShowTerrain] = useState(false);
let type = 'm';
if (mapStyle === 'satellite') { type = showLabels ? 'h' : 'k'; } else if (showTerrain) { type = 'p'; }
const url = 'https://maps.google.com/maps?ll=3.1,101.55&t=' + type + '&z=9&output=embed';
return ( <div className="fd-map"> <iframe title="Doctors map" src={url} loading="lazy" />
  <div className="fd-map-controls">
    <div className="fd-map-seg">
      <button
        type="button"
        className={'fd-map-seg-btn' + (mapStyle === 'map' ? ' fd-map-seg-on' : '')}
        onClick={() => setMapStyle('map')}
      >
        Map
      </button>
      <button
        type="button"
        className={
          'fd-map-seg-btn' + (mapStyle === 'satellite' ? ' fd-map-seg-on' : '')
        }
        onClick={() => setMapStyle('satellite')}
      >
        Satellite
      </button>
    </div>

    {mapStyle === 'map' && (
      <label className="fd-map-check">
        <input
          type="checkbox"
          checked={showTerrain}
          onChange={() => setShowTerrain(!showTerrain)}
        />
        Terrain
      </label>
    )}

    {mapStyle === 'satellite' && (
      <label className="fd-map-check">
        <input
          type="checkbox"
          checked={showLabels}
          onChange={() => setShowLabels(!showLabels)}
        />
        Labels
      </label>
    )}
  </div>
</div>
); }
export default DoctorMap;

