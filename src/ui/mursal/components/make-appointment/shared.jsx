
export const NAVY = 'ap-navy text-[rgb(52,71,103)]';
export const GRAY = 'ap-gray text-[rgb(103,116,142)]';
export const PINK = 'ap-pink text-[rgb(203,12,159)]';
export const RADIO_ON = 'border-[rgb(52,71,103)] bg-[rgb(52,71,103)]';
export const CARD = 'rounded-2xl bg-white shadow-[0_1.25rem_1.6875rem_0_rgba(0,0,0,0.05)]';

export const P20 = 'text-xl font-normal leading-[32.5px] tracking-[0.1876px] ' + NAVY;
export const H6 = 'text-base font-medium leading-[26px] tracking-[0.12px] ';
export const P16 = 'text-base font-normal leading-[25.6px] tracking-[0.17136px] ';

export const INNER =
  'w-full min-w-0 border-0 bg-transparent p-0 text-inherit outline-none placeholder:text-[rgb(173,181,189)]';

/* عرض ستون‌ها در فرم */
export const W2 = 'md:w-1/2';
export const W3 = 'md:w-1/3';

export const STEPS = ['Appointment Details', 'Patient Information', 'Finalize Appointment'];
export const WEEK = [['MO', 'N'], ['TUE'], ['WE', 'D'], ['THU'], ['FRI'], ['SAT'], ['SUN']];
export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const VIDEO_PATH =
  'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z';
export const PIN_PATH =
  'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z';

export function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatDate(d) {
  return (
    DAYS[d.getDay()] + ', ' + MONTHS[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' at 8:00'
  );
}

export function nowTime() {
  const n = new Date();
  return String(n.getHours()).padStart(2, '0') + ':' + String(n.getMinutes()).padStart(2, '0');
}

export function Icon({ path, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  );
}