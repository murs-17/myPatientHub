import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ClinicDetails.css";
import { useOutletContext } from "react-router-dom";
import {
  Search,
  Settings,
  Bell,
  MapPin,
  Clock,
  Wifi,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Rocket,
  BookOpen,
  Box,
  House,
  Wrench,
  Clapperboard,
  Phone,
  CigaretteOff,
  Heart,
} from "lucide-react";

const teamMembers = [
  {
    name: ["PROF DR.", "Muhammad", "shamsir"],
    image: "/images/reyhana/Muhammad shamsir.jpg",
  },
  {
    name: ["PROF DR.", "MADYA DR.", "khairullah"],
    image: "/images/reyhana/khairullah.jpg",
  },
  {
    name: ["Dr.Mohd", "Radzniwan"],
    image: "/images/reyhana/Radzniwan.jpg",
  },
  {
    name: ["Dr. Fatima", "Begum"],
    image: "/images/reyhana/Begum.jpg",
  },
  {
    name: ["Dr. Sharifah", "Najwa"],
    image: "/images/reyhana/Najwa.jpg",
  },
];

const highlightCards = [
  {
    title: "Top Ranking",
    description: "Ranked among best hospital in UK",
  },
  {
    title: "Excellent Services",
    description:
      "InPatient and outpatient high quality services",
  },
  {
    title: "Experienced Doctors",
    description:
      "High Quality healthcare by professional and experienced Doctors",
  },
];

const supportItems = [
  "Guest Services",
  "International Patient Services",
  "Patient Relations",
  "What to Bring for your Hospital Stay",
];

const profileItems = [
  { label: "Profile", icon: Rocket },
  { label: "Basic Info", icon: BookOpen },
  { label: "Change Password", icon: Box },
  { label: "2FA", icon: House },
  { label: "Sessions", icon: Wrench },
  { label: "Delete Account", icon: Clapperboard },
];

const clinicAddress =
  "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia";

const locationCode =
  "RQFV+HC Nilai, Negeri Sembilan, Malaysia";

const specialtyDescription = (
  <>
    Klinik Pakar kesihatan USIM mula beroperasi pasa 1
    <br />
    April 2015. Klinik yang berkonsepkan wakaf ini
    <br />
    menawarkan pelbagai perkhidmatan kepakaran
    <br />
    perubatan,perubatan am, perubatan keluarga,
    <br />
    perkhidmatan pergigian dan lain-lain lagi dengan
    <br />
    caj yang
  </>
);

function ClinicDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    Header,
    onToggleSidebar,
    isSidebarOpen,
    isCompact,
    isScrolled,
    pageTitle,
  } = useOutletContext ();
  
  const clinic = state?.clinic;

  const [openAccordion, setOpenAccordion] = useState(null);

  const [openSections, setOpenSections] = useState([0]);

const toggleSection = (index) => {
  setOpenSections((previous) =>
    previous.includes(index) ? [] :
      
    [index]
  );
};

const supportSections = [
  {
    title: "Guest Services",
    items: ["Service one", "Service Two"],
  },
  {
    title: "International Patient Services",
    items: [
      "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet",
      
    ],
  },
  {
    title: "Language Disability Services",
    items: ["Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."],
  },
  {
    title: "Patient Relations",
    items: ["Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."],
  },
  {
    title: "Spiritual, Religious and Chaplaincy Services for Adults",
    items: ["Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue"],
  },
  {
    title: "What to Bring for your Hospital Stay",
    items: ["Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."],
  },
];

  if (!clinic) {
    return (
      <div className="min-h-screen bg-slate-100 p-8">
        <h2 className="mb-4 text-xl font-bold">
          Clinic details not found
        </h2>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="rounded-lg bg-fuchsia-600 px-4 py-2 text-white transition hover:bg-fuchsia-700"
        >
          Back to clinics
        </button>
      </div>
    );
  }

  return (
  <div className="clinic-details-page min-h-screen bg-slate-100 text-slate-700">
    

    <div className="p-6">
      

      <div className="mx-auto max-w-7xl space-y-6">
    </div>
        

        {/* Clinic banner */}
        <section>
          <div
  className="relative mx-auto h-[300px] w-full overflow-hidden rounded-2xl bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/usim-clinic.jpg')",
  }}
>
  <div className="absolute inset-x-0 top-0 z-50">
    <Header
      onToggleSidebar={onToggleSidebar}
      isSidebarOpen={isSidebarOpen}
      isCompact={isCompact}
      isScrolled={isScrolled}
      pageTitle={pageTitle}
      isOverlay={true}
    />
  </div>
</div>
        

          {/* Clinic logo and name */}
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
                  style={{
                    fontFamily:
                      "Roboto, Helvetica, Arial, sans-serif",
                  }}
                >
                  Klinik Pakar Kesihatan USIM
                </h1>

                <p
                  className="m-0 text-[14px] leading-[1.5] font-medium tracking-[0.02857em] text-[#67748E]"
                  style={{
                    fontFamily:
                      "Roboto, Helvetica, Arial, sans-serif",
                  }}
                >
                  Malaysia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three highlight cards */}
        <section className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {highlightCards.map((card) => (
            <div
              key={card.title}
              className="relative flex h-[150px] min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-white p-5 text-black/90 shadow-[0_20px_27px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <h3
                className="relative z-[1] m-0 inline-block text-[20px] leading-[1.375] font-bold tracking-normal"
                style={{
                  fontFamily:
                    "Roboto, Helvetica, Arial, sans-serif",
                  backgroundImage:
                    "linear-gradient(90deg, #FBCF33 0%, #F53939 70%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {card.title}
              </h3>

              <p
                className="m-0 text-[16px] leading-[1.6] font-normal tracking-[0.01071em] text-[#67748E]"
                style={{
                  fontFamily:
                    "Roboto, Helvetica, Arial, sans-serif",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </section>

        {/* Main two-column area */}
        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">
          {/* Left profile menu */}
          <aside
            className="sticky top-4 flex w-full min-w-0 flex-col overflow-hidden rounded-xl bg-white p-4 text-[#67748E] shadow-[0_20px_27px_rgba(0,0,0,0.05)]"
            style={{
              fontFamily:
                "Roboto, Helvetica, Arial, sans-serif",
              boxSizing: "border-box",
            }}
          >
            <nav className="flex flex-col">
              {profileItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-[10px] text-left text-sm font-normal transition-colors duration-200 hover:bg-slate-50"
                    style={{
                      color: "#67748E",
                      lineHeight: 1.5,
                      letterSpacing: "0.02857em",
                      textTransform: "capitalize",
                    }}
                  >
                    <span className="flex shrink-0 items-center justify-center">
                      <Icon
                        size={18}
                        color="#000000"
                        strokeWidth={2}
                      />
                    </span>

                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right column: About Us and Our Team only */}
          <section
            className="box-border min-h-[650px] w-full min-w-0 rounded-2xl bg-white p-6 shadow-sm"
            style={{ maxWidth: "950px" }}
          >
            <h2
              className="m-0 text-[20px] leading-[1.375] font-medium tracking-[0] text-[#344767]"
              style={{
                fontFamily:
                  "Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              About Us
            </h2>

            <p
              className="mt-2 m-0 text-[16px] font-normal leading-[1.6] tracking-[0.01071em] text-[#67748e]"
              style={{
                fontFamily:
                  "Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              Klinik Pakar kesihatan USIM mula beroperasi pasa 1
              April 2015. Klinik yang berkonsepkan wakaf ini
              menawarkan pelbagai perkhidmatan kepakaran
              perubatan, perubatan am, perubatan keluarga,
              perkhidmatan pergigian dan lain-lain lagi dengan caj
              yang berpatutan. Untuk senarai penuh perkhidmatan
              yang disediakan, sila{" "}
              <a
                href="#services"
                className="cursor-pointer text-inherit no-underline"
              >
                KLIK DI SINI
              </a>
            </p>

            {/* Contact information */}
            <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
              <p className="m-0 text-[16px] font-normal leading-[1.6] tracking-[0.01071em] text-[#67748e]">
                {clinicAddress}
              </p>

              <p className="m-0 break-all text-[16px] font-normal leading-[1.6] tracking-[0.01071em] text-[#67748e]">
                <a
                  href="https://klinikpakar.usim.edu.my"
                  target="_blank"
                  rel="noreferrer"
                  className="text-inherit no-underline hover:text-inherit hover:no-underline"
                >
                  https://klinikpakar.usim.edu.my
                </a>
              </p>

              <p className="m-0 text-[16px] font-normal leading-[1.6] tracking-[0.01071em] text-[#67748e]">
                <a
                  href="tel:+60126504921"
                  className="text-inherit no-underline hover:text-inherit hover:no-underline"
                >
                  +60126504921
                </a>
              </p>

              <p className="m-0 text-[16px] font-normal leading-[1.6] tracking-[0.01071em] text-[#67748e]">
                {locationCode}
              </p>
            </div>

            {/* Our Team */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="mb-5 flex items-center">
                <h3
                  className="m-0 text-[20px] leading-[1.375] font-medium tracking-[0] text-[#344767]"
                  style={{
                    fontFamily:
                      "Roboto, Helvetica, Arial, sans-serif",
                  }}
                >
                  Our Team
                </h3>
              </div>

              {/* Team grid */}
              <div className="grid grid-cols-2 items-stretch gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
                {teamMembers.map((member) => (
                  <div
                    key={member.image}
                    className="flex min-w-0 flex-col items-center text-center"
                  >
                    {/* Doctor image */}
                    <div className="mb-1 aspect-square w-full max-w-[110px] shrink-0 overflow-hidden border border-slate-100 bg-white">
                      <img
                        src={member.image}
                        alt={member.name.join(" ")}
                        className="block h-full w-full object-contain"
                        onError={(event) => {
                          event.currentTarget.style.visibility =
                            "hidden";
                        }}
                      />
                    </div>

                    {/* Doctor name */}
                    <p
                      className="doctor-name mb-0 mt-2 w-full text-center"
                      style={{
                        marginTop: "8px",
                        fontFamily:
                          "Roboto, Helvetica, Arial, sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.6,
                        letterSpacing: "0.01071em",
                        color: "#67748E",
                      }}
                    >
                      {member.name.map((line, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))}
                    </p>

                    {/* View Profile button */}
                    <div className="mt-auto flex w-full justify-center pt-0">
                      <button
                        type="button"
                        onClick={() =>
                          window.alert(
                            `Profile: ${member.name.join(" ")}`
                          )
                        }
                        className="inline-flex h-[45px] w-[100px] max-w-full flex-col items-center justify-center rounded-lg border-0 text-center font-bold uppercase text-white shadow-[0_4px_7px_-1px_rgba(0,0,0,0.11),0_2px_4px_-1px_rgba(0,0,0,0.07)] transition-all duration-150 ease-in"
                        style={{
                          fontFamily:
                            "Roboto, Helvetica, Arial, sans-serif",
                          fontSize: "12px",
                          letterSpacing: "0.02857em",
                          lineHeight: 1.4,
                          backgroundImage:
                            "linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128))",
                          backgroundSize: "150% auto",
                          backgroundPosition: "25% center",
                          color: "#FFFFFF",
                        }}
                      >
                        <span>VIEW</span>
                        <span>PROFILE</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Medical and Surgical Specialities: full page width */}
        <section className="mt-6 w-full rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-gray-800">
            Medical and Surgical Specialities in Klinik Pakar
            Kesihatan USIM
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="min-w-0 text-sm leading-7 text-gray-600">
              {specialtyDescription}
            </div>

            <div className="min-w-0 text-sm leading-7 text-gray-600">
              {specialtyDescription}
            </div>

            <div className="min-w-0 text-sm leading-7 text-gray-600">
              {specialtyDescription}
            </div>
          </div>
        </section>

        {/* Patient and Family Support: full page width */}
        {/* Patient and Family Support */}
<section className="mt-6 w-full rounded-2xl bg-white p-6 shadow-sm">
  <h2 className="mb-6"
  style={{
    margin: 0,
    marginBottom: "24px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "20px",
    lineHeight: 1.375,
    fontWeight: 600,
    letterSpacing: "0em",
    color: "#344767",
    }}
  >
    Patient and Family Support
  </h2>

  <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">

    {/* Left column */}
    <div className="min-w-0 space-y-5">

      {/* Accordion */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div 
        style={{
          
          margin: "16px",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontSize: "20px",
          lineHeight: 1.375,
          fontWeight: 550,
          letterSpacing: "0em",
          color: "#000000DE",
          WebkitTextFillColor: "#000000DE",
          opacity: 1,
          textTransform: "none",
          verticalAlign: "unset",
          textDecoration: "none",
          boxSizing: "border-box",
          }}
        >
          Patient and Family Support
        </div>

        {supportSections.map((section, index) => {
          const isOpen = openSections.includes(index);

          return (
            <div
              key={section.title}
              className="border-b border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.06)] last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggleSection(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span
                  style={{
                    margin: 0,
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: 1.625,
                    letterSpacing: "0.00938em",
                    color: "#000000DE",
                    width: "100%",
                    flexShrink: 1,
                    whiteSpace: "nowrap",
                  }}
                
                  >
                  {section.title}
                  </span>

                {isOpen ? (
                  <ChevronUp
                    size={18}
                    className="shrink-0 text-fuchsia-600"
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-fuchsia-600"
                  />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-3">
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={item}
                      type="button"
                      style={{
                        margin: 0,
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: 1.625,
                        letterSpacing: "0.00938em",
                        color: "#000000DE",
                        textAlign: "left",
                        width: "100%",
                        borderBottom:
                          itemIndex < section.items.length - 1 ? "1px solid transparent" : "none",
                        backgroundImage:
  itemIndex < section.items.length - 1
    ? "linear-gradient(to right, transparent, #d1d5db 25%, #9ca3af 50%, #d1d5db 75%, transparent)"
    : "none",
backgroundRepeat: "no-repeat",
backgroundPosition: "bottom",
backgroundSize: "100% 1px",
                        
                      
                      }}
                      className="block w-full rounded-none px-3 py-2 transition hover:bg-fuchsia-50 hover:text-fuchsia-600"
                    >
                      {typeof item === "string"
  ? item.split(". ").map((sentence, index, array) => (
      <React.Fragment key={index}>
        {sentence}{index < array.length - 1 ? "." : ""}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ))
  : item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Two service cards below the accordion */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
        {[1, 2].map((item) => (
          <article
            key={item}
            className="min-w-0 h-[180px] rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            

            <h3
            className="relative z-[1] m-0 inline-block text-[20px] leading-[1.375] font-bold tracking-normal"
            style={{
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              backgroundImage:
                "linear-gradient(90deg, #FBCF33 0%, #F53939 70%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            >
              Excellent Services
            </h3>

            <p
  style={{
    margin: 0,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    lineHeight: 1.6,
    letterSpacing: "0.01071em",
    opacity: 1,
    textTransform: "none",
    color: "#67748E",
    fontWeight: 400,
  }}
>
  InPatient and outpatient high quality services
</p>
          </article>
        ))}
      </div>
    </div>

    {/* Right column: four service cards */}
    <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
      {[3, 4, 5, 6].map((item) => (
        <article
          key={item}
          className="min-w-0 h-[180px] rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
        >
          

          <h3
          className="relative z-[1] m-0 inline-block text-[20px] leading-[1.375] font-bold tracking-normal"
          style={{
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            backgroundImage:
              "linear-gradient(90deg, #FBCF33 0%, #F53939 70%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          >
            Excellent Services
          </h3>

          <p
  style={{
    margin: 0,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    lineHeight: 1.6,
    letterSpacing: "0.01071em",
    opacity: 1,
    textTransform: "none",
    color: "#67748E",
    fontWeight: 400,
  }}
>
  InPatient and outpatient high quality services
</p>
        </article>
      ))}
    </div>

  </div>
</section>

        {/* Our Location: full page width */}
<section className="mt-6 w-full rounded-2xl bg-white p-6 shadow-sm">
  <h2
  className="mb-4"
  style={{
    marginTop: 0,
    marginRight: 0,
    marginBottom: "16px",
    marginLeft: 0,
    fontSize: "20px",
    lineHeight: 1.375,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 600,
    letterSpacing: "0em",
    opacity: 1,
    textTransform: "none",
    color: "#344767",
  }}
>
  Our Location
</h2>

  <p
  className="mb-3"
  style={{
    marginTop: 0,
    marginRight: 0,
    marginBottom: "12px",
    marginLeft: 0,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    lineHeight: 1.5,
    letterSpacing: "0.02857em",
    opacity: 1,
    textTransform: "none",
    color: "#67748E",
    fontWeight: 400,
  }}
>
  Klinik Pakar Kesihatan USIM
</p>

  <div className="mb-3 flex items-center gap-3">
    <Phone size={20} color="#000000" strokeWidth={1.8} fill="none"/>
    <a
  href="tel:+60126504921"
  style={{
    margin: 0,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    lineHeight: 1.5,
    letterSpacing: "0.02857em",
    color: "#67748E",
    fontWeight: 600,
    textDecoration: "none",
  }}
>
  +60126504921
</a>
  </div>

  <div className="grid grid-cols-[20px_1fr] gap-x-3 text-sm leading-6 text-slate-600">
  <span></span>
  <span className="text-sm leading-[1.5] tracking-[0.02857em] text-[#67748E] font-semibold">
    Lot 193,194 Jalan Nilai Square 6, Bandar
    </span>

  <MapPin
    size={20}
    color="#000000"
    strokeWidth={1.8}
    fill="none"
    className="self-center mr-3"
  />
  <span className="text-sm leading-[1.5] tracking-[0.02857em] text-[#67748E] font-semibold">
    Baru Nilai, 71800 Nilai, Negeri Sembilan
    </span>

  <span></span>
  <span className="text-sm leading-[1.5] tracking-[0.02857em] text-[#67748E] font-semibold">
    Malaysia
    </span>
</div>
</section>




        {/* Treatments */}
<section className="mt-6 w-full min-h-[160px] rounded-2xl bg-white p-8 shadow-sm">
  <h2
    style={{
      margin: 0,
      marginBottom: "36px",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontSize: "20px",
      lineHeight: 1.375,
      fontWeight: 600,
      letterSpacing: "0em",
      color: "#344767",
    }}
  >
    Treatments
  </h2>

  <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-[52px] sm:grid-cols-3 lg:grid-cols-6">
    {[
      "Birthing Care",
      "Heart Care",
      "Emergency",
      "Family Medicine",
      "Cancer Care",
      "Orthopedics",
    ].map((treatment) => (
      <span
        key={treatment}
        className="text-sm leading-[1.5] tracking-[0.02857em] text-[#67748E] font-bold"
      >
        {treatment}
      </span>
    ))}
  </div>
</section>

        {/* For Our Patients: full page width */}
        <section className="mt-6 w-full rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-slate-800">
            For Our Patients
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl p-5 flex flex-col items-center text-center">
              <Clock
                className="mb-3"
                size={36}
                color="#CB0C9F"
              />

              <h3
              style={{
                margin: 0,
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "20px",
                lineHeight: 1.375,
                fontWeight: 600,
                letterSpacing: "0em",
                color: "#67748E",
                }}
              >
                Visiting Hours
              </h3>

              <p
              style={{
                margin: 0,
                marginTop: "8px",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.6,
                letterSpacing: "0.01071em",
                color: "#67748E",
                }}
              >
                Guest are encouraged to visit loved one during their hospital stay
              </p>


              <p
              style={{
                margin: "8px 0px 0px 4px",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: "0.02857em",
                color: "#CB0C9F",
                textAlign: "left",
                alignSelf: "flex-start",
                }}
              >
                Learn More About Our Visiting Hours
              </p>
            </div>

            <div className="rounded-xl p-5 flex flex-col items-center text-center">
              <Wifi
                className="mb-3"
                size={36}
                color="#CB0C9F"
              />

              <h3
              style={{
                margin: 0,
                
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "20px",
                lineHeight: 1.375,
                fontWeight: 600,
                letterSpacing: "0em",
                color: "#67748E",
              }}
              >
                For Our Patients
              </h3>

              <p
              style={{
                margin: 0,
                marginTop: "8px",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.6,
                letterSpacing: "0.01071em",
                color: "#67748E",
              }}
              >
                Free Wifi is available to Patients and Visior
              </p>
            </div>
          </div>
        </section>


        {/* Smoke-Free Policy: separate horizontal box */}
        <div className="mt-6 w-full min-h-[180px] rounded-xl bg-white p-8 shadow-sm">
        <div className="flex flex-col">
        <CigaretteOff
          size={36}
          color="#CB0C9F"
        />

        <div>
        <h3
        style={{
          margin: 0,
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontSize: "20px",
          lineHeight: 1.375,
          fontWeight: 600,
          letterSpacing: "0em",
          color: "#344767",
          }}
        >
          Smoke-Free Policy
        </h3>

        <p
        style={{
          margin: 0,
          marginTop: "8px",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: "0.01071em",
          color: "#344767",
          }}
        >
          Smoke Free Services for in-Room and hospital services
        </p>
      </div>
    </div>
  </div>



          {/* Insurance Plans Accepted */}
  <section className="mt-6 w-full rounded-2xl bg-white p-8 shadow-sm">
  <h3
    style={{
      margin: 0,
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontSize: "20px",
      lineHeight: 1.375,
      fontWeight: 600,
      letterSpacing: "0em",
      color: "#344767",
    }}
  >
    Insurance Plans Accepted
  </h3>

  <p
    style={{
      margin: 0,
      marginTop: "8px",
      marginBottom: "24px",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.02857em",
      color: "#67748E",
    }}
  >
    This Provider Accepts the following insurance plans.
  </p>

  <div className="flex flex-col gap-0">
    {[
      "AXA EMedic Plus",
      "Allianz Diabetic",
      "Manulife Medical Insurance",
    ].map((plan) => (
      <p
        key={plan}
        style={{
          margin: 0,
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: 1.5,
          letterSpacing: "0.02857em",
          color: "#344767",
        }}
      >
        {plan}
      </p>
    ))}
  </div>
</section>

        
</div>  

{/* Footer */}
      <footer className="px-8 py-4 flex flex-wrap justify-between items-center gap-4 text-[13.5px] text-[#7f8c8d]">
        <div className="flex items-center gap-1.5">
          <span>© 2026, made with</span>

          <Heart
            size={16}
            color="#67748E"
            fill="#67748E"
            strokeWidth={2}
          />

          <span>by</span>

          <span
          className="font-bold ml-1"
          style={{ color: "rgb(52, 71, 103)" }}
          >
           MyPiHUB
          </span>

          <span className="ml-1">for a better web.</span>
        </div>

        <div className="flex items-center gap-7">
          <a
            href="#"
            className="hover:text-[#ec407a] transition-colors"
          >
            MyPatientHUB
          </a>

          <a
            href="#"
            className="hover:text-[#ec407a] transition-colors"
          >
            About Us
          </a>

          <a
            href="#"
            className="hover:text-[#ec407a] transition-colors"
          >
            Blog
          </a>
        </div>
      </footer>
</div>  
  );
}

export default ClinicDetails;
