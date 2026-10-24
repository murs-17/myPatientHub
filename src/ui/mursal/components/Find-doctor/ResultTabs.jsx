import { useEffect, useRef } from 'react';
const LIST_PATH = 'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z';
function ResultTabs({ tab, onChange }) { const mapRef = useRef(null); const listRef = useRef(null); const barRef = useRef(null);
useEffect( function () { const active = tab === 'map' ? mapRef.current : listRef.current; const bar = barRef.current;
  if (active && bar) {
    bar.style.left = active.offsetLeft + 'px';
    bar.style.width = active.offsetWidth + 'px';
  }
},
[tab]
);
return ( <div className="fd-tabs"> <div className="fd-tabs-scroller"> <div className="fd-tabs-row" role="tablist"> <button ref={mapRef} type="button" role="tab" aria-selected={tab === 'map'} className="fd-tab" onClick={() => onChange('map')} > <span className="fd-tab-icon material-icons-round" aria-hidden="true"> travel_explore </span> Map </button>
      <button
        ref={listRef}
        type="button"
        role="tab"
        aria-selected={tab === 'list'}
        className="fd-tab"
        onClick={() => onChange('list')}
      >
        <svg className="fd-tab-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d={LIST_PATH} fill="currentColor" />
        </svg>
        List
      </button>
    </div>

    <span
      ref={barRef}
      className="fd-tab-indicator"
      style={{ left: '0px', width: '50%' }}
    />
  </div>
</div>
); }
export default ResultTabs;