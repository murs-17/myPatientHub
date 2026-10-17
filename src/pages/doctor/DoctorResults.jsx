import { useEffect, useRef, useState } from 'react'; import DoctorMap from './DoctorMap'; import shamsirPhoto from './shamsir.jpg'; import khairullahPhoto from './khairullah.jpg'; import MakeAppointment from './MakeAppointment'; import DoctorProfile from './DoctorProfile';
const doctors = [ { id: 1, name: 'Prof. Dr. Muhammad Shamsir Bin Mohd Aris', photo: shamsirPhoto, field: 'Obstetics and Gynaecology', role: 'Visiting Consultant', address: 'Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia', website: 'https://klinikpakar.usim.edu.my', phone: '+60126504921', next: 'Tuesday, March 22', specialty: 'Doctor', gender: 'Male', conditions: ['Doctor'], languages: ['English', 'Malay'], ages: 'Adults', online: true, primaryCare: false, }, { id: 2, name: 'PROF DR. MADYA DR. Khairullah', photo: khairullahPhoto, field: 'Obstetics and Gynaecology', role: 'Visiting Consultant', address: 'Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia', website: 'https://klinikpakar.usim.edu.my', phone: '+60126504921', next: 'Tuesday, March 22', specialty: 'Doctor', gender: 'Male', conditions: ['Doctor'], languages: ['English', 'Malay'], ages: 'Adults', online: true, primaryCare: false, }, ];
const specialtyOptions = ['Doctor', 'Surgery']; const genderOptions = ['Male', 'Female']; const conditionOptions = ['Emergency', 'Family', 'Doctor']; const languageOptions = ['English', 'Malay', 'Hindi', 'German', 'Pashto']; const ageOptions = ['All Ages', 'Children', 'Adults'];
const CHEVRON_PATH = 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'; const LIST_PATH = 'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z'; const PERSON_PATH = 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z';function findDoctor(id) { return doctors.find((d) => d.id === id) || null; }
const LIST_PAGE = { type: 'list', doctor: null, visit: 'video' };
function ResultTabs({ tab, onChange }) { const mapRef = useRef(null); const listRef = useRef(null); const barRef = useRef(null);
useEffect( function () { const active = tab === 'map' ? mapRef.current : listRef.current; const bar = barRef.current;
  if (active && bar) {
    bar.style.left = active.offsetLeft + 'px';
    bar.style.width = active.offsetWidth + 'px';
  }
},
[tab]
);
return ( <div className="fd-tabs"> <div className="fd-tabs-scroller"> <div className="fd-tabs-row" role="tablist"> <button ref={mapRef} type="button" role="tab" aria-selected={tab === 'map'} className="fd-tab" onClick={() => onChange('map')} > <svg className="fd-tab-icon" viewBox="0 0 24 24" aria-hidden="true"> <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" /> <ellipse cx="10" cy="10" rx="2.8" ry="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" /> <path d="M3.8 10h12.4" fill="none" stroke="currentColor" strokeWidth="1.6" /> <path d="M15 15l6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /> </svg> Map </button>
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
function CheckItem({ label, checked, onChange }) { return ( <label className="fd-check"> <input
type="checkbox"
className="fd-check-input"
checked={checked}
onChange={onChange}
/> <span className={'fd-check-box' + (checked ? ' fd-check-on' : '')}> {checked && ( <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"> <path
d="M5 12.5l4.5 4.5L19 7.5"
fill="none"
stroke="#ffffff"
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
/> </svg> )} </span> <span className="fd-check-text">{label}</span> </label> ); }
function FilterSelect({ placeholder, options, value, onChange, searchable }) { const [open, setOpen] = useState(false); const [text, setText] = useState('');
const shown = options.filter(function (option) { return option.toLowerCase().includes(text.toLowerCase()); });
function choose(option) { onChange(value === option ? '' : option); setText(''); setOpen(false); }
function handleBlur() { setOpen(false); setText(''); }
return ( <div> <div className={'fd-select' + (open ? ' fd-select-open' : '')}> {text === '' && value !== '' && ( <span className="fd-select-single">{value}</span> )}
    {text === '' && value === '' && (
      <span className="fd-select-placeholder">{placeholder}</span>
    )}

    <input
      type="text"
      className="fd-select-input"
      aria-label={placeholder}
      value={text}
      readOnly={!searchable}
      onChange={function (event) {
        setText(event.target.value);
        setOpen(true);
      }}
      onFocus={function () {
        setOpen(true);
      }}
      onClick={function () {
        setOpen(true);
      }}
      onBlur={handleBlur}
    />

    <div className="fd-select-arrow">
      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d={CHEVRON_PATH} />
      </svg>
    </div>
  </div>

  {open && (
    <div className="fd-menu">
      {shown.map(function (option) {
        return (
          <div
            key={option}
            className="fd-option"
            onMouseDown={function (event) {
              event.preventDefault();
              choose(option);
            }}
          >
            {option}
          </div>
        );
      })}
    </div>
  )}
</div>
); }
/* کلیک روی کارت => پروفایل ، کلیک روی دکمه => appointment */ function DoctorCard({ doctor, onOpenProfile, onSchedule }) { return (
<div className="fd-doc-card cursor-pointer" role="link" tabIndex={0} onClick={() => onOpenProfile(doctor)} onKeyDown={(e) => { if (e.key === 'Enter') onOpenProfile(doctor); }} > <div className="fd-doc-row"> <div className="fd-doc-photo"> {doctor.photo ? ( <img src={doctor.photo} alt="profile-image" /> ) : ( <svg viewBox="0 0 24 24" width="72" height="72" aria-hidden="true"> <path d={PERSON_PATH} fill="currentColor" /> </svg> )} </div>
    <div className="fd-doc-info">
      <h6 className="fd-doc-name">{doctor.name}</h6>
      <p className="fd-doc-line">{doctor.field}</p>
      <p className="fd-doc-line">{doctor.role}</p>
      <p className="fd-doc-line">{doctor.address}</p>
      <p className="fd-doc-line">{doctor.website}</p>
      <p className="fd-doc-line">{doctor.phone}</p>
      <p className="fd-doc-line">{doctor.languages.join(', ')}</p>

      <button
        type="button"
        className="fd-doc-btn"
        onClick={(e) => {
          e.stopPropagation();
          onSchedule(doctor);
        }}
      >
        Next Available: {doctor.next}
      </button>
    </div>
  </div>
</div>
); }
function DoctorResults({ initialName, initialZip }) { const [tab, setTab] = useState('map');
const [searchText, setSearchText] = useState(initialName ? initialName : ''); const [zipText, setZipText] = useState(initialZip ? initialZip : '');
const [specialty, setSpecialty] = useState(''); const [gender, setGender] = useState(''); const [condition, setCondition] = useState(''); const [language, setLanguage] = useState(''); const [ages, setAges] = useState([]); const [onlineOnly, setOnlineOnly] = useState(false); const [primaryOnly, setPrimaryOnly] = useState(false);
/* صفحهٔ فعلی: list | profile | appointment (با history تا دکمهٔ Back مرورگر کار کند) */ const [page, setPage] = useState(function () { const s = window.history.state; if (s && s.fdSub && findDoctor(s.

  docId)) { return { type: s.fdSub, doctor: findDoctor(s.docId), visit: s.visit || 'video' }; } return LIST_PAGE; });
  useEffect(function () { function onPop(e) { const s = e.state; if (s && s.fdSub && findDoctor(s.docId)) { setPage({ type: s.fdSub, doctor: findDoctor(s.docId), visit: s.visit || 'video' }); } else { setPage(LIST_PAGE); } }
  window.addEventListener('popstate', onPop);
  return function () {
    window.removeEventListener('popstate', onPop);
  };
  }, []);
  function open(type, doc, visit) { const v = visit || 'video'; window.history.pushState( { fdView: 'results', fdSub: type, docId: doc.id, visit: v }, '' ); setPage({ type: type, doctor: doc, visit: v }); window.scrollTo(0, 0); }
  function toggleAge(age) { if (ages.includes(age)) { setAges(ages.filter((a) => a !== age)); } else { setAges([...ages, age]); } }
  const filtered = doctors.filter(function (d) { const text = searchText.toLowerCase(); const zip = zipText.toLowerCase();
  if (text && !(d.name + ' ' + d.field).toLowerCase().includes(text)) {
    return false;
  }
  if (zip && !d.address.toLowerCase().includes(zip)) {
    return false;
  }
  if (specialty && d.specialty !== specialty) {
    return false;
  }
  if (gender && d.gender !== gender) {
    return false;
  }
  if (condition && !d.conditions.includes(condition)) {
    return false;
  }
  if (language && !d.languages.includes(language)) {
    return false;
  }
  if (ages.length > 0 && !ages.includes(d.ages)) {
    return false;
  }
  if (onlineOnly && !d.online) {
    return false;
  }
  if (primaryOnly && !d.primaryCare) {
    return false;
  }
  return true;
  });
  if (page.type === 'appointment') { return <MakeAppointment doctor={page.doctor} initialVisit={page.visit} />; }
  if (page.type === 'profile') { return ( <DoctorProfile doctor={page.doctor} onSchedule={(visit) => open('appointment', page.doctor, visit)} /> ); }
  return ( <div> <ResultTabs tab={tab} onChange={setTab} />
    <div className="fd-columns">
      <div className="fd-col fd-col-left">
        <div className="fd-card">
          <div className="fd-card">
            <form className="fd-form" onSubmit={(event) => event.preventDefault()}>
            <div className="fd-box-16">
                <div className="fd-input">
                  <input
                    type="text"
                    placeholder="Primary Care"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                  />
                </div>
              </div>
  
              <div className="fd-box-16">
                <div className="fd-input">
                  <input
                    type="text"
                    placeholder="Zip code or Neighborhood"
                    value={zipText}
                    onChange={(event) => setZipText(event.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
  
          <div className="fd-card fd-card-second">
            <form className="fd-form" onSubmit={(event) => event.preventDefault()}>
              <div className="fd-box-8">
                <p className="fd-label">Filter By</p>
              </div>
  
              <div className="fd-box-8">
                <FilterSelect
                  placeholder="Specialty"
                  options={specialtyOptions}
                  value={specialty}
                  onChange={setSpecialty}
                  searchable={true}
                />
              </div>
  
              <div className="fd-box-8">
                <FilterSelect
                  placeholder="Gender"
                  options={genderOptions}
                  value={gender}
                  onChange={setGender}
                  searchable={false}
                />
              </div>
  
              <div className="fd-box-8">
                <FilterSelect
                  placeholder="Condition"
                  options={conditionOptions}
                  value={condition}
                  onChange={setCondition}
                  searchable={true}
                />
              </div>
  
              <div className="fd-box-16">
                <FilterSelect
                  placeholder="languages"
                  options={languageOptions}
                  value={language}
                  onChange={setLanguage}
                  searchable={true}
                />
              </div>
  
              <div className="fd-box-8">
                <p className="fd-label">Providers Who Treat</p>
                <div>
                  {ageOptions.map(function (age) {
                    return (
                      <CheckItem
                        key={age}
                        label={age}
                        checked={ages.includes(age)}
                        onChange={() => toggleAge(age)}
                      />
                    );
                  })}
                </div>
              </div>
  
              <div className="fd-box-8">
                <hr className="fd-divider" />
                <p className="fd-label">View Only</p>
                <div>
                  <CheckItem
                    label="Online Scheduling"
                    checked={onlineOnly}
                    onChange={() => setOnlineOnly(!onlineOnly)}
                  />
                  <CheckItem
                    label="Primary Care"
                    checked={primaryOnly}
                    onChange={() => setPrimaryOnly(!primaryOnly)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <div className="fd-col fd-col-right">
        <div className="fd-sort-row">
          <p className="fd-sort-label">Sort By</p>
          <button type="button" className="fd-sort-btn">
            Next Available
          </button>
          <button type="button" className="fd-sort-btn">
            Distance
          </button>
        </div>
  
        {tab === 'map' && <DoctorMap />}
  
        {tab === 'list' && (
          <div>
            {filtered.length === 0 && (
              <div className="fd-doc-card">
                <p className="fd-doc-line">No doctors match your filters.</p></div>
            )}
  
            {filtered.map(function (d) {
              return (
                <DoctorCard
                  key={d.id}
                  doctor={d}
                  onOpenProfile={(doc) => open('profile', doc)}
                  onSchedule={(doc) => open('appointment', doc, 'video')}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  </div>
  ); }
  export default DoctorResults;