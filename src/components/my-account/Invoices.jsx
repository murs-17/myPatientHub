import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";

const jiggle = keyframes`
  0%   { transform: translateX(0); }
  25%  { transform: translateX(-1.5px); }
  50%  { transform: translateX(1.5px); }
  75%  { transform: translateX(-1px); }
  100% { transform: translateX(0); }
`;

const invoices = [
  { date: "March, 01, 2020", id: "#MS-415646", amount: "$180" },
  { date: "February, 10, 2021", id: "#RV-126749", amount: "$250" },
  { date: "April, 05, 2020", id: "#QW-103578", amount: "$120" },
  { date: "June, 25, 2019", id: "#MS-415646", amount: "$180" },
  { date: "March, 01, 2019", id: "#AR-803481", amount: "$300" },
];

function Invoices() {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-2xl bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-2">
        <h3 className="text-base font-semibold leading-6 text-[#344767]">
          Invoices
        </h3>

        <Button
          variant="outlined"
          size="small"
          disableRipple
          sx={{
            fontSize: 12,
            fontWeight: 700,
            borderRadius: "8px",
            px: 4.5,
            py: 1,
            minWidth: 0,
            lineHeight: 1.6,
            color: "#1AB7FF",
            borderColor: "#1AB7FF",
            backgroundColor: "transparent",
            boxShadow: "none",
            transition: "all 250ms ease",

            "&.MuiButton-outlined:hover, &.MuiButton-outlined:focus": {
              color: "#1AB7FF",
              borderColor: "rgba(26, 183, 255, 0.55)",
              backgroundColor: "transparent",
              transform: "translateY(-2px)",
              boxShadow: "none",
            },

            "&.MuiButton-outlined:hover": {
              animation: "none",
            },
          }}
        >
          View All
        </Button>
      </div>

      {/* Invoice list */}
      <ul className="mt-5 flex min-h-0 flex-1 flex-col justify-between gap-3">
        {invoices.map((item) => (
          <li
            key={item.id + item.date}
            className="flex items-center justify-between gap-2"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[#344767]">
                {item.date}
              </p>

              <p className="text-xs text-[#7b809a]">{item.id}</p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="text-sm text-[#7b809a]">{item.amount}</span>

              <span className="flex items-center gap-1 text-xs font-bold text-[#344767]">
                <span className="material-icons-round text-[18px] leading-none">
                  picture_as_pdf
                </span>
                PDF
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Invoices;
