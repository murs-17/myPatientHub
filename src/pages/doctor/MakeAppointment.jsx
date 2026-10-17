import { useEffect, useRef, useState } from 'react'; import { Pencil, Send, Smile, X } from 'lucide-react'; import curved from './curved0.jpg';
/* ---------- ثابت‌ها ---------- */ const NAVY = 'ap-navy text-[rgb(52,71,103)]'; const GRAY = 'ap-gray text-[rgb(103,116,142)]'; const PINK = 'ap-pink text-[rgb(203,12,159)]'; const RADIO_ON = 'border-[rgb(52,71,103)] bg-[rgb(52,71,103)]'; const CARD = 'rounded-2xl bg-white shadow-[rgba(0,0,0,0.05)_0rem_1.25rem_1.6875rem_0rem]';



/* دکمه‌ها: بدون تغییر از کد خود شما */ const BTN_BASE = 'min-h-10 min-w-16 cursor-pointer items-center justify-center rounded-lg border-0 px-6 py-3 text-xs font-bold uppercase leading-[1.4] tracking-[0.02857em] ' + 'shadow-[rgba(0,0,0,0.11)0rem_0.25rem_0.4375rem-0.0625rem,rgba(0,0,0,0.07)0rem_0.125rem_0.25rem-0.0625rem] ' + 'transition-all duration-150 ease-in hover:scale-[1.02]';
const BTN_DARK = 'inline-flex bg-[linear-gradient(310deg,rgb(20,23,39),rgb(58,65,111))] text-white ' + BTN_BASE;
const BTN_LIGHT = 'inline-flex bg-[rgb(233,236,239)] text-[rgb(52,71,103)] ' + BTN_BASE;
const BTN_BACK = 'inline-flex bg-[linear-gradient(310deg,rgb(206,212,218),rgb(235,239,244))] text-[rgb(58,65,111)] ' + BTN_BASE;
const BTN_GREEN = 'flex w-full mt-6 bg-[rgb(130,214,22)] text-white ' + BTN_BASE;
const P20 = 'text-xl font-normal leading-[32.5px] tracking-[0.1876px] ' + NAVY; const H6 = 'text-base font-medium leading-[26px] tracking-[0.12px] '; const P16 = 'text-base font-normal leading-[25.6px] tracking-[0.17136px] ';
const INNER = 'w-full min-w-0 border-0 bg-transparent p-0 text-inherit outline-none placeholder:text-[rgb(173,181,189)]';
/* عرض ستون‌ها در فرم */ const W2 = 'md:w-1/2'; const W3 = 'md:w-1/3';
const STEPS = ['Appointment Details', 'Patient Information', 'Finalize Appointment']; const WEEK = [['MO', 'N'], ['TUE'], ['WE', 'D'], ['THU'], ['FRI'], ['SAT'], ['SUN']]; const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ]; const DAYS = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];
const VIDEO_PATH = 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z'; const PIN_PATH = 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z';
function sameDay(a, b) { return ( a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate() ); }
function formatDate(d) { return ( DAYS[d.getDay()] + ', ' + MONTHS[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' at 8:00' ); }
function nowTime() { const n = new Date(); return String(n.getHours()).padStart(2, '0') + ':' + String(n.getMinutes()).padStart(2, '0'); }
/* ---------- کامپوننت‌های کوچک ---------- */ function Icon({ path, size }) { return ( <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"> <path d={path} fill="currentColor" /> </svg> ); }
function Radio({ name, checked, onChange, label }) { return ( <label className="mr-4 mb-0.5 -ml-[11px] inline-flex cursor-pointer items-center"> <span className={ 'relative mr-[6px] inline-flex h-6 w-6 items-center justify-center rounded-full border ' + (checked ? RADIO_ON : 'border-[rgb(222,226,230)] bg-white') } > <input
type="radio"
name={name}
checked={checked}
onChange={onChange}
className="absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
/> {checked && <span className="h-2 w-2 rounded-full bg-white" />} </span> <span className={'ml-1 inline-block text-sm font-bold leading-[14px] tracking-[0.13132px] ' + NAVY}> {label} </span> </label> ); }
function RadioGroup({ title, name, value, onChange, options }) { return ( <div className="ml-[10px] inline-flex flex-col"> {title && ( <span className={'mb-1 text-xl font-normal leading-[28.75px] tracking-[0.1876px] ' + NAVY}> {title} </span> )} <div className="flex flex-wrap"> {options.map(function (o) { return ( <Radio key={o[0]} name={name} checked={value === o[0]} onChange={() => onChange(o[0])} label={o[1]} /> ); })} </div> </div> ); }
function TextField({ label, value, onChange, placeholder, type, multiline, className }) { return ( <label className={'block min-w-0 ' + (className || '')}> <span className={'mb-2 ml-1 block pt-[9.5px] text-xs font-bold capitalize leading-[15px] tracking-[0.39996px] ' + NAVY}> {label} </span> <div className={ 'grid rounded-lg border border-[rgb(210,214,218)] bg-white px-3 text-sm leading-[19.6px] tracking-[0.13132px] text-[rgb(73,80,87)] focus-within:border-[rgb(53,209,245)] focus-within:shadow-[0_0_0_2px_rgba(53,209,245,0.3)] ' + (multiline ? 'py-2.5' : 'py-2') } > {multiline ? ( <textarea className={INNER + ' h-[60px] resize-none'} value={value} onChange={onChange} /> ) : ( <input type={type || 'text'} className={INNER + ' h-[22px]'} placeholder={placeholder} value={value} onChange={onChange} /> )} </div> </label> ); }
/* آیتم گرید: padding 16px 0 0 16px */ function Item({ w, children }) { return <div className={'w-full pt-4 pl-4 ' + (w || '')}>{children}</div>; }
function Stepper({ step }) { return ( <div className="my-12 flex items-start px-3"> {STEPS.map(function (label, i) { const reached = i <= step; return ( <div key={label} className="relative flex flex-1 flex-col items-center px-2"> {i > 0 && ( <span className={ 'absolute top-[10px] right-1/2 left-[-50%] ' + (i <= step ? 'border-t-2 border-[rgb(20,23,39)]' : 'border-t border-[rgb(190,200,215)]') } /> )}
        <span className="relative z-10 flex h-5 items-center justify-center">
          <span
            className={
              reached
                ? 'block h-5 w-5 rounded-full bg-[rgb(20,23,39)]'
                : 'block h-4 w-4 rounded-full border border-[rgb(176,190,214)] bg-white'
            }
          />
        </span>

        <span
  className={
    'mt-2 text-center text-sm leading-[1.6] tracking-[0.01071em] sm:text-base ' +
    (reached ? NAVY : '')
  }
  style={reached ? undefined : { color: 'rgb(176,190,214)' }}
>
  {label}
</span>
      </div>
    );
  })}
</div>
); }
function Calendar({ value, onChange }) { const [view, setView] = useState( new Date(value.getFullYear(), value.getMonth(), 1) );
const year = view.getFullYear(); const month = view.getMonth(); const offset = (new Date(year, month, 1).getDay() + 6) % 7; const daysInMonth = new Date(year, month + 1, 0).getDate(); const rows = Math.ceil((offset + daysInMonth) / 7);
const days = []; for (let i = 0; i < rows * 7; i++) { days.push(new Date(year, month, 1 - offset + i)); }
function move(step) { setView(new Date(year, month + step, 1)); }
const navBtn = 'h-11 min-w-11 cursor-pointer bg-transparent text-[13.3333px] text-black hover:bg-[#e6e6e6]';
return ( <div className="w-[350px] max-w-full border border-[#a0a096] bg-white text-[1.25rem] tracking-[0.00938em] text-[rgb(52,71,103)]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} > <div className="mb-4 flex h-11 items-center"> <button type="button" className={navBtn} onClick={() => move(-12)}>«</button> <button type="button" className={navBtn} onClick={() => move(-1)}>‹</button> <span className="grow text-center text-[13.3333px] text-black"> {MONTHS[month] + ' ' + year} </span> <button type="button" className={navBtn} onClick={() => move(1)}>›</button> <button type="button" className={navBtn} onClick={() => move(12)}>»</button> </div>
  
  <div className="flex">
  {WEEK.map(function (w) {
    return (
      <div
        key={w.join('')}
        className="shrink-0 grow-0 basis-[14.2857%] px-0 py-[0.5em] text-center text-[0.75em] font-bold uppercase"
      >
        <span className="underline decoration-dotted">
          {w.map((part, k) => (
            <span key={k} className="block">{part}</span>
          ))}
        </span>
      </div>
    );
  })}
</div>

  <div className="flex flex-wrap">
    {days.map(function (d, i) {
      let color = 'text-black';
      if (d.getMonth() !== month) color = 'text-[#757575]';
      if (i % 7 >= 5) color = 'text-[#d10000]';const selected = sameDay(d, value);
      return (
        <button
          key={i}
          type="button"
          onClick={() => onChange(d)}
          className={
            'max-w-full basis-[14.2857%] cursor-pointer overflow-hidden border-0 px-[6.6667px] py-[10px] text-center text-[13.3333px] leading-4 ' +
            (selected
              ? 'bg-[#006edc] text-white hover:bg-[#1087ff]'
              : 'bg-transparent hover:bg-[#e6e6e6] ' + color)
          }
        >
          {d.getDate()}
        </button>
      );
    })}
  </div>
</div>
); }
/* عکس: عرض ۱۱۰ و ارتفاع خودکار (بدون برش، مثل سایت اصلی) */
function DoctorSummary({ doctor, visitLabel, framed = false }) { return ( <div className="flex flex-col gap-4 sm:flex-row sm:gap-0"> {framed ? ( <div className="h-[110px] w-[110px] shrink-0 self-start overflow-hidden rounded-xl bg-white shadow-[rgba(20,20,20,0.15)_0px_8px_26px_-4px,rgba(20,20,20,0.06)_0px_8px_9px_-5px]"> {doctor.photo && ( <img
  src={doctor.photo}
  alt={doctor.name}
  className="block h-auto w-full object-cover"
  /> )} </div> ) : ( <div className="flex w-[110px] shrink-0 self-start overflow-hidden rounded-xl bg-white shadow-[rgba(20,20,20,0.15)_0px_8px_26px_-4px,rgba(20,20,20,0.06)_0px_8px_9px_-5px]"> {doctor.photo && ( <img
  src={doctor.photo}
  alt={doctor.name}
  className="block h-auto w-full object-cover"
  /> )} </div> )}
    <div className="min-w-0 sm:ml-4">
      <h6 className={H6 + NAVY}>{doctor.name}</h6>
      <p className={P16 + GRAY}>{doctor.field}</p>
      <p className={P16 + GRAY}>{doctor.role}</p>
      <p className={P16 + PINK}>{visitLabel}</p>
    </div>
  </div>
  ); }







/* ---------- آیکن لانچر چت‌باکس ---------- */ function ChatIcon() { return ( <svg
width="34"
height="32"
viewBox="0 0 34 32"
fill="none"
stroke="#fff"
strokeWidth="1.7"
strokeLinejoin="round"
aria-hidden="true"
> <path d="M3.7 11H15A2.8 2.8 0 0 1 17.8 13.8V22A2.8 2.8 0 0 1 15 24.8H14V28.4L10.4 24.8H3.7A2.8 2.8 0 0 1 0.9 22V13.8A2.8 2.8 0 0 1 3.7 11Z" /> <path
d="M17.4 1.2H30.2A2.8 2.8 0 0 1 33 4V13A2.8 2.8 0 0 1 30.2 15.8H19.2L15 19.4V4A2.8 2.8 0 0 1 17.4 1.2Z"
fill="#35cce6"
/> <circle cx="5.2" cy="18" r="0.9" fill="#fff" stroke="none" /> <circle cx="8.2" cy="18" r="0.9" fill="#fff" stroke="none" /> <text
x="24.2"
y="12.6"
fontSize="11"
fontWeight="700"
textAnchor="middle"
fill="#fff"
stroke="none"
fontFamily="Arial, Helvetica, sans-serif"
> ? </text> </svg> ); }
/* ---------- چت‌باکس (فقط صفحهٔ دوم) ---------- */ const WELCOME = 'Welcome to this awesome chat!';
function ChatWidget({ doctor }) { const [open, setOpen] = useState(false); const [text, setText] = useState(''); const [unread, setUnread] = useState(2); const [msgs, setMsgs] = useState(function () { return [ { id: 1, from: 'doctor', text: WELCOME, time: nowTime() }, { id: 2, from: 'doctor', text: WELCOME, time: nowTime() }, ]; }); const bottomRef = useRef(null);
useEffect( function () { if (open && bottomRef.current) { bottomRef.current.scrollIntoView(); } }, [msgs, open] );
function toggle() { setOpen(!open); setUnread(0); }
function send(e) { e.preventDefault(); if (!text.trim()) return; setMsgs((m) => [...m, { id: Date.now(), from: 'me', text: text.trim(), time: nowTime() }]); setText(''); }
const avatar = (side) => doctor.photo ? ( <img src={doctor.photo} alt="" className={ 'h-10 w-10 shrink-0 rounded-full object-cover object-top ' + (side === 'left' ? 'mr-[10px]' : 'ml-[10px]') } /> ) : null;
return ( <> {open && ( <div className="fixed right-5 bottom-[100px] z-50 flex h-[min(560px,calc(100vh-140px))] w-[min(370px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_1px_#b5b5b5]"> <div className="bg-[linear-gradient(to_bottom,#0a63bf,#0a8ad6)] px-6 py-5 text-center text-white"> <h3 className="text-2xl font-bold leading-[1.3]">Chat With Doctor</h3> <div className="mt-2 text-xl leading-[1.4]">Make Appointment</div> </div>
      <div className="flex-1 overflow-y-auto py-2">
        {msgs.map(function (m) {
          const mine = m.from === 'me';
          return (<div key={m.id} className={'m-[10px] flex items-start ' + (mine ? 'justify-end' : '')}>
          {!mine && avatar('left')}
          <div className={'flex min-w-0 flex-col ' + (mine ? 'items-end' : 'items-start')}>
            <p
              className={
                'max-w-[215px] rounded-[10px] p-[15px] text-left text-xl leading-[1.625] tracking-[0.00938em] ' +
                (mine ? 'bg-[#6fd3e5] text-[rgb(52,71,103)]' : 'bg-[#d4e9f2] text-[rgb(52,71,103)]')
              }
            >
              {m.text}
            </p>
            <span className="mt-[5px] block text-xs text-[#808080]">{m.time}</span>
          </div>
          {mine && avatar('right')}
        </div>
      );
    })}
    <div ref={bottomRef} />
  </div>

  <form
    onSubmit={send}
    className="flex items-center gap-3 border-t border-[rgb(222,226,230)] px-4 py-3"
  >
    <Smile size={26} className="text-[rgb(52,71,103)]" />
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type a message..."
      className="min-w-0 flex-1 border-0 bg-transparent text-xl outline-none placeholder:text-[rgb(173,181,189)]"
    />
    <button
      type="submit"
      aria-label="send"
      className="cursor-pointer border-0 bg-transparent p-0 text-[#35cce6]"
    >
      <Send size={24} />
    </button>
  </form>
</div>
)}

<button
type="button"
aria-label={open ? 'Close chat' : 'Open chat'}
onClick={toggle}
className="fixed right-0 bottom-0 z-50 m-5 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-0 bg-[#35cce6] p-0 text-white shadow-[0_2px_10px_1px_#b5b5b5]"
>
{!open && unread > 0 && (
  <span className="absolute -top-2.5 -right-[5px] h-[25px] w-[25px] rounded-full bg-red-500 text-center text-sm leading-[25px] text-white">
    {unread}
  </span>
)}
{open ? <X size={30} strokeWidth={2.5} /> : <ChatIcon />}
</button>
</>
); }
/* ---------- مرحله ۱: Appointment Details ---------- */

function StepOne({ doctor, visit, setVisit, date, setDate, isNew, setIsNew, onNext }) { const visitLabel = visit === 'video' ? 'Video Visit' : 'Office Visit';

const titleCls = 'm-0 text-2xl font-medium leading-[1.375] tracking-[0.00735em] text-[rgb(203,12,159)] ';
const descCls = 'm-0 text-base font-normal leading-[1.6] tracking-[0.01071em] text-[rgb(52,71,103)] ';
const tabCls = 'relative z-10 flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-transparent p-1 text-base tracking-[0.02857em] ' + NAVY;
return ( <> <div className="-mt-4 -ml-4 flex w-[calc(100%+16px)] flex-wrap"> {/* چوکات چپ: فرم */} <div className="w-full pt-4 pl-4 lg:mb-24 lg:w-7/12"> <div className={CARD + ' relative min-w-0 overflow-hidden p-6 lg:pl-12'}><h4 className={titleCls}>Schedule an Appointment</h4> <p className={'text-xl leading-[1.625] tracking-[0.00938em] ' + NAVY}> Are you new to this doctor </p>
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
              'absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-lg bg-white shadow-[rgb(221,221,221)_0px_1px_5px_1px] transition-all duration-500 ease-in-out ' +
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
        <div className="mt-1">
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
            className="text-[#0000ee] no-underline visited:text-[#551a8b]"
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
                ? 'border-[rgb(203,12,159)] bg-[rgb(203,12,159)]'
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
          <span className={'ml-1 translate-y-px text-sm font-bold leading-none tracking-[0.00938em] ' + NAVY}>
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
            <span className="mr-4 flex w-[70px] shrink-0 items-center justify-center" aria-hidden="true">
              <span className="h-8 w-8 rounded-full bg-[#eb001b]" />
              <span className="-ml-3.5 h-8 w-8 rounded-full bg-[#f79e1b] opacity-90" />
            </span>
            <span className="min-w-0 flex-1">
              <span className={'block ' + H6 + NAVY}>Online Banking and Direct debit</span>
              <span className={'block text-xs leading-[15px] tracking-[0.39996px] ' + NAVY}>
                Free of charges
              </span>
            </span>
            <span
              className={
                'ml-4 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ' +
                (payment === 'card' ? RADIO_ON : 'border-[rgb(222,226,230)] bg-white')
              }
            >
              {payment === 'card' && <span className="h-2 w-2 rounded-full bg-white" />}
            </span>
          </button>
          <button type="button" className={optionCls}>
            <span
              className="mr-4 flex w-[70px] shrink-0 items-center justify-center text-4xl font-bold italic text-[#003087]"
              aria-hidden="true"
            >
              P
            </span>
            <span className="min-w-0 flex-1">
              <span className={'block ' + H6 + NAVY}>Online Banking and Direct debit</span>
              <span className={'block text-xs leading-[15px] tracking-[0.39996px] ' + NAVY}>
                Free of charges
              </span>
            </span>
            <Pencil size={20} className={'ml-4 shrink-0 ' + NAVY} />
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
/* ---------- مرحله ۳: Appointment Scheduled (کد خود شما) ---------- */ function StepThree({ onBack, onSend }) { return ( <div> <div className="w-4/5"> <div className="mb-2"> <h4 className={'text-2xl font-normal leading-[1.375] tracking-[0.00735em] ' + NAVY}> Appointment Schedualed </h4> </div> </div>
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
/* ---------- صفحهٔ اصلی ---------- */ const EMPTY_FORM = { who: '', insurance: '', memberId: '', firstName: '', lastName: '', email: '', confirmEmail: '', phone: '', street: '', gender: '', phoneType: '', city: '', state: '', zip: '', reason: '', referring: '', cardHolder: '', cardNumber: '', startDate: '', endDate: '', cvv: '', agree: false, };
function MakeAppointment({ doctor, initialVisit = 'video' }) { const [step, setStep] = useState(0); const [isNew, setIsNew] = useState(''); const [visit, setVisit] = useState(initialVisit); const [date, setDate] = useState(new Date()); const [form, setForm] = useState(EMPTY_FORM);
useEffect( function () { window.scrollTo(0, 0); }, [step] );
const setValue = (key, value) => setForm((f) => ({ ...f, [key]: value })); const set = (key) => (e) => setValue(key, e.target.value);
return ( <div className="ap-page mt-6 pb-16 text-xl leading-[1.625] tracking-[0.00938em] text-[rgb(52,71,103)]" style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }} > <div className="flex h-[18.75rem] items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat px-6 pt-[58px] pb-6" style={{ backgroundImage: 'linear-gradient(310deg, rgba(121,40,202,0.6), rgba(255,0,128,0.6)), url(' + curved + ')', }} > <h2 className="text-center text-[1.75rem] leading-[1.3] font-medium tracking-[-0.00833em] text-white sm:text-[2.25rem]"> Scheduale Appointment </h2> </div>
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