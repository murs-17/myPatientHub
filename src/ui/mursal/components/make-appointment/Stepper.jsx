import { STEPS } from './shared';
function Stepper({ step }) { return ( <div className="mt-5 mb-16 flex items-start px-3"> {STEPS.map(function (label, i) { const reached = i <= step; /* فعلی: rgb(52,71,103) | گذشته: rgb(131,146,171) | آینده: rgb(222,226,230) */ const labelColor = i === step ? 'rgb(52,71,103)' : i < step ? 'rgb(131,146,171)' : 'rgb(222,226,230)';
    return (
      <div key={label} className="relative flex flex-1 flex-col items-center px-2">
        {i > 0 && (
          <span
            className={
              'absolute top-[6px] right-1/2 left-[-50%] ' +
              (i <= step
                ? 'border-t-2 border-[rgb(52,71,103)]'
                : 'border-t border-[rgb(190,200,215)]')
            }
          />
        )}

        {/* حلقه: ۱۳ پیکسل + حلقهٔ بیرونی ۲ پیکسل (box-shadow) */}
        <span className="relative z-10 flex h-[13px] items-center justify-center">
          <span
            className={
              'block h-[13px] w-[13px] rounded-full ' +
              (reached
                ? 'bg-[rgb(52,71,103)] shadow-[0_0_0_2px_rgb(52,71,103)]'
                : 'bg-white shadow-[0_0_0_2px_rgb(176,190,214)]')
            }
          />
        </span>

        <span
          className="mt-2 text-center text-base font-normal leading-[25.6px] tracking-[0.17136px]"
          style={{ color: labelColor }}
        >
          {label}
        </span>
      </div>
    );
  })}
</div>
); }
export default Stepper;