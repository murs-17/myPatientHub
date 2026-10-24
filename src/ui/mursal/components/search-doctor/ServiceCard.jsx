import { ChevronDown } from 'lucide-react';
const cardClass = 'mb-[4px] min-w-0 overflow-hidden rounded-[4px] bg-white shadow-[0_2px_1px_-1px_rgba(0,0,0,0.2),0_1px_1px_0_rgba(0,0,0,0.14),0_1px_3px_0_rgba(0,0,0,0.12)]'; const cardButtonClass = 'flex min-h-[48px] w-full cursor-pointer items-center justify-between gap-[12px] border-0 bg-transparent px-[12px] text-left sm:px-[16px]';
function ServiceCard({ item, onOpen }) { return ( <div className={cardClass}> <button type="button" onClick={onOpen} className={cardButtonClass}>
   <div className="my-[12px] flex min-w-0 flex-1 flex-wrap items-center gap-x-[16px] gap-y-[8px]"> <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"> <img src={item.image} alt={item.title} className="h-full w-full object-contain" /> </div>
   <div className="min-w-[150px] flex-1">
        <h3 className="break-words text-[20px] font-[400] leading-[32.5px] tracking-[0.1876px] text-[rgba(0,0,0,0.87)]">
          {item.title}
        </h3>

        <p className="break-words text-[16px] font-[500] leading-[26px] tracking-[0.12px] text-[#344767]">
          {item.text}
        </p>
      </div>
    </div>

    <ChevronDown size={20} strokeWidth={2.5} className="shrink-0 text-[rgba(0,0,0,0.54)]" />
  </button>
</div>
); }
export default ServiceCard;