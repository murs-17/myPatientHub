import SpecialtyCard from './SpecialtyCard';
const sectionClass = 'min-w-0 rounded-[16px] bg-white px-[32px] pb-[32px] pt-[16px] text-[#344767] shadow-[0_20px_27px_rgba(0,0,0,0.05)]'; const sectionTitleClass = 'text-center text-[24px] font-[500] leading-[33px] tracking-[0.1764px] text-[#344767]';
const specialties = [ 'Anesthesiology', 'Dermatology', 'Emergency medicine', 'Neurology', 'Consultation', 'Ophthalmology', ];
function SpecialtySection({ onOpen }) { return ( <section className={sectionClass}> <h3 className={sectionTitleClass + ' mt-[32px]'}>Find Doctors By Specialty</h3>
  <div className="mb-[24px] text-center text-[20px] font-[400] leading-[32.5px] tracking-[0.1876px] text-[rgba(0,0,0,0.87)]">
    Select a Specialty to View all Doctors and schedule an Appointment
  </div>

  <div className="grid grid-cols-1 items-start gap-[24px] md:grid-cols-2">
    {specialties.map((name) => (
      <SpecialtyCard key={name} name={name} onOpen={onOpen} />
    ))}
  </div>
</section>
); }
export default SpecialtySection;