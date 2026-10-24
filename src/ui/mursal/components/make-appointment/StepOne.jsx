import { NAVY, GRAY, PINK, CARD, VIDEO_PATH, PIN_PATH, Icon } from './shared'; import { BTN_DARK } from './AppButton'; import { RadioGroup } from './FormFields'; import Calendar from './Calendar'; import DoctorSummary from './DoctorSummary';
/* ---------- مرحله ۱: Appointment Details ---------- */ function StepOne({ doctor, visit, setVisit, date, setDate, isNew, setIsNew, onNext }) { const visitLabel = visit === 'video' ? 'Video Visit' : 'Office Visit';
const titleCls = 'm-0 text-[1.75rem] font-medium leading-[1.375] tracking-[0.00735em] text-[rgb(203,12,159)] '; const descCls = 'm-0 text-base font-normal leading-[1.6] tracking-[0.01071em] text-[rgb(52,71,103)] '; const tabCls = 'relative z-10 flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-transparent p-1 text-base tracking-[0.02857em] ' + NAVY;
return ( <> <div className="-mt-4 -ml-4 flex w-[calc(100%+16px)] flex-wrap"> {/* چوکات چپ: فرم */} <div className="w-full pt-4 pl-4 lg:mb-24 lg:w-7/12"> <div className={CARD + ' relative min-w-0 overflow-hidden p-6 lg:pl-12'}> <h4 className={titleCls}>Schedule an Appointment</h4> <p className={'mb-2 text-lg leading-[1.625] tracking-[0.00938em] ' + NAVY}> Are you new to this doctor </p>
        <RadioGroup
          name="isNew"
          value={isNew}
          onChange={setIsNew}
          options={[
            ['yes', 'Yes'],
            ['no', 'No, I have visited before'],
          ]}
        />

        <h4 className={titleCls}>Type of Appointment ?</h4>
        <div className="relative mt-2 flex rounded-xl bg-[rgb(248,249,250)] p-1">
          <span
            className={
              'absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-lg bg-white shadow-[0_1px_5px_1px_rgb(221,221,221)] transition-all duration-500 ease-in-out ' +
              (visit === 'office' ? 'left-1/2' : 'left-1')
            }
          />
          <button type="button" className={tabCls} onClick={() => setVisit('video')}>
            <Icon path={VIDEO_PATH} size={36} />
            Video Visit
          </button>
          <button type="button" className={tabCls} onClick={() => setVisit('office')}>
            <Icon path={PIN_PATH} size={36} />
            Office Visit
          </button>
        </div>

        <div className="mt-6 flex items-center">
          <h4 className={'mr-4 text-2xl font-medium leading-[1.375] tracking-[0.00735em] ' + GRAY}>
            {visitLabel}
          </h4>
          <span className={'flex h-9 w-9 ' + PINK}>
            <Icon path={visit === 'video' ? VIDEO_PATH : PIN_PATH} size={36} />
          </span>
        </div>

        <div className={descCls + 'mt-3'}>
          {visit === 'video'
            ? 'Video visit let you see a doctor from your mobile device instead of in-person'
            : 'Nilai, Negeri Sembilan, Malaysia'}
        </div>

        <span className={'mt-2 block text-sm font-bold leading-6 tracking-[0.02857em] ' + PINK}>
          {visit === 'video'
            ? 'Next Available: ' + doctor.next
            : 'Appointment Available next: Monday'}
        </span>
      </div>
    </div>

    {/* چوکات راست: دکتر + تقویم */}
    <div className="w-full pt-4 pl-4 lg:w-5/12">
      <div className={CARD + ' relative min-w-0 overflow-hidden p-6'}>
        <DoctorSummary doctor={doctor} visitLabel={visitLabel} framed />
        <div className="mt-2">
          <Calendar value={date} onChange={setDate} />
        </div>
      </div>
    </div>
  </div>

  <div className="mt-6 mb-0.5 flex w-full justify-between">
    <div />
    <button type="button" className={BTN_DARK} onClick={onNext}>
      next
    </button>
  </div>
</>
); }
export default StepOne;