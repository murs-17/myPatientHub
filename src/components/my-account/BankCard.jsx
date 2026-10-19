import mastercard from "../../assets/images/mastercard.27fca3e7637a9458fb64.png";
import cardBg from "../../assets/images/curved14.12c9ea54425c4f1bc1d7.jpg";

function BankCard() {
  return (
    <div className="relative aspect-[1.6/1] w-full max-w-[480px] overflow-hidden rounded-[28px] bg-[#1a2145] p-7 font-['Roboto',sans-serif] text-white shadow-[0_1.4375rem_2.8125rem_-0.6875rem_rgba(20,20,20,0.25)]">
      {/* background: گرادیان نیمه‌شفاف روی عکس (مطابق Inspect نمونه) */}
     <div
  className="absolute inset-0"
  style={{
    backgroundImage: `linear-gradient(310deg, rgba(20,23,39,0.8), rgba(58,65,111,0.8)), url(${cardBg})`,
    backgroundSize: "cover, 300%",
    backgroundPosition:  " center 10%, 20%",
    backgroundRepeat: "no-repeat",
  }}
/>

      <div className="relative flex h-full flex-col justify-between">
        {/* wifi icon */}
        <span className="material-icons-round w-fit text-[30px] leading-none text-white">
          wifi
        </span>

        {/* card number */}
        <p className="whitespace-nowrap text-[22px] font-medium">
          4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
        </p>

        {/* bottom row */}
        <div className="flex items-end justify-between">
          <div className="flex gap-10">
            <div className="shrink-0">
              <p className="whitespace-nowrap text-sm text-white/70">Card Holder</p>
              <p className="mt-1 whitespace-nowrap text-lg font-medium">Jack Peterson</p>
            </div>

            <div className="shrink-0">
              <p className="whitespace-nowrap text-sm text-white/70">Expires</p>
              <p className="mt-1 whitespace-nowrap text-lg font-medium">11/22</p>
            </div>
          </div>

          <img
            src={mastercard}
            alt="Mastercard"
            className="h-10 w-auto shrink-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default BankCard;
