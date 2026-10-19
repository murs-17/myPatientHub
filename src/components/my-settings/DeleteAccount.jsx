import { useState } from "react";

export default function DeleteAccount() {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deactivateClicked, setDeactivateClicked] = useState(false);
  const [deactivateHovered, setDeactivateHovered] = useState(false);
  const [deleteFlash, setDeleteFlash] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeactivateClick = () => {
    setDeactivateClicked(true);
  };

  const handleDeleteClick = () => {
    setDeleteFlash(false);

    requestAnimationFrame(() => {
      setDeleteFlash(true);
    });

    if (confirmDelete) {
      setShowConfirm(true);
    }
  };

  return (
    <section
      id="delete-account"
      className="w-full overflow-hidden rounded-2xl border-0
        bg-white text-[#344767]
        shadow-[0_0_2rem_0_rgba(136,152,170,0.15)]"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setDeactivateClicked(false);
        }
      }}
    >
      {/* Heading */}
      <div className="px-6 pt-6">
        <div className="mb-2">
          <h2 className="text-xl font-semibold leading-7 text-[#344767]">
            Delete Account
          </h2>
        </div>

        <p className="text-sm leading-6 text-[#8392ab]">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
      </div>

      {/* Confirmation switch */}
      <div
        className="flex flex-col gap-5 px-6 py-6
          sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-4">
          <button
            type="button"
            role="switch"
            aria-checked={confirmDelete}
            aria-label="Confirm account deletion"
            onClick={() => setConfirmDelete((previous) => !previous)}
            className={`relative inline-flex h-5 w-9 shrink-0
              items-center rounded-full
              transition-colors duration-200
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#344767]/30
              ${
                confirmDelete
                  ? "bg-[#344767]"
                  : "bg-[#cbd3df]"
              }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full
                bg-white shadow-sm
                transition-transform duration-200
                ${
                  confirmDelete
                    ? "translate-x-4"
                    : "translate-x-0.5"
                }`}
            />
          </button>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-[#344767]">
              Confirm
            </span>

            <span className="text-xs leading-5 text-[#8392ab]">
              I want to delete my account.
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Deactivate */}
          <button
            type="button"
            onClick={handleDeactivateClick}
            onMouseEnter={() => setDeactivateHovered(true)}
            onMouseLeave={() => setDeactivateHovered(false)}
            onBlur={() => {
              setDeactivateClicked(false);
            }}
            className={`rounded-lg border border-[#8392ab]
              bg-transparent px-4 py-2.5
              text-xs font-bold uppercase text-[#8392ab]
              transition-all duration-300 ease-out
              hover:scale-[1.015]
              hover:border-[#8392ab]
              hover:text-[#8392ab]
              hover:bg-[#8392ab]/[0.06]
              active:scale-[0.99]
              focus:outline-none
              ${
                deactivateClicked && !deactivateHovered
                  ? "ring-2 ring-[#aeb7c4] ring-offset-0"
                  : "ring-0"
              }`}
          >
            Deactivate
          </button>

          {/* Delete Account */}
          <button
            type="button"
            onClick={handleDeleteClick}
            onAnimationEnd={() => setDeleteFlash(false)}
            className={`rounded-lg border border-transparent
              bg-[linear-gradient(310deg,rgb(234,6,6),rgb(255,102,124))]
              px-4 py-2.5
              text-sm font-bold uppercase text-white
              transition-transform duration-300 ease-out
              hover:scale-[1.015]
              active:scale-[0.99]
              focus:outline-none
              ${
                deleteFlash
                  ? "delete-account-flash"
                  : ""
              }`}
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Confirmation feedback */}
      {showConfirm && (
        <div
          role="alert"
          className="mx-6 mb-6 rounded-lg
            border border-red-200 bg-red-50
            p-4 text-sm text-red-700"
        >
          Account deletion requested. Connect this action to your
          account-deletion API before using it in production.

          <button
            type="button"
            onClick={() => setShowConfirm(false)}
            className="ml-3 font-semibold underline"
          >
            Dismiss
          </button>
        </div>
      )}

      <style>{`
        .delete-account-flash {
          animation: coralFlash 140ms ease-out;
        }

        @keyframes coralFlash {
          0% {
            filter: brightness(1);
            box-shadow: 0 0 0 0 transparent;
          }

          35% {
            filter: brightness(1.18);
            box-shadow: 0 0 0 2px rgba(251, 99, 64, 0.22);
          }

          100% {
            filter: brightness(1);
            box-shadow: 0 0 0 0 transparent;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #delete-account button {
            transition-duration: 0ms !important;
            animation-duration: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}