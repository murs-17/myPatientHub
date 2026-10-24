import curved from "../../../../assets/find-doctor/curved0.jpg";
const NAVY = "text-[rgb(52,71,103)]"; const TITLE = "text-xl font-medium leading-[1.375] tracking-normal " + NAVY;
function ProfileHeader({ d }) { return ( <> {/* ---------- بنر ---------- */} <div className="h-[18.75rem] rounded-2xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(310deg, rgba(121,40,202,0.6), rgba(255,0,128,0.6)), url(" + curved + ")", }} />
  {/* ---------- کارت شیشه‌ای عکس و نام داکتر ---------- */}
  <div className="relative z-10 mx-6 -mt-16 mb-6 flex items-center gap-6 overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.8)] p-4 shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.9),0_20px_27px_0_rgba(0,0,0,0.05)] [backdrop-filter:saturate(200%)_blur(30px)]">
    {d.image && (
      <img
        alt="profile-image"
        src={d.image}
        className="h-[74px] w-[74px] shrink-0 rounded-lg object-cover object-top shadow-md"
      />
    )}

    <div className="min-w-0">
      <h5 className={TITLE}>{d.name}</h5>
      <div className="text-sm font-medium leading-[1.5] tracking-[0.02857em] text-[rgb(103,116,142)]">
        {d.specialty}
      </div>
    </div>
  </div>
</>
); }
export default ProfileHeader;