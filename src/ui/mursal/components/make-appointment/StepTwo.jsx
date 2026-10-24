import { useState } from 'react'; import { Pencil } from 'lucide-react'; import { NAVY, GRAY, PINK, CARD, RADIO_ON, P20, H6, P16, W2, W3, formatDate, } from './shared'; import { BTN_DARK, BTN_BACK, BTN_GREEN } from './AppButton'; import { RadioGroup, TextField, Item } from './FormFields'; import DoctorSummary from './DoctorSummary'; import mastercardImg from '../../../../assets/find-doctor/mastercard.png'; import paypalImg from '../../../../assets/find-doctor/paypal.png';
/* ---------- مرحله ۲: Patient Information ---------- */ function StepTwo({ doctor, visit, date, form, set, setValue, onBack, onNext }) { const visitLabel = visit === 'video' ? 'Video Visit' : 'Office Visit'; const [payment, setPayment] = useState('');
const optionCls = 'flex w-full cursor-pointer items-center rounded-xl border border-[rgb(222,226,230)] bg-white p-6 text-left';
return ( <> <h4 className={'mb-2 text-2xl font-normal leading-[33px] tracking-[0.1764px] ' + NAVY}> Schedual an Appointment </h4>
  <div className="-mt-6 -ml-6 flex w-[calc(100%+24px)] flex-wrap">
    {/* ===== ستون چپ: فرم (بدون کادر) ===== */}
    <div className="w-full pt-6 pl-6 lg:w-1/2">
      <div className="-mt-4 -ml-4 flex w-[calc(100%+16px)] flex-wrap">
        <Item>
          <p className={P20}>Who is taking appointment?</p>
        </Item>
        <Item>
          <RadioGroup
            name="who"
            value={form.who}
            onChange={(v) => setValue('who', v)}
            options={[['me', 'Me'], ['dependent', 'My Dependent']]}
          />
        </Item>

        <Item>
          <p className={P20}>Insurance Information</p>
        </Item>
        <Item w={W2}>
          <TextField label="Insurance Company and Plan" value={form.insurance} onChange={set('insurance')} />
        </Item>
        <Item w={W2}>
          <TextField label="Insurance Member ID" value={form.memberId} onChange={set('memberId')} />
        </Item>

        <Item>
          <p className={P20}>Personal Information</p>
        </Item>
        <Item w={W2}>
          <TextField label="first name" placeholder="Eg. Michael" value={form.firstName} onChange={set('firstName')} />
        </Item>
        <Item w={W2}>
          <TextField label="last name" placeholder="Eg. Tomson" value={form.lastName} onChange={set('lastName')} />
        </Item>
        <Item w={W2}>
          <TextField label="Email" type="email" placeholder="Eg.tomson@gmail.com" value={form.email} onChange={set('email')} />
        </Item>
        <Item w={W2}>
          <TextField label="Confirm Email" type="email" value={form.confirmEmail} onChange={set('confirmEmail')} />
        </Item>
        <Item w={W2}>
          <TextField label="Phone Number" type="tel" placeholder="+49 403 4394 3" value={form.phone} onChange={set('phone')} />
        </Item>
        <Item w={W2}>
          <TextField label="Street Address" value={form.street} onChange={set('street')} />
        </Item>

        <Item w={W2}>
          <RadioGroup
            title="Gender"
            name="gender"
            value={form.gender}
            onChange={(v) => setValue('gender', v)}
            options={[['female', 'Female'], ['male', 'Male'], ['other', 'Other']]}
          />
        </Item>
        <Item w={W2}>
          <RadioGroup
            title="Phone Type"
            name="phoneType"
            value={form.phoneType}
            onChange={(v) => setValue('phoneType', v)}
            options={[['phone', 'Phone'], ['home', 'Home'], ['work', 'Work']]}
          />
        </Item>

        {/* City / State / Zip Code در یک خط */}
        <Item w={W3}>
          <TextField label="City" placeholder="X X X X X" value={form.city} onChange={set('city')} />
        </Item>
        <Item w={W3}>
          <TextField label="State" placeholder="X X X X X" value={form.state} onChange={set('state')} />
        </Item>
        <Item w={W3}>
          <TextField label="Zip Code" placeholder="X X X X X" value={form.zip} onChange={set('zip')} />
        </Item>

        <Item>
          <p className={P20}>Visit Information</p>
        </Item>
        <Item>
          <TextField
            multiline
            label="Reason For Visit (Symptoms, Diagonsis, Test Results, or Other Information)"
            value={form.reason}
            onChange={set('reason')}
          />
        </Item>
        <Item>
          <TextField label="Refferring Doctor (Optional)" placeholder="X X X X X" value={form.referring} onChange={set('referring')} />
        </Item>
      </div>
    </div>

    {/* ===== ستون راست: سه کارت ===== */}
    <div className="w-full pt-6 pl-6 lg:w-1/2">
      {/* کارت ۱: Appointment Details */}
      <div className={CARD + ' flex flex-col p-6'}>
        <div className={P20 + ' mb-[5px]'}>Appointment Details</div>
        <DoctorSummary doctor={doctor} visitLabel={visitLabel} />

        <div>
          <h6 className={H6 + PINK}>Date and Time</h6>
          <p className={P16 + GRAY}>{formatDate(date)}</p>
        </div>
        <div>
          <h6 className={H6 + PINK}>Visit Type</h6>
          <p className={P16 + GRAY}>{visitLabel}</p>
        </div>

        {/* به جای hr: چون Doctor.css برای hr مارجین را صفر می‌کند */}
        <div className="my-4 h-px w-full bg-[linear-gradient(to_right,rgba(255,255,255,0),rgba(0,0,0,0.4),rgba(255,255,255,0))] opacity-25" />

        <h6 className={H6 + PINK}>About {visitLabel}</h6>
        <p className={P16 + GRAY}>
          {visit === 'video'
            ? ' video visit lets you see doctor from your mobile device instead of an in-person appointment. '
            : ' Visit the doctor at the clinic address shown for this appointment. '}

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ color: 'rgb(85,26,139)', fontWeight: 400, textDecoration: 'none' }}
            className="cursor-pointer"
          >
            Learn More About {visitLabel}s{' '}
          </a>{' '}
          and how to prepare
        </p>
      </div>

      {/* کارت ۲: Credit and Debit Cards */}
      <div className={CARD + ' mt-[10px] flex flex-col p-5'}>
        <h6 className={'text-base font-medium leading-[25.6px] tracking-[0.11424px] ' + NAVY}>
          Credit and Debit Cards
        </h6>
        <span className={'text-xs leading-[15px] tracking-[0.39996px] ' + NAVY}>
          Transaction fee may apply
        </span>

        <TextField label="Card Holder Name" placeholder="X X X X X" value={form.cardHolder} onChange={set('cardHolder')} />
        <TextField label="Card Number" placeholder="X X X X X" value={form.cardNumber} onChange={set('cardNumber')} />

        {/* Start Date / End Date / CVV در یک خط */}
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-[1fr_1fr_1.2fr]">
          <TextField label="Start Date" type="date" value={form.startDate} onChange={set('startDate')} />
          <TextField label="End Date" type="date" value={form.endDate} onChange={set('endDate')} />
          <TextField label="CVV" value={form.cvv} onChange={set('cvv')} />
        </div>

        <button type="button" className={BTN_GREEN}>
          Pay Now
        </button>

        <label className="mt-3 ml-[5px] inline-flex cursor-pointer items-center">
          <span
            className={
              'relative mr-[6px] inline-flex h-5 w-5 items-center justify-center rounded-[5.6px] border ' +
              (form.agree
                ? 'border-[rgb(52,71,103)] bg-[rgb(52,71,103)]'
                : 'border-[rgb(222,226,230)] bg-white')
            }
          >
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setValue('agree', e.target.checked)}
              className="absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
            />
            {form.agree && (
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
              </svg>
            )}
          </span>
          <span
            style={{ color: 'rgb(52,71,103)' }}
            className="ml-1 translate-y-px text-sm font-bold leading-none tracking-[0.00938em]"
          >
            I have read and accept the term of use rules
          </span>
        </label>
      </div>

      {/* کارت ۳: Payment Method (چسبیده به کارت قبلی، بدون فاصله) */}
      <div className={CARD + ' flex flex-col'}>
        <div className="flex px-4 pt-4">
          <h6 className={H6 + NAVY}>Payment Method</h6>
        </div>

        <div className="flex flex-col gap-6 p-4">
          <button type="button" onClick={() => setPayment('card')} className={optionCls}>
            <img src={mastercardImg} alt="master card" className="mr-4 h-auto w-[40px] shrink-0" />
            <span className="min-w-0 flex-1">
              <span className={'block ' + H6 + NAVY}>Online Banking and Direct debit</span>
              <span className={'block text-xs leading-[15px] tracking-[0.39996px] ' + NAVY}>
                Free of charges
              </span>
            </span>
            <span
              className={
                'ml-4 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ' +
                (payment === 'card' ? RADIO_ON : 'border-[rgb(222,226,230)] bg-white')
              }
            >
              {payment === 'card' && <span className="h-2 w-2 rounded-full bg-white" />}
            </span>
          </button>

          <button type="button" className={optionCls}>
            <img src={paypalImg} alt="master card" className="mr-4 h-auto w-[40px] shrink-0" />
            <span className="min-w-0 flex-1">
              <span className={'block ' + H6 + NAVY}>Online Banking and Direct debit</span>
              <span className={'block text-xs leading-[15px] tracking-[0.39996px] ' + NAVY}>
                Free of charges
              </span>
            </span>
            <div className="group relative ml-4 flex shrink-0 items-center justify-center">
              <Pencil size={20} className={NAVY} />
              <div className="pointer-events-none absolute right-0 bottom-[130%] z-50 hidden group-hover:block">
                <div className="rounded bg-[#212b36] px-2 py-1 text-[13px] whitespace-nowrap text-white shadow-md">
                  Edit Card
                </div>
                <div className="absolute top-full right-[3px] h-0 w-0 border-4 border-transparent border-t-[#212b36]" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-6 mb-0.5 flex w-full justify-between">
    <button type="button" className={BTN_BACK} onClick={onBack}>
      back
    </button>
    <button type="button" className={BTN_DARK} onClick={onNext}>
      next
    </button>
  </div>
</>
); }
export default StepTwo;