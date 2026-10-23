import { Monitor, ArrowRight } from "lucide-react";

const sessions = [
  {
    id: "current",
    device: "Bucharest 68.133.163.201",
    description: "Your current session",
    location: "EU",
    type: "desktop",
    active: true,
  },
  {
    id: "macos",
    device: "Chrome on macOS",
    description: "",
    location: "US",
    type: "desktop",
    active: false,
  },
  {
    id: "iphone",
    device: "Safari on iPhone",
    description: "",
    location: "US",
    type: "mobile",
    active: false,
  },
];

function Sessions() {
  const handleSeeMore = () => {
    document.getElementById("sessions")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="sessions"
      aria-labelledby="sessions-title"
      className="w-full min-w-0 scroll-mt-6"
    >
      <div
        className="w-full min-w-0 rounded-xl bg-white
          p-5 shadow-[0_1.25rem_1.6875rem_rgba(0,0,0,0.05)]
          sm:p-6"
      >
        {/* Header */}
        <div className="mb-5">
          <h2
            id="sessions-title"
            className="m-0 font-roboto text-lg
              font-semibold leading-6 text-[#344767]
              sm:text-xl"
          >
            Sessions
          </h2>

          <p
            className="mb-0 mt-3 font-roboto text-sm
              leading-6 text-[#7b809a] sm:text-base"
          >
            This is a list of devices that have logged into your account. Remove
            those that you do not recognize.
          </p>
        </div>

        {/* Session list */}
        <div className="w-full min-w-0">
          {sessions.map((session, index) => (
            <div
              key={session.id}
              className={`flex min-w-0 flex-col gap-3
                py-5 sm:flex-row sm:items-center
                sm:gap-5 ${
                  index !== sessions.length - 1
                    ? "border-b border-[#f0f2f5]"
                    : ""
                }`}
            >
              {/* Device icon */}
              <div
                className="flex shrink-0 items-center
                  justify-start sm:w-14 sm:justify-center"
              >
                {session.type === "mobile" ? (
                  <span
                    className="material-icons-round
                      text-[27px] leading-none
                      text-[#a0a7b4]"
                    aria-hidden="true"
                  >
                    phone_iphone
                  </span>
                ) : (
                  <Monitor
                    size={27}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="text-[#a0a7b4]"
                  />
                )}
              </div>

              {/* Device information */}
              <div className="min-w-0 flex-1">
                <p
                  className="m-0 break-words font-roboto
                    text-sm font-medium leading-6
                    text-[#52627a] sm:text-base"
                >
                  {session.device}
                </p>

                {session.description && (
                  <p
                    className="mb-0 mt-1 font-roboto
                      text-xs leading-5 text-[#7b809a]
                      sm:text-sm"
                  >
                    {session.description}
                  </p>
                )}
              </div>

              {/* Status, location and See more */}
              <div
                className="flex min-w-0 flex-wrap
                  items-center justify-between gap-3
                  sm:ml-auto sm:flex-nowrap
                  sm:justify-end sm:gap-4"
              >
                {session.active && (
                  <span
                    className="inline-flex shrink-0
                      items-center rounded-md
                      bg-[#d9f8b4] px-2.5 py-1
                      font-roboto text-[11px]
                      font-bold leading-4 text-[#65a30d]"
                  >
                    ACTIVE
                  </span>
                )}

                <span
                  className="font-roboto text-sm
                    leading-5 text-[#7b809a]"
                >
                  {session.location}
                </span>

                <button
                  type="button"
                  onClick={handleSeeMore}
                  className="group inline-flex shrink-0
                    items-center gap-1.5 border-0
                    bg-transparent p-0 font-roboto
                    text-sm font-medium leading-6
                    text-[#4dbdc7] transition-colors
                    duration-200 hover:text-[#289ca8]
                    focus-visible:rounded-sm
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#4dbdc7]"
                >
                  <span>See more</span>

                  <ArrowRight
                    size={17}
                    strokeWidth={2.5}
                    aria-hidden="true"
                    className="transition-transform
                      duration-300 ease-out
                      group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sessions;
