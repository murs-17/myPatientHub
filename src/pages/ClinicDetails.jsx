
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  LogOut,
  Settings,
  Bell,
  Rocket,
  FileText,
  Key,
  Store,
  Wrench,
  Trash2,
  Phone,
  MapPin,
  Clock,
  Wifi,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function ClinicDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const clinic = state?.clinic;
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!clinic) {
    return (
      <div className="p-8">
        <h2>Clinic details not found</h2>
        <button onClick={() => navigate("/")}>
          Back to clinics
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-700">
      <button
        onClick={() => navigate("/")}
        className="mb-5 rounded-lg bg-fuchsia-600 px-4 py-2 text-white"
      >
        ← Back to clinics
      </button>

      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
          <h2 className="text-xl font-bold">Hospital</h2>
          <div className="flex gap-4">
            <Search />
            <Settings />
            <Bell />
          </div>
        </header>

        <div>
  <section
    className="relative mx-auto h-[300px] w-full overflow-hidden rounded-2xl bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/usim-clinic.jpg')",
    }}
  />

  <div className="relative mx-6 -mt-16 min-h-[106px] overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-5 shadow-xl backdrop-blur-[30px]">
    <div className="flex items-center gap-4">
      <div className="relative flex h-[74px] w-[74px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md">
        <img
        src="/images/usim-logo.png"
        alt="USIM Clinic Logo"
        className="h-auto w-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <h1
        className="m-0 text-[20px] leading-[1.375] font-[550] tracking-normal text-[#344767]"
        style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
        >
        Klinik Pakar Kesihatan USIM
        </h1>
        <p
        className="m-0 text-[14px] leading-[1.5] tracking-[0.02857em] font-medium text-[#67748E]"
        style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
        >
        Malaysia
        </p>
      </div>
    </div>
  </div>
</div>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
  {[
  ["Top Ranking", "Ranked among best hospital in UK"],
  ["Excellent Services", "InPatient and outpatient high quality services"],
  ["Experienced Doctors", "High Quality healthcare by professional and experienced Doctors"],
].map(([title, description]) => (
    <div
      key={title}
      className="relative flex h-[150px] min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-white p-5 text-black/90 shadow-[0_20px_27px_rgba(0,0,0,0.05)] transition-shadow duration-300"
    >
      <h3
  className="relative z-[1] m-0 inline-block text-[20px] leading-[1.375] font-bold tracking-normal"
  style={{
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    backgroundImage: "linear-gradient(90deg, #FBCF33 0%, #F53939 70%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  {title}
</h3>

      <p
  className="m-0 text-[16px] leading-[1.6] tracking-[0.01071em] font-normal text-[#67748E]"
  style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
>
  {description}
</p>
    </div>
  ))}
</section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold">About Us</h2>
          <p className="text-sm leading-7 text-slate-500">
            Welcome to {clinic.name}. Find information about the clinic,
            its services, location, and patient support.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">
            Patient and Family Support
          </h2>

          {[
            "Guest Services",
            "International Patient Services",
            "Patient Relations",
            "What to Bring for your Hospital Stay",
          ].map((item, index) => (
            <div key={item} className="border-b border-slate-100 py-3">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left font-medium"
              >
                {item}
                {openAccordion === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {openAccordion === index && (
                <p className="mt-3 text-sm text-slate-500">
                  Information about {item}.
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Our Location</h2>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 text-fuchsia-600" size={20} />
            <p>{clinic.address}</p>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Phone className="text-fuchsia-600" size={20} />
            <p>Contact the clinic for more information.</p>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">For Our Patients</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Clock className="mb-2 text-fuchsia-600" />
              <h3 className="font-bold">Visiting Hours</h3>
              <p className="mt-2 text-sm text-slate-500">
                Contact the clinic to confirm visiting hours.
              </p>
            </div>
            <div>
              <Wifi className="mb-2 text-fuchsia-600" />
              <h3 className="font-bold">Patient Facilities</h3>
              <p className="mt-2 text-sm text-slate-500">
                Ask the clinic about available facilities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClinicDetails;
