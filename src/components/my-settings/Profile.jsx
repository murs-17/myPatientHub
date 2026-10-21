import profileImage from "../../assets/images/bruce-mars.45f6477957606abd2f24.jpg";
import { useState } from "react";

function Profile() {
  // false
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = () => {
    setIsVisible((previousState) => !previousState);
  };

  return (
    <section
      id="profile"
      aria-label="Profile"
      className="w-full min-w-0 scroll-mt-6"
    >
      <div
        className="flex w-full min-w-0 items-center
          justify-between gap-4 rounded-xl bg-white
          p-4 shadow-[0_1.25rem_1.6875rem_rgba(0,0,0,0.05)]
          sm:gap-6 sm:p-5 md:p-6"
      >
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <img
            src={profileImage}
            alt="Profile"
            className="h-[64px] w-[64px] shrink-0
    rounded-xl object-cover sm:h-[72px] sm:w-[72px]"
          />

          <div className="flex min-w-0 flex-col gap-1">
            <h2
              className="m-0 truncate font-roboto
                text-[18px] font-medium leading-6
                text-[#344767] sm:text-xl"
            >
              Azam Shah
            </h2>

            <span
              className="font-roboto text-sm
                font-normal leading-5 text-[#7b809a]"
            >
              Patient
            </span>
          </div>
        </div>

        <div
          className="flex shrink-0 items-center
            justify-end gap-3"
        >
          <span
            id="profile-visibility-label"
            className="hidden font-roboto text-xs
              font-medium leading-4 text-[#7b809a]
              sm:inline"
          >
            {isVisible ? "Switch to invisible" : "Switch to visible"}
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isVisible}
            aria-label={
              isVisible
                ? "Switch profile to invisible"
                : "Switch profile to visible"
            }
            aria-labelledby="profile-visibility-label"
            onClick={handleVisibilityChange}
            className={`relative inline-flex h-[22px] w-[40px]
              shrink-0 cursor-pointer items-center rounded-full
              border-0 p-[3px] transition-colors duration-200
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#344767]
              ${isVisible ? "bg-[#344767]" : "bg-[#d9dce3]"}`}
          >
            <span
              className={`block h-4 w-4 rounded-full
                bg-white shadow-sm transition-transform
                duration-200 ${
                  isVisible ? "translate-x-[18px]" : "translate-x-0"
                }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
