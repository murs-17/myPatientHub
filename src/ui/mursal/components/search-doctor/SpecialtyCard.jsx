import { ChevronDown } from 'lucide-react';
const cardClass = 'mb-[4px] min-w-0 overflow-hidden rounded-[4px] bg-white shadow-[0_2px_1px_-1px_rgba(0,0,0,0.2),0_1px_1px_0_rgba(0,0,0,0.14),0_1px_3px_0_rgba(0,0,0,0.12)]'; const cardButtonClass = 'flex min-h-[48px] w-full cursor-pointer items-center justify-between gap-[12px] border-0 bg-transparent px-[16px] text-left';
function SpecialtyCard({ name, onOpen }) { return ( <div className={cardClass}> <button type="button" onClick={onOpen} className={cardButtonClass}> <span className="my-[12px] break-words text-[20px] font-[400] leading-[32.5px] tracking-[0.1876px] text-[rgba(0,0,0,0.87)]"> {name} </span>
    <ChevronDown size={20} strokeWidth={2.5} className="shrink-0 text-[rgba(0,0,0,0.54)]" />
  </button>
</div>
); }
export default SpecialtyCard;