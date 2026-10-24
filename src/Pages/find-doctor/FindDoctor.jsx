import { useEffect, useState } from 'react';
import MakeAppointment from './MakeAppointment';
import DoctorProfile from './DoctorProfile'; 
  import ResultTabs from '../../ui/mursal/components/find-doctor/ResultTabs';
  import FilterPanel from '../../ui/mursal/components/find-doctor/FilterPanel';
   import SortRow from '../../ui/mursal/components/find-doctor/SortRow'; 
   import DoctorCard from '../../ui/mursal/components/find-doctor/DoctorCard'; 
   import DoctorMap from '../../ui/mursal/components/find-doctor/DoctorMap'; 
   import { doctors, findDoctor } from '../../ui/mursal/data/doctors';
const LIST_PAGE = { type: 'list', doctor: null, visit: 'video' };
function FindDoctor({ initialName, initialZip }) { const [tab, setTab] = useState('map'); const [activeSort, setActiveSort] = useState('next'); const [searchText, setSearchText] = useState(initialName ? initialName : ''); const [zipText, setZipText] = useState(initialZip ? initialZip : ''); const [specialty, setSpecialty] = useState(''); const [gender, setGender] = useState(''); const [condition, setCondition] = useState(''); const [language, setLanguage] = useState(''); const [ages, setAges] = useState([]); const [onlineOnly, setOnlineOnly] = useState(false); const [primaryOnly, setPrimaryOnly] = useState(false);
/* صفحهٔ فعلی: list | profile | appointment (با history تا دکمهٔ Back مرورگر کار کند) */ const [page, setPage] = useState(function () { const s = window.history.state;
if (s && s.fdSub && findDoctor(s.docId)) {
  return { type: s.fdSub, doctor: findDoctor(s.docId), visit: s.visit || 'video' };
}

return LIST_PAGE;
});
useEffect(function () { function onPop(e) { const s = e.state;
  if (s && s.fdSub && findDoctor(s.docId)) {
    setPage({ type: s.fdSub, doctor: findDoctor(s.docId), visit: s.visit || 'video' });
  } else {
    setPage(LIST_PAGE);
  }
}

window.addEventListener('popstate', onPop);

return function () {
  window.removeEventListener('popstate', onPop);
};
}, []);
function open(type, doc, visit) { const v = visit || 'video';
window.history.pushState({ fdView: 'results', fdSub: type, docId: doc.id, visit: v }, '');
setPage({ type: type, doctor: doc, visit: v });
window.scrollTo(0, 0);
}
function toggleAge(age) { if (ages.includes(age)) { setAges(ages.filter((a) => a !== age)); } else { setAges([...ages, age]); } }
/* مثل سایت اصلی: فیلترها لیست را تغییر نمی‌دهند */ const filtered = doctors;
if (page.type === 'appointment') { return <MakeAppointment doctor={page.doctor} initialVisit={page.visit} />; }
if (page.type === 'profile') { return ( <DoctorProfile doctor={page.doctor} onSchedule={(visit) => open('appointment', page.doctor, visit)} /> ); }
return ( <div> <ResultTabs tab={tab} onChange={setTab} />
  <div className="fd-columns">
    <div className="fd-col fd-col-left">
      <FilterPanel
        searchText={searchText}
        setSearchText={setSearchText}
        zipText={zipText}
        setZipText={setZipText}
        specialty={specialty}
        setSpecialty={setSpecialty}
        gender={gender}
        setGender={setGender}
        condition={condition}
        setCondition={setCondition}
        language={language}
        setLanguage={setLanguage}
        ages={ages}
        toggleAge={toggleAge}
        onlineOnly={onlineOnly}
        setOnlineOnly={setOnlineOnly}
        primaryOnly={primaryOnly}
        setPrimaryOnly={setPrimaryOnly}
      />
    </div>

    <div className="fd-col fd-col-right">
      <SortRow activeSort={activeSort} setActiveSort={setActiveSort} />

      {tab === 'map' && <DoctorMap />}

      {tab === 'list' && (
        <div>
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
export default FindDoctor;