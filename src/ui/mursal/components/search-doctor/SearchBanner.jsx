import curved from '../../../../assets/find-doctor/curved0.jpg';
import PageHeader from '../PageHeader';
const bannerBackground = 'linear-gradient(310deg, rgba(121,40,202,0.6), rgba(255,0,128,0.6)), url(' + curved + ')';
const fieldBoxClass = 'fd-hero-box flex w-full items-center rounded-[8px] border border-[#d2d6da] bg-white px-[12px] py-[8px] text-[14px] font-[400] leading-[19.6px] tracking-[0.13132px] text-[#495057] outline-none'; const inputClass = 'block h-[22px] w-full min-w-0 border-0 bg-transparent p-0 outline-none placeholder:text-[#495057] placeholder:opacity-[0.42]'; const heroButtonClass = 'inline-flex min-h-[40px] min-w-[64px] cursor-pointer items-center justify-center rounded-[8px] border-0 bg-[#17c1e8] px-[24px] py-[12px] text-[12px] font-[700] uppercase leading-[16.8px] tracking-[0.34284px] text-[#67748e] shadow-[0_4px_7px_-1px_rgba(0,0,0,0.11),0_2px_4px_-1px_rgba(0,0,0,0.07)] outline-none transition-all duration-150 ease-in hover:scale-[1.05] [&:focus:not(:hover)]:shadow-[0_0_0_3.2px_rgba(23,193,232,0.5)]';
function SearchBanner({ doctorName, setDoctorName, zipCode, setZipCode, onSearch, onCurrent, pageTitle = 'Searchdoctor' }){ return ( <div className="relative">
 <PageHeader title={pageTitle} />  <div className="absolute inset-0 overflow-hidden rounded-[16px]" style={{ backgroundImage: bannerBackground, backgroundSize: 'cover', backgroundPosition: '50% center', backgroundRepeat: 'no-repeat', }} />
  <div className="relative min-h-[300px] px-[24px] pb-[16px] pt-[100px]">
    <div className="text-center">
      <h3 className="text-[36px] font-[500] leading-[46.8px] tracking-[-0.29988px] text-white">
        Find a Doctor
      </h3>
      <h6 className="text-[16px] font-[400] leading-[26px] tracking-[0.12px] text-white">
        Search Doctors and schedule an appointment
      </h6>
    </div>

    <form
      onSubmit={onSearch}
      className="mt-[12px] flex flex-wrap items-end justify-center gap-[8px]"
    >
      <div className="flex w-full flex-col justify-end md:w-1/4 md:min-w-[280px]">
        <div className={fieldBoxClass}>
          <input
            type="text"
            placeholder="Search a doctor by name, specility"
            value={doctorName}
            onChange={(event) => setDoctorName(event.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex w-full flex-col justify-end md:w-1/4 md:min-w-[280px]">
        <div className={fieldBoxClass}>
          <input
            type="text"
            placeholder="Zip Code or Neigborhood"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <button type="button" onClick={onCurrent} className={heroButtonClass}>
        Current
      </button>

      <button type="submit" className={heroButtonClass}>
        Search
      </button>
    </form>
  </div>
</div>
); }
export default SearchBanner;