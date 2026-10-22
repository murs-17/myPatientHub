import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";
import mastercard from "../../../../assets/images/mastercard.27fca3e7637a9458fb64.png";
import visa from "../../../../assets/images/visa.71c0d5e9e2aaee42e4c3.png";

const jiggle = keyframes`
  0%   { transform: translateY(0); }
  35%  { transform: translateY(-3px); }
  60%  { transform: translateY(-1px); }
  80%  { transform: translateY(-2.5px); }
  100% { transform: translateY(-2px); }
`;

const gradient = "linear-gradient(310deg, #141727, #3a416f)";
const shadow =
  "0 0.25rem 0.4375rem -0.0625rem rgba(0,0,0,0.11), 0 0.125rem 0.25rem -0.0625rem rgba(0,0,0,0.07)";

const MASK = "**** **** ****";

const cards = [
  { logo: mastercard, alt: "Mastercard", last4: "7852" },
  { logo: visa, alt: "Visa", last4: "5248" },
];

function PaymentMethod() {
  return (
    <div className="w-full min-w-0 rounded-2xl bg-white p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h6 className="text-base font-semibold text-[#344767]">
          Payment Method
        </h6>

        <Button
          disableRipple
          startIcon={
            <span
              className="material-icons-round"
              style={{ fontSize: 18, lineHeight: 1 }}
            >
              add
            </span>
          }
          sx={{
            flexShrink: 0,
            minWidth: 64,
            minHeight: "2.5rem",
            px: "1.5rem",
            py: "0.75rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            lineHeight: 1.4,
            letterSpacing: "0.02857em",
            textTransform: "uppercase",
            color: "#fff",
            borderRadius: "0.5rem",
            backgroundColor: "#141727",
            backgroundImage: gradient,
            boxShadow: shadow,
            transition: "all 150ms ease-in",
            "&:hover, &:focus-visible": {
              color: "#fff",
              backgroundColor: "#141727",
              backgroundImage: gradient,
              boxShadow: shadow,
              transform: "translateY(-2px)",
            },
            "&:hover": {
              animation: `${jiggle} 400ms ease-out forwards`,
            },
          }}
        >
          Add New Card
        </Button>
      </div>

      {/* cards */}
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4 sm:gap-6">
        {cards.map((c) => (
          <div
            key={c.last4}
            className="flex min-w-0 items-center gap-3 rounded-xl border border-[#e9ecef] bg-white px-4 py-3 sm:gap-4 sm:px-5"
          >
            <div className="flex h-7 w-11 shrink-0 items-center justify-center">
              <img
                src={c.logo}
                alt={c.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <p className="min-w-0 flex-1 truncate whitespace-nowrap text-sm font-medium text-[#344767]">
              {MASK}&nbsp;&nbsp;{c.last4}
            </p>

            {/* edit + tooltip */}
            <div className="group relative shrink-0">
              <button
                type="button"
                aria-label="Edit Card"
                className="flex items-center justify-center text-[#344767] focus:outline-none"
              >
                <span className="material-icons-round text-[18px] leading-none">
                  edit
                </span>
              </button>

              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#000000e6] px-3 py-1.5 text-xs font-medium text-[#d1d5db] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
              >
                Edit Card
                <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-[#000000e6]" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;


