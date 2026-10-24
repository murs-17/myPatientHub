import { useState } from 'react'; import { WEEK, MONTHS, sameDay } from './shared';
function Calendar({ value, onChange }) { const [view, setView] = useState(new Date(value.getFullYear(), value.getMonth(), 1));
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
              <span key={k} className="block">
                {part}
              </span>
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
      if (i % 7 >= 5) color = 'text-[#d10000]';

      const selected = sameDay(d, value);
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
export default Calendar;
