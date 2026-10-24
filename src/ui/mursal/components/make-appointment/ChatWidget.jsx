import { useEffect, useRef, useState } from 'react'; import { Smile, X } from 'lucide-react';
 import { nowTime } from './shared';
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
/* ---------- چت‌باکس (فقط صفحهٔ دوم) ---------- */ const WELCOME = 'Welcome to this awesome chat!'; const CHAT_FONT = { fontFamily: 'Roboto, Helvetica, Arial, sans-serif' };
function ChatWidget({ doctor }) { const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
   const [text, setText] = useState(''); const [unread, setUnread] = useState(1); const [msgs, setMsgs] = useState(function () { return [{ id: 1, from: 'doctor', text: WELCOME, time: nowTime() }]; }); const bottomRef = useRef(null);
useEffect( function () { if  (shown && bottomRef.current) { bottomRef.current.scrollIntoView({ block: 'nearest' }); } }, [msgs, shown] );
function toggle() {
  setUnread(0);
  if (!open) {
    setShown(true);
    setOpen(true);
  } else {
    setOpen(false);
    setTimeout(function () {
      setShown(false);
    }, 220);
  }
}
function send(e) { e.preventDefault(); if (!text.trim()) return; setMsgs((m) => [...m, { id: Date.now(), from: 'me', text: text.trim(), time: nowTime() }]); setText(''); }
const avatar = (side) => doctor.photo ? ( <img src={doctor.photo} alt="" className={ 'h-10 w-10 shrink-0 rounded-full object-cover object-top ' + (side === 'left' ? 'mr-[10px]' : 'ml-[10px]') } /> ) : null;
return ( <>  {shown && (<div
  style={{
    ...CHAT_FONT,
    transformOrigin: 'bottom right',
    animation: (open ? 'fdChatIn 0.25s ease-out' : 'fdChatOut 0.2s ease-in') + ' both',
  }}
className="fixed right-5 bottom-[100px] z-50 flex w-[372px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_2px_10px_1px_#b5b5b5]"
> {/* هدر: ارتفاع ۱۴۱.۵ ، عنوان ۲۴px بولد ، زیرعنوان ۲۰px */} <div className="flex flex-col py-5 text-center text-white" style={{ backgroundColor: '#35cce6' }}> <h4 className="m-0 py-[15px] text-2xl font-bold leading-[39px] tracking-[0.1876px] text-white"> Chat With Doctor </h4> <span className="block text-xl font-normal leading-[32.5px] tracking-[0.1876px] text-white"> Make Appointment </span> </div>
      {/* پیام‌ها */}
      <div className="h-[50vh] max-h-[450px] overflow-y-scroll bg-white pt-[10px]">
        {msgs.map(function (m) {
          const mine = m.from === 'me';
          return (
            <div key={m.id} className={'m-[10px] flex items-start ' + (mine ? 'justify-end' : '')}>
              {!mine && avatar('left')}
              <div className={'flex min-w-0 flex-col ' + (mine ? 'items-end' : 'items-start')}>
                <p
                  className={
                    'm-0 max-w-[215px] whitespace-pre-wrap rounded-[10px] p-[15px] text-left text-lg leading-[32.5px] tracking-[0.1876px] text-[rgb(52,71,103)] ' +
                    (mine ? 'bg-[#a3eaf7]' : 'bg-[#f4f7f9]')
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

      {/* نوار پایین: رنگ #f4f7f9 ، ارتفاع ۶۰ ، باکس سفید ۴۰px */}
      <form
        onSubmit={send}
        className="relative flex h-[60px] max-h-[95px] min-h-[45px] items-end bg-[#f4f7f9] p-[10px] text-xl leading-[32.5px] tracking-[0.1876px] text-[rgb(52,71,103)]"
      >
        <button
          type="button"
          aria-label="emoji"
          className="m-0 mr-[10px] cursor-pointer border-0 bg-transparent p-0"
        >
          <img src="/chat-emoji.
svg" alt="" className="block h-6 w-6" />
</button>
<textarea
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Type a message..."
  rows={1}
  className="m-0 block h-[45px] w-[calc(100%-75px)] resize-none overflow-y-auto rounded-[5px] border-0 bg-white px-[5px] py-[10px] text-lg font-normal leading-[1.625] tracking-[0.00938em] text-[rgb(52,71,103)] outline-none placeholder:text-[rgb(128,128,128)]"
  
/>

<button
  type="submit"
  aria-label="send"
  className={
    'm-0 ml-0 h-[25px] cursor-pointer border-0 bg-transparent p-0 ' +
    (text.trim() ? 'text-[#35cce6]' : 'text-[#b8c4d6]')
  }
>
  <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" className="block">
    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
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
<span key={open ? 'x' : 'chat'} className="fd-chat-spin flex">
      {open ? <X size={30} strokeWidth={2.5} /> : <ChatIcon />}
    </span>
</button>
</>
); }
export default ChatWidget;