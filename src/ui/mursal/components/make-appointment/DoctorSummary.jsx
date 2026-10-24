import { NAVY, GRAY, PINK, H6, P16 } from './shared';
/* عکس: عرض ۱۱۰ و ارتفاع خودکار (بدون برش، مثل سایت اصلی) */ function DoctorSummary({ doctor, visitLabel, framed = false }) { const photoShadow = 'shadow-[0_0.5rem_1.625rem_-0.25rem_rgba(20,20,20,0.15),0_0.5rem_0.5625rem_-0.3125rem_rgba(20,20,20,0.06)]';
return ( <div className="flex flex-col gap-4 sm:flex-row sm:gap-0"> <div className={ 'w-[110px] shrink-0 self-start overflow-hidden rounded-xl bg-white ' + photoShadow + (framed ? ' h-[110px]' : ' flex') } > {doctor.photo && ( <img src={doctor.photo} alt={doctor.name} className="block h-auto w-full object-cover" /> )} </div>
  <div className="min-w-0 max-w-[17rem] sm:ml-4">
    <h6 className={H6 + NAVY}>{doctor.name}</h6>
    <p className={P16 + GRAY}>{doctor.field}</p>
    <p className={P16 + GRAY}>{doctor.role}</p>
    <p className={P16 + PINK}>{visitLabel}</p>
  </div>
</div>
); }
export default DoctorSummary;