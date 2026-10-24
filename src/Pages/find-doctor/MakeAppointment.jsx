import { useEffect, useState } from 'react';
 import curved from '../../assets/find-doctor/curved0.jpg';
  import { CARD } from '../../ui/mursal/components/make-appointment/shared'; import Stepper from '../../ui/mursal/components/make-appointment/Stepper'; import StepOne from '../../ui/mursal/components/make-appointment/StepOne'; import StepTwo from '../../ui/mursal/components/make-appointment/StepTwo'; import StepThree from '../../ui/mursal/components/make-appointment/StepThree'; import ChatWidget from '../../ui/mursal/components/make-appointment/ChatWidget';
  import PageHeader from '../../ui/mursal/components/PageHeader';
/* ---------- صفحهٔ اصلی ---------- */
 const EMPTY_FORM = { who: '', insurance: '', memberId: '', firstName: '', lastName: '', email: '', confirmEmail: '', phone: '', street: '', gender: '', phoneType: '', city: '', state: '', zip: '', reason: '', referring: '', cardHolder: '', cardNumber: '', startDate: '', endDate: '', cvv: '', agree: false, };
function MakeAppointment({ doctor, initialVisit = 'video' }) { const [step, setStep] = useState(0); const [isNew, setIsNew] = useState(''); const [visit, setVisit] = useState(initialVisit); const [date, setDate] = useState(new Date()); const [form, setForm] = useState(EMPTY_FORM);
useEffect( function () { window.scrollTo(0, 0); }, [step] );
const setValue = (key, value) => setForm((f) => ({ ...f, [key]: value })); const set = (key) => (e) => setValue(key, e.target.value);
return ( <div className="ap-page  pb-16 text-xl leading-[1.625] tracking-[0.00938em] text-[rgb(52,71,103)]" style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }} > 
<div
    className="relative flex h-[18.75rem] items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat px-6 pt-[58px] pb-6"
    style={{
      backgroundImage:
        'linear-gradient(310deg, rgba(121,40,202,0.6), rgba(255,0,128,0.6)), url(' + curved + ')',
    }}
  >
    <PageHeader title="Makeappointment" />

    <h2 className="text-center text-[1.75rem] leading-[1.3] font-medium tracking-[-0.00833em] text-white sm:text-[2.25rem]">
      Scheduale Appointment
    </h2>
  </div> 
  
  <Stepper step={step} />

  <div className={CARD + ' flex flex-col overflow-hidden'}>
    <div className="p-4">
      {step === 0 && (
        <StepOne
          doctor={doctor}
          visit={visit}
          setVisit={setVisit}
          date={date}
          setDate={setDate}
          isNew={isNew}
          setIsNew={setIsNew}
          onNext={() => setStep(1)}
        />
      )}

      {step === 1 && (
        <StepTwo
          doctor={doctor}
          visit={visit}
          date={date}
          form={form}
          set={set}
          setValue={setValue}
          onBack={() => setStep(0)}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepThree
          onBack={() => setStep(1)}
          onSend={() => {
            console.log({ doctor, visit, date, form });
          }}
        />
      )}
    </div>
  </div>

  {/* چت‌باکس فقط در صفحهٔ دوم */}
  {step === 1 && <ChatWidget doctor={doctor} />}
</div>
); }
export default MakeAppointment;