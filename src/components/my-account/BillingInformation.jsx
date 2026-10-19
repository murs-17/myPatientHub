import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";

const jiggle = keyframes`
  0%   { transform: translateY(0); }
  35%  { transform: translateY(-2px); }
  60%  { transform: translateY(-0.5px); }
  80%  { transform: translateY(-1.5px); }
  100% { transform: translateY(-1px); }
`;

const baseBtn = {
  minWidth: 0,
  px: 1,
  py: 0.5,
  fontSize: "0.75rem",
  fontWeight: 700,
  lineHeight: 1.4,
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  backgroundColor: "transparent",
  boxShadow: "none",
  transition: "color 150ms ease-in, transform 150ms ease-in",
  "& .MuiButton-startIcon": { mr: 0.5, ml: 0 },
  "&:hover, &:focus-visible": {
    backgroundColor: "transparent",
    boxShadow: "none",
    transform: "translateY(-1px)",
  },
  "&:hover": { animation: `${jiggle} 400ms ease-out forwards` },
};

const deleteSx = {
  ...baseBtn,
  color: "#F44335",
  "&:hover, &:focus-visible": {
    ...baseBtn["&:hover, &:focus-visible"],
    color: "#B3261E",
  },
  "&:hover": { ...baseBtn["&:hover"], color: "#B3261E" },
};

const editSx = { ...baseBtn, color: "#344767" };

const icon = (name) => (
  <span className="material-icons-round" style={{ fontSize: 16, lineHeight: 1 }}>
    {name}
  </span>
);

const billings = [
  { name: "Oliver Liam", company: "Viking Burrito", email: "oliver@burrito.com", vat: "FRB1235476" },
  { name: "Lucas Harper", company: "Stone Tech Zone", email: "lucas@stone-tech.com", vat: "FRB1235476" },
  { name: "Ethan James", company: "Fiber Notion", email: "ethan@fiber.com", vat: "FRB1235476" },
];

function Field({ label, value }) {
  return (
    <p className="text-left text-[13px] leading-[1.7] text-[#7b809a]">
      {label}:&nbsp;&nbsp;
      <span className="break-words font-medium text-[#344767]">{value}</span>
    </p>
  );
}

function BillingInformation() {
  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white text-left font-['Roboto',Helvetica,Arial,sans-serif] shadow-[0_1.25rem_1.6875rem_rgba(0,0,0,0.05)]">
      {/* header */}
      <div className="px-4 pt-6">
        <h6 className="text-lg font-medium leading-[1.625] tracking-[0.0075em] text-[#344767]">
          Billing Information
        </h6>
      </div>

      {/* list */}
      <div className="flex flex-col gap-6 px-4 pb-4 pt-8">
        {billings.map((b) => (
          <div
            key={b.name}
            className="min-w-0 rounded-xl bg-[#f8f9fa] px-6 py-6 sm:px-6 sm:py-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <h6 className="min-w-0 text-base font-medium text-[#344767]">
                {b.name}
              </h6>

              <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                <Button disableRipple startIcon={icon("delete")} sx={deleteSx}>
                  Delete
                </Button>
                <Button disableRipple startIcon={icon("edit")} sx={editSx}>
                  Edit
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-0.5">
              <Field label="Company Name" value={b.company} />
              <Field label="Email Address" value={b.email} />
              <Field label="VAT Number" value={b.vat} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BillingInformation;
