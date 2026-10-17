import { useEffect, useState } from 'react';
 import { ChevronDown, Heart } from 'lucide-react';
import './Doctor.css'; 

import DoctorResults from './DoctorResults';
import primaryCare from './primary-care.png'; import emergencyCare from './emergency-care.png'; import imagingServices from './imaging-services.png'; import urgentCare from './urgent-care.png'; import curved from './curved0.jpg';
const FONT = 'Roboto, Helvetica, Arial, sans-serif'; const NAVY = 'rgb(52, 71, 103)';
const CARD_SHADOW = '0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)';
const cardStyle = { minWidth: 0, backgroundColor: '#fff', borderRadius: '4px', boxShadow: CARD_SHADOW, marginBottom: '4px', overflow: 'hidden', };
const sectionStyle = { color: NAVY, backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 20px 27px rgba(0, 0, 0, 0.05)', minWidth: 0, };
const headingStyle = { textAlign: 'center', color: NAVY, fontSize: '24px', fontWeight: 500, lineHeight: '33px', letterSpacing: '0.1764px', };
const services = [ { title: 'Primary Care and Internal MD', text: 'our Doctors Partner with you to help you reach your welness', image: primaryCare, }, { title: 'Emergency Care', text: 'we provide emergency care for adults and children', image: emergencyCare, }, { title: 'Imaging Services', text: 'From Xray to MR scan we offer...', image: imagingServices, }, { title: 'Urgent Care', text: 'we offer urgent care for none ...', image: urgentCare, }, ];
const specialties = [ 'Anesthesiology', 'Dermatology', 'Emergency medicine', 'Neurology', 'Consultation', 'Ophthalmology', ];
function ServiceCard({ item, onOpen }) { return ( <div style={cardStyle}> <button
type="button"
onClick={onOpen}
className="fd-card-btn fd-service-btn"
> <div className="fd-service-body"> <div className="fd-service-img-wrap"> <img className="fd-service-img" src={item.image} alt={item.title} /> </div>
      <div className="fd-service-text">
        <h3
          style={{
            margin: 0,
            fontFamily: FONT,
            color: 'rgba(0, 0, 0, 0.87)',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '32.5px',
            letterSpacing: '0.1876px',
            overflowWrap: 'break-word',
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            margin: 0,
            fontFamily: FONT,
            color: NAVY,
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '26px',
            letterSpacing: '0.12px',
            overflowWrap: 'break-word',
          }}
        >
          {item.text}
        </p>
      </div>
    </div>

    <ChevronDown size={18} className="fd-chevron" />
  </button>
</div>
); }
function SpecialtyCard({ name, onOpen }) { return ( <div style={cardStyle}> <button
type="button"
onClick={onOpen}
className="fd-card-btn fd-specialty-btn"
> <span style={{ padding: '12px 0' }}>{name}</span>
    <ChevronDown size={18} className="fd-chevron" />
  </button>
</div>
); }
const bannerBackground = 'linear-gradient(310deg, rgba(121,40,202,0.6), rgba(255,0,128,0.6)), url(' + curved + ')';
const inputStyle = { width: '100%', height: '40px', padding: '8px 12px', borderRadius: '0.5rem', backgroundColor: '#fff', backgroundClip: 'padding-box', border: '0.0625rem solid rgb(210, 214, 218)', color: 'rgb(73, 80, 87)', fontFamily: FONT, fontSize: '14px', fontWeight: 400, lineHeight: '19.6px', letterSpacing: '0.13132px', appearance: 'none', outline: 'none', };
const buttonStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '64px', minHeight: '40px', padding: '12px 24px', borderRadius: '0.5rem', backgroundColor: 'rgb(23, 193, 232)', color: 'rgb(103, 116, 142)', fontFamily: FONT, fontSize: '12px', fontWeight: 700, lineHeight: '16.8px', letterSpacing: '0.34284px', textTransform: 'uppercase', border: 0, cursor: 'pointer', boxShadow: '0 4px 7px -1px rgba(0,0,0,0.11), 0 2px 4px -1px rgba(0,0,0,0.07)', };
function getStartView() { const state = window.history.state;
if (state && state.
  fdView === 'results') { return 'results'; }
return 'home'; }
function FindDoctor() { const [doctorName, setDoctorName] = useState(''); const [zipCode, setZipCode] = useState(''); const [view, setView] = useState(getStartView);
useEffect(function () { function handlePop(event) { const state = event.state;
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
function handleCurrent() { if (!navigator.geolocation) { alert('Geolocation is not supported by your browser.'); return; }
navigator.geolocation.getCurrentPosition(
  () => {
    alert('Your current location was retrieved.');
    openResults();
  },
  () => {
    alert(
      'Unable to get your location. Please check your browser permissions.'
    );
  }
);
}
return ( <div className="fd-root"> <div style={{ position: 'relative' }}> <div style={{ minHeight: '18.75rem', borderRadius: '1rem', overflow: 'hidden', backgroundImage: bannerBackground, backgroundSize: 'cover', backgroundPosition: '50% center', backgroundRepeat: 'no-repeat', }} />
    <div
      style={{
        position: 'relative',
        marginTop: '-216px',
        marginLeft: '24px',
        marginRight: '24px',
        padding: '16px 0',
        fontFamily: FONT,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            margin: 0,
            color: 'rgb(255, 255, 255)',
            fontSize: '36px',
            fontWeight: 500,
            lineHeight: '46.8px',
            letterSpacing: '-0.29988px',
          }}
        >
          Find a Doctor
        </h2>
        <h6
          style={{
            margin: 0,
            color: 'rgb(255, 255, 255)',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '26px',
            letterSpacing: '0.12px',
          }}
        >
          Search Doctors and schedule an appointment
        </h6>
      </div>

      <form onSubmit={handleSearch} className="fd-hero-form">
        <div style={{ width: '209px' }}>
          <input
            type="text"
            placeholder="Search a doctor by name, specility"
            value={doctorName}
            onChange={(event) => setDoctorName(event.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ width: '209px' }}>
          <input
            type="text"
            placeholder="Zip Code or Neigborhood"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="button" onClick={handleCurrent} style={buttonStyle}>
          Current
        </button>

        <button type="submit" style={buttonStyle}>
          Search
        </button>
      </form>
    </div>
  </div>

  {view === 'home' && (
    <>
      <section style={{ ...sectionStyle, padding: '24px' }}>
        <h2 style={{ ...headingStyle, margin: '8px 0 24px' }}>
          Special Services
        </h2>

        <div className="fd-grid-services">
          {services.map((item) => (
            <ServiceCard
              key={item.title}
              item={item}
              onOpen={openResults}
            />
          ))}
        </div>
      </section>

      <section style={{ ...sectionStyle, padding: '16px 32px 32px' }}>
        <h2 style={{ ...headingStyle, margin: '8px 0 4px' }}>
          Find Doctors By Specialty
        </h2>

        <p
          style={{
            margin: '0 0 24px',
            textAlign: 'center',
            fontFamily: FONT,
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '32.5px',
            letterSpacing: '0.1876px',
            color: 'rgba(0, 0, 0, 0.87)',
          }}
        >
          </p>
        <p>
        Select a Specialty to View all Doctors and schedule an Appointment
        </p>

        <div className="fd-grid-specialties">
          {specialties.map((name) => (
            <SpecialtyCard key={name} name={name} onOpen={openResults} />
          ))}
        </div>
      </section>
    </>
  )}

  {view === 'results' && (
    <DoctorResults initialName={doctorName} initialZip={zipCode} />
  )}

  <footer className="fd-footer">
    <p>
      © 2026, made with
      <Heart size={14} fill={NAVY} color={NAVY} />
      by
      <a href="#" style={{ color: NAVY, fontWeight: 700 }}>
        MyPiHUB
      </a>
      for a better web.
    </p>

    <nav>
      <a href="#">MyPatientHUB</a>
      <a href="#">About Us</a>
      <a href="#">Blog</a>
    </nav>
  </footer>
</div>
);
 }
export default FindDoctor;