import { NAVY, P20 } from './shared'; import { BTN_BACK, BTN_DARK } from './AppButton';
/* ---------- مرحله ۳: Appointment Scheduled ---------- */ function StepThree({ onBack, onSend }) { return ( <div> <div className="w-4/5"> <div className="mb-2"> <h4 className={'text-2xl font-normal leading-[1.375] tracking-[0.00735em] ' + NAVY}> Appointment Schedualed </h4> </div> </div>
  <div className="w-full lg:w-7/12">
    <p className={P20}>A confirmation email has been sent to your inbox.</p>
  </div>

  <div className="mt-6 mb-0.5 flex w-full justify-between">
    <button type="button" className={BTN_BACK} onClick={onBack}>
      back
    </button>
    <button type="button" className={BTN_DARK} onClick={onSend}>
      send
    </button>
  </div>
</div>
); }
export default StepThree;