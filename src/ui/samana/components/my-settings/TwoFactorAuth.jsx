import { useState } from "react";

const initialSettings = [
  {
    id: "security-keys",
    label: "Security keys",
    value: "No Security keys",
    action: "ADD",
  },
  {
    id: "sms-number",
    label: "SMS number",
    value: "+3012374423",
    action: "EDIT",
  },
  {
    id: "authenticator-app",
    label: "Authenticator app",
    value: "Not Configured",
    action: "SET UP",
  },
];

function TwoFactorAuthentication() {
  const [clickedButtons, setClickedButtons] = useState({});

  const handleActionClick = (id) => {
    setClickedButtons((previous) => ({
      ...previous,
      [id]: true,
    }));
  };

  return (
    <section
      id="2fa"
      className="w-full min-w-0 rounded-xl bg-white p-5
        shadow-[0_1.25rem_1.6875rem_rgba(0,0,0,0.05)]
        sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-[#344767] sm:text-lg">
          Two-factor authentication
        </h2>

        <span
          className="shrink-0 rounded-md bg-[#b8f29b]
            px-2 py-1 text-[10px] font-semibold
            leading-none text-[#4d9b35] sm:text-xs"
        >
          ENABLED
        </span>
      </div>

      <div className="w-full">
        {initialSettings.map((setting, index) => {
          const isClicked = Boolean(clickedButtons[setting.id]);

          return (
            <div key={setting.id}>
              <div
                className="flex min-h-[66px] flex-col
                  justify-center gap-3 py-3
                  sm:flex-row sm:items-center
                  sm:justify-between sm:gap-5"
              >
                <p className="min-w-0 text-sm font-normal text-[#718096]">
                  {setting.label}
                </p>

                <div
                  className="flex min-w-0 items-center
                    justify-between gap-3 sm:justify-end sm:gap-4"
                >
                  <span className="truncate text-xs text-[#8392ab] sm:text-sm">
                    {setting.value}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleActionClick(setting.id)}
                    aria-pressed={isClicked}
                    className={[
                      "inline-flex min-h-[36px] min-w-[88px]",
                      "shrink-0 items-center justify-center",
                      "rounded-lg border-2 bg-white px-4 py-1.5",
                      "text-[11px] font-semibold leading-4",
                      "transition-[border-color,color,box-shadow,transform]",
                      "duration-500 ease-out",
                      "hover:-translate-y-[1px]",
                      "hover:border-[#344767] hover:text-[#344767]",
                      "hover:shadow-[0_2px_5px_rgba(52,71,103,0.08)]",
                      "focus-visible:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-[#2dcecc]/30",
                      "active:translate-y-0",
                      isClicked
                        ? "border-[#2dcecc] text-[#269eaa]"
                        : "border-[#d2d6da] text-[#344767]",
                    ].join(" ")}
                  >
                    {setting.action}
                  </button>
                </div>
              </div>

              {index < initialSettings.length - 1 && (
                <div className="h-px w-full bg-[#f0f2f5]" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TwoFactorAuthentication;
