import ProfileHeader from "../../ui/mursal/components/doctor-profile/ProfileHeader";
 import ProfileMenu from "../../ui/mursal/components/doctor-profile/ProfileMenu";
  import ProfileCards from "../../ui/mursal/components/doctor-profile/ProfileCards";
  import PageHeader from "../../ui/mursal/components/PageHeader";
/* ---------- داده‌های پیش‌فرض پروفایل ---------- */
 const profileDefaults = { qualifications: ["cervical(cone) Biopsy", "Colposcopy", "Dilation and curettage"], officeAddress1: "Lot 193, 194 jalan Nilai Square 6, Bandar Baru", officeAddress2: "Nilai , 71800 Nilai, Negeri Sembilan, Malaysia", officePhone: "+606 8500 999", mapQuery: "193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan, Malaysia", insurance: ["AXA EMedic Plus", "Allianz Diabetic", "Manulife Medical Insurance"], };
/* ---------- Doctor Profile ---------- */ 
export default function DoctorProfile({ doctor, onSchedule }) { const d = { ...profileDefaults, name: doctor.name, specialty: doctor.field, image: doctor.photo, address: doctor.address, phone: doctor.phone, language: (doctor.languages ?? []).join(", "), about: doctor.name + " provides healthcare services in " + doctor.field + "...", ...(doctor.profile ?? {}), };
function goTo(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
return ( <div className="ap-page relative pb-16 text-[rgb(52,71,103)]" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }} > <PageHeader title="Doctorprofile" />
<ProfileHeader d={d} />
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
    <ProfileMenu goTo={goTo} />
    <ProfileCards d={d} onSchedule={onSchedule} />
  </div>
</div>
); }