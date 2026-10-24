import { Card } from "../../../../components/card";
import { Button } from "../../../../components/Button/button";
/* ---------- رنگ‌ها ---------- */
 const NAVY = "text-[rgb(52,71,103)]"; const GRAY = "text-[rgb(103,116,142)]";
/* ---------- کارت (shadcn Card با override کامل) ---------- */
 const CARD = "gap-0 rounded-2xl border-0 bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]";
/* ---------- نوشته‌ها (از inspect سایت اصلی) ---------- */
 const TITLE = "text-xl font-medium leading-[1.375] tracking-normal " + NAVY; const T14 = "text-sm font-normal tracking-[0.02857em] " + GRAY; const SUB_H6 = "text-base font-medium leading-[1.625] tracking-[0.0075em] " + GRAY; const SUB_BIG = "text-xl font-medium leading-[1.375] tracking-normal " + GRAY; const INS_NAME = "text-sm font-bold leading-[1.5] tracking-[0.02857em] " + NAVY;
/* ---------- دکمه (با انیمیشن hover مثل MakeAppointment) ---------- */
 const BTN = "inline-flex min-h-10 min-w-16 cursor-pointer items-center justify-center rounded-lg border-0 px-6 py-3 text-xs font-bold uppercase leading-[1.4] tracking-[0.02857em] text-white " + "bg-[linear-gradient(310deg,rgb(121,40,202),rgb(255,8,128))] bg-[length:150%] bg-[position:25%0%] " + "shadow-[0_4px_7px-1px_rgba(0,0,0,0.11),0_2px_4px_-1px_rgba(0,0,0,0.07)] " + "transition-all duration-150 ease-in hover:scale-[1.02] hover:text-white";
/* ---------- نقشه ---------- / / نقشهٔ سایت اصلی (Fortaleza) */
const MAP_ORIGINAL = "https://www.google.com/maps?ll=-3.745,-38.523&z=11&hl=en&output=embed";
/* آدرس واقعی کلینیک (نقشه با پین) */ 
const MAP_REAL = "https://maps.google.com/maps?q=" + encodeURIComponent( "193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan, Malaysia" ) + "&z=16&output=embed";
/* کدام نقشه نشان داده شود؟ (MAP_ORIGINAL یا MAP_REAL) */ const MAP_SRC = MAP_ORIGINAL;
/* ---------- ردیف اطلاعات (Address: ... ) ---------- */
 function InfoRow({ label, children }) { return ( <div className="flex flex-wrap items-center gap-x-2 py-[5px] pr-4 text-sm leading-[1.5] tracking-[0.02857em]"> <span className={"font-bold capitalize " + NAVY}>{label}: </span> <span className={"font-normal " + GRAY}> {children}</span> </div> ); }
function ProfileCards({ d, onSchedule }) { return ( <div className="space-y-6 lg:col-span-9"> {/* About Me */} <Card id="profile" className={CARD}> <h5 id="basic-info" className={TITLE + " mb-4 scroll-mt-4"}> About Me </h5>
    <div className={T14 + " mb-6 leading-[1.5]"}>{d.about}</div>
    {/* Divider */}
    <hr className="shrink-0 border-0 h-px my-3 opacity-10 bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.5),rgba(52,71,103,0))]" />
    <InfoRow label="Address">{d.address}</InfoRow>
    <InfoRow label="Phone">{d.phone}</InfoRow>
    <InfoRow label="Language">{d.language}</InfoRow>
    <InfoRow label="Social">
      <span className={"cursor-pointer font-bold " + NAVY}>More Details</span>
    </InfoRow>
  </Card>

  {/* Credential */}
  <Card id="credential" className={CARD + " scroll-mt-4"}>
    <h5 className={TITLE + " mb-4"}>Credential</h5>

    <h5 className={SUB_BIG}>Qualifications</h5>

    {d.qualifications.map(function (q) {
      return (
        <div key={q} className={T14 + " leading-[1.5]"}>
          {q}
        </div>
      );
    })}
  </Card>

  {/* Locations and Appointment */}
  <div id="location" className="scroll-mt-4 space-y-6">
    <Card className={CARD}>
      <h5 className={TITLE + " mb-8"}>Locations and Appointment </h5>

      <h6 className={SUB_H6}>Video Visit</h6>
      <div className={T14 + " mb-1.5 max-w-3xl leading-[2]"}>
        See Doctor from your mobile device instead of an in-person appointment Learn about
        video visits.
      </div>

      <div className="mb-2">
        <Button
          className={BTN}
          onClick={function () {
            onSchedule("video");
          }}
        >
          Schedule a Video Visit
        </Button>
      </div>
    </Card>

    <Card className={CARD + " flex flex-col gap-6 md:flex-row"}>
      <div className="md:w-1/2">
        <h5 className={TITLE + " mb-2"}>Office Visits</h5>

        <div className={T14 + " mb-2 leading-[1.5]"}>{d.officeAddress1}</div>
        <div className={T14 + " mb-2 leading-[1.5]"}>{d.officeAddress2}</div>

        <div className={T14 + " mb-4 leading-[1.5]"}>Phone: {d.officePhone}</div>

<div className="mb-2">
  <Button
    className={BTN}
    onClick={function () {
      onSchedule("office");
    }}
  >
    Schedule an Office Visit
  </Button>
</div>
</div>

<div className="h-[300px] w-full overflow-hidden rounded-lg md:w-1/2">
<iframe
  title="map"
  src={MAP_SRC}
  className="h-full w-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
</Card>
</div>

{/* Insurance */}
<Card id="insurance" className={CARD + " scroll-mt-4"}>
<h5 className={TITLE + " mb-3"}>Insurance Plans Accepted</h5>

<div className={T14 + " mb-4 leading-[1.5]"}>
This Provider Accepts the following insurance plans.
</div>

{d.insurance.map(function (name) {
return (
<div key={name} className={INS_NAME}>
  {name}
</div>
);
})}
</Card>
</div>
); }
export default ProfileCards;