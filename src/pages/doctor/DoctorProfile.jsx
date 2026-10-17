import { Card } from "../../components/ui/card"; import { Button } from "../../components/ui/button"; import { Rocket, FileText, Box, Store, Building2 } from "lucide-react"; import curved from "./curved0.jpg";
/* ---------- داده‌های پیش‌فرض پروفایل ---------- */ const profileDefaults = { qualifications: [ "cervical(cone) Biopsy", "Colposcopy", "Dilation and curettage", ], officeAddress1: "Lot 193, 194 jalan Nilai Square 6, Bandar Baru", officeAddress2: "Nilai , 71800 Nilai, Negeri Sembilan, Malaysia", officePhone: "+606 8500 999", insurance: [ "AXA EMedic Plus", "Allianz Diabetic", "Manulife Medical Insurance", ], };
/* ---------- منوی کنار ---------- */ const menu = [ { id: "profile", label: "Profile", icon: Rocket }, { id: "basic-info", label: "Basic Info", icon: FileText }, { id: "credential", label: "Credential", icon: Box }, { id: "location", label: "Location And Appointment", icon: Store }, { id: "insurance", label: "Insurance Plans Accepted", icon: Building2 }, ];
/* ---------- رنگ‌ها ---------- */ const NAVY = "text-[rgb(52,71,103)]"; const GRAY = "text-[rgb(103,116,142)]";
/* ---------- کارت (shadcn Card با override کامل) ---------- */ const CARD = "gap-0 rounded-2xl border-0 bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]";
/* ---------- نوشته‌ها (از inspect سایت اصلی) ---------- / / css-1k7736b : عنوان بخش‌ها */ const TITLE = "text-xl font-medium leading-[1.375] tracking-normal " + NAVY;
/* css-rkvpo2 : همهٔ متن‌های زیر عنوان‌ها */ const TEXT = "text-base font-normal leading-[1.6] tracking-[0.01071em] " + GRAY;
/* زیرعنوان‌ها */ const SUB_BIG = "text-xl font-normal leading-[1.625] tracking-[0.00938em] " + NAVY; const SUB_H6 = "text-base font-medium leading-[1.625] tracking-[0.0075em] " + NAVY; const INS_NAME = "text-base font-bold leading-[1.6] tracking-[0.01071em] " + NAVY;
/* ---------- دکمه (مثل دکمه‌های MakeAppointment: با انیمیشن hover) ---------- */ const BTN = "inline-flex min-h-10 min-w-16 cursor-pointer items-center justify-center rounded-lg border-0 px-6 py-3 text-xs font-bold uppercase leading-[1.4] tracking-[0.02857em] text-white " + "bg-[linear-gradient(310deg,rgb(121,40,202),rgb(255,8,128))] bg-[length:150%] bg-[position:25%0%] " + "shadow-[0_4px_7px-1px_rgba(0,0,0,0.11),0_2px_4px_-1px_rgba(0,0,0,0.07)] " + "transition-all duration-150 ease-in hover:scale-[1.02] hover:text-white";
/* ---------- ردیف اطلاعات (Address: ... ) ---------- */ function InfoRow({ label, children }) { return ( <div className="flex flex-wrap items-center py-2 pr-4 text-sm leading-[1.5] tracking-[0.02857em]"> <span className={"font-bold capitalize " + NAVY}>{label}: </span> <span className={"font-normal " + GRAY}> {children}</span> </div> ); }
/* ---------- Doctor Profile ---------- */ export default function DoctorProfile({ doctor, onSchedule }) { const d = { ...profileDefaults, name: doctor.name, specialty: doctor.field, image: doctor.photo, address: doctor.address, phone: doctor.phone, language: (doctor.languages ?? []).join(", "), about: doctor.name + " provides healthcare services in " + doctor.field + "...", ...(doctor.profile ?? {}), };
function goTo(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
const mapSrc = "https://www.google.com/maps?q=" + encodeURIComponent(d.officeAddress1 + ", " + d.officeAddress2) + "&output=embed";
return ( <div className="ap-page relative mt-6 pb-16 text-[rgb(52,71,103)]" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }} > {/* ---------- بنر ---------- */} <div className="h-[18.75rem] rounded-2xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(310deg, rgba(121,40,202,0.6), rgba(255,0,128,0.6)), url(" + curved + ")", }} />
  {/* ---------- کارت عکس و نام داکتر ---------- */}
  <div className="relative z-10 mx-6 -mt-16 mb-6 flex items-center gap-6 rounded-2xl bg-white/80 p-4 shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_-1px_rgba(20,20,20,0.12),0_2px_4px_-1px_rgba(20,20,20,0.07)] backdrop-blur-[30px] backdrop-saturate-200">
    {d.image && (
      <img alt="profile-image"
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

<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
  {/* ---------- منوی کنار: کارت سفید ---------- */}
  <div className="mt-8 lg:col-span-3">
    <Card className="sticky top-[1%] gap-0 rounded-xl border-0 bg-white p-0 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
      <ul className="m-0 flex list-none flex-col p-4">
        {menu.map(function (item) {
          const Icon = item.icon;
          return (
            <li key={item.id} className="pt-2">
              <a
                href={"#" + item.id}
                onClick={function (e) {
                  e.preventDefault();
                  goTo(item.id);
                }}
                className="flex items-center rounded-lg px-4 py-2.5 text-sm font-normal capitalize leading-[1.5] tracking-[0.02857em] text-[rgb(103,116,142)] no-underline transition-colors duration-200 hover:bg-gray-100"
              >
                <span className="mr-2 flex h-4 w-4 shrink-0 items-center justify-center text-[rgb(52,71,103)] opacity-60">
                  <Icon size={16} fill="currentColor" strokeWidth={1.5} />
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </Card>
  </div>

  {/* ---------- محتوا ---------- */}
  <div className="space-y-6 lg:col-span-9">
    {/* About Me */}
    <Card id="profile" className={CARD}>
      <h5 id="basic-info" className={TITLE + " mb-4 scroll-mt-4"}>
        About Me
      </h5>

      <div className={TEXT + " mb-6"}>{d.about}</div>

      <InfoRow label="Address">{d.address}</InfoRow>
      <InfoRow label="Phone">{d.phone}</InfoRow>
      <InfoRow label="Language">{d.language}</InfoRow>
      <InfoRow label="Social">
        <span className={"cursor-pointer font-bold " + NAVY}>
          More Details
        </span>
      </InfoRow>
    </Card>

    {/* Credential */}
    <Card id="credential" className={CARD + " scroll-mt-4"}>
      <h5 className={TITLE + " mb-6"}>Credential</h5>

      <h5 className={SUB_BIG + " mb-1"}>Qualifications</h5>

      {d.qualifications.map(function (q) {
        return (
          <div key={q} className={TEXT}>
            {q}
          </div>
        );
      })}
    </Card>

    {/* Locations and Appointment */}
    <div id="location" className="scroll-mt-4 space-y-6">
      <Card className={CARD}>
        <h5 className={TITLE + " mb-12"}>Locations and Appointment</h5>

        <h6 className={SUB_H6}>Video Visit</h6>
        <div className={TEXT + " mb-4 max-w-3xl"}>
          See Doctor from your mobile device instead of an in-person
          appointment Learn about video visits.
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
          <h5 className={TITLE + " mb-3"}>Office Visits</h5>

          <div className={TEXT + " mb-2"}>{d.officeAddress1}</div>
          <div className={TEXT + " mb-2"}>{d.officeAddress2}</div>
          <div className={TEXT + " mb-4"}>Phone: {d.officePhone}</div>

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
              src={mapSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Card>
      </div>

      {/* Insurance */}
      <Card id="insurance" className={CARD + " scroll-mt-4"}>
        <h5 className={TITLE + " mb-2"}>Insurance Plans Accepted</h5>

        <div className={TEXT + " mb-6"}>
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
  </div>
</div>
); }