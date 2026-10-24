import ServiceCard from './ServiceCard'; import primaryCare from '../../../../assets/find-doctor/primary-care.png'; import emergencyCare from '../../../../assets/find-doctor/emergency-care.png'; import imagingServices from '../../../../assets/find-doctor/imaging-services.png'; import urgentCare from '../../../../assets/find-doctor/urgent-care.png';
const sectionClass = 'min-w-0 rounded-[16px] bg-white px-[16px] pb-[24px] pt-[16px] sm:px-[32px] sm:pb-[32px] text-[#344767] shadow-[0_20px_27px_rgba(0,0,0,0.05)]'; const sectionTitleClass = 'text-center text-[24px] font-[500] leading-[33px] tracking-[0.1764px] text-[#344767]';
const services = [ { title: 'Primary Care and Internal MD', text: 'our Doctors Partner with you to help you reach your welness', image: primaryCare, }, { title: 'Emergency Care', text: 'we provide emergency care for adults and children', image: emergencyCare, }, { title: 'Imaging Services', text: 'From Xray to MR scan we offer...', image: imagingServices, }, { title: 'Urgent Care', text: 'we offer urgent care for none ...', image: urgentCare, }, ];
function SpecialServices({ onOpen }) { return ( <section className={sectionClass}> <h3 className={sectionTitleClass + ' mt-[24px]'}>Special Services</h3>
  <div className="mt-[24px] grid grid-cols-1 items-start gap-[24px] md:grid-cols-2">
    {services.map((item) => (
      <ServiceCard key={item.title} item={item} onOpen={onOpen} />
    ))}
  </div>
</section>
); }
export default SpecialServices;