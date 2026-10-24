import { useEffect, useState } from 'react';
import FindDoctor from './FindDoctor';
 import './FindDoctor.css';
  
 import SearchBanner from '../../ui/mursal/components/search-doctor/SearchBanner';
  import SpecialServices from '../../ui/mursal/components/search-doctor/SpecialServices';
   import SpecialtySection from '../../ui/mursal/components/search-doctor/SpecialtySection';

function getStartView() {
   const state = window.history.state;
if (state && state.fdView === 'results')
 { return 'results'; }
return 'home'; }

function SearchDoctor()
 {
   const [doctorName, setDoctorName] = useState('');
  const [zipCode, setZipCode] = useState('');
   const [view, setView] = useState(getStartView);

useEffect(function () { function handlePop(event)
   { 
    const state = event.state;
  if (state && state.fdView === 'results') {
    setView('results');
  } else {
    setView('home');
  }
}

window.addEventListener('popstate', handlePop);

return function () {
  window.removeEventListener('popstate', handlePop);
};
}, []);


function openResults() { if (view !== 'results') { window.history.pushState({ fdView: 'results' }, ''); }
setView('results');
}
function handleSearch(event) { event.preventDefault(); openResults(); }

function handleCurrent() { if (!navigator.geolocation) { alert('Geolocation is not supported by your browser.');
 return; }

navigator.geolocation.getCurrentPosition(
  () => {
    alert('Your current location was retrieved.');
    openResults();
  },
  () => {
    alert('Unable to get your location. Please check your browser permissions.');
  }
);
}
return ( 
<div className="fd-root text-left">
   <div className={view === 'home' ? 'mb-[24px]' : ''}>
     <SearchBanner pageTitle={view === 'home' ? 'Searchdoctor' : 'Finddoctor'}
doctorName={doctorName}
setDoctorName={setDoctorName}
zipCode={zipCode}
setZipCode={setZipCode}
onSearch={handleSearch}
onCurrent={handleCurrent}
/> </div>

  {view === 'home' && (
    <>
      <SpecialServices onOpen={openResults} />
      <SpecialtySection onOpen={openResults} />
    </>
  )}

  {view === 'results' && <FindDoctor initialName={doctorName} initialZip={zipCode} />}

</div>
); }
export default SearchDoctor;