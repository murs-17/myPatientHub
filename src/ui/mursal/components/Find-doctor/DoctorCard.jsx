const PERSON_PATH = 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z';
/* کلیک روی کارت => پروفایل ، کلیک روی دکمه => appointment */ function DoctorCard({ doctor, onOpenProfile, onSchedule }) { return ( <div className="fd-doc-card cursor-pointer" role="link" tabIndex={0} onClick={() => onOpenProfile(doctor)} onKeyDown={(e) => { if (e.key === 'Enter') onOpenProfile(doctor); }} > <div className="fd-doc-row"> <div className="fd-doc-photo"> {doctor.photo ? ( <img src={doctor.photo} alt="profile-image" /> ) : ( <svg viewBox="0 0 24 24" width="72" height="72" aria-hidden="true"> <path d={PERSON_PATH} fill="currentColor" /> </svg> )} </div>
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
export default DoctorCard;