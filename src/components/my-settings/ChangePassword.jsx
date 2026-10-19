import { useState } from "react";

const fields = [
  {
    id: "current-password",
    name: "currentPassword",
    label: "Current Password",
    placeholder: "Current Password",
    autoComplete: "current-password",
  },
  {
    id: "new-password",
    name: "newPassword",
    label: "New Password",
    placeholder: "New Password",
    autoComplete: "new-password",
  },
  {
    id: "confirm-password",
    name: "confirmPassword",
    label: "Confirm New Password",
    placeholder: "Confirm Password",
    autoComplete: "new-password",
  },
];

const labelClass =
  "mb-[6px] block font-roboto text-[12px] font-semibold leading-4 text-[#344767]";

const inputClass =
  "h-[38px] w-full rounded-[6px] border border-[#d2d6da] bg-white px-3 font-roboto text-[13px] leading-5 text-[#344767] outline-none placeholder:text-[#a0a7b4] transition-all duration-200 focus:border-[#26b6c8] focus:ring-[3px] focus:ring-[#26b6c8]/30";

function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const updateField = (name, value) => {
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(
    form.newPassword
  );

  const hasMinimumLength = form.newPassword.length >= 6;
  const hasNumber = /\d/.test(form.newPassword);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.currentPassword ||
      !form.newPassword ||
      !form.confirmPassword
    ) {
      setMessageType("error");
      setMessage("Please fill in all password fields.");
      return;
    }

    if (
      !hasMinimumLength ||
      !hasSpecialCharacter ||
      !hasNumber
    ) {
      setMessageType("error");
      setMessage(
        "Your new password must meet all the requirements below."
      );
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setMessageType("error");
      setMessage("The new passwords do not match.");
      return;
    }

    if (form.currentPassword === form.newPassword) {
      setMessageType("error");
      setMessage(
        "Your new password must differ from your current password."
      );
      return;
    }

    setMessageType("success");
    setMessage(
      "Validation successful. Connect your password-update API to save the changes."
    );
  };

  return (
    <section
      id="change-password"
      aria-labelledby="change-password-title"
      className="w-full min-w-0 scroll-mt-6 rounded-xl bg-white p-4 shadow-[0_12px_27px_rgba(0,0,0,0.06)] sm:p-5 md:p-6"
    >
      <h2
        id="change-password-title"
        className="mb-5 font-roboto text-[17px] font-semibold leading-6 text-[#344767] sm:text-lg"
      >
        Change Password
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex w-full min-w-0 flex-col gap-5"
      >
        {fields.map((field) => (
          <div key={field.id} className="w-full min-w-0">
            <label
              htmlFor={field.id}
              className={labelClass}
            >
              {field.label}
            </label>

            <input
              id={field.id}
              name={field.name}
              type="password"
              autoComplete={field.autoComplete}
              value={form[field.name]}
              placeholder={field.placeholder}
              onChange={(event) =>
                updateField(field.name, event.target.value)
              }
              className={inputClass}
            />
          </div>
        ))}

        <div className="mt-6 w-full min-w-0">
          <h3 className="mb-2 font-roboto text-[17px] font-semibold leading-6 text-[#344767] sm:text-lg">
            Password requirements
          </h3>

          <p className="mb-2 font-roboto text-[13px] leading-5 text-[#7b809a] sm:text-sm">
            Please follow this guide for a strong password
          </p>

          <ul className="m-0 list-none space-y-1 pl-0 font-roboto text-[12px] leading-[18px] text-[#7b809a] sm:text-[13px]">
            <li className="flex items-start gap-2">
              <span className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#526078]" />
              <span className={form.newPassword && hasSpecialCharacter ? "text-emerald-600" : ""}>
                One special character
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#526078]" />
              <span className={form.newPassword && hasMinimumLength ? "text-emerald-600" : ""}>
                Min 6 characters
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#526078]" />
              <span className={form.newPassword && hasNumber ? "text-emerald-600" : ""}>
                One number (2 are recommended)
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#526078]" />
              <span>Change it often</span>
            </li>
          </ul>
        </div>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm leading-5 ${
              messageType === "success"
                ? "text-emerald-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <div className="flex w-full justify-end pt-1">
          <button
            type="submit"
            className="min-h-[38px] w-full rounded-[7px] bg-[#252b50] px-7 py-2 font-roboto text-[11px] font-bold leading-4 text-white shadow-[0_4px_10px_rgba(37,43,80,0.18)] transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:scale-[1.01] hover:bg-[#30385f] hover:shadow-[0_5px_12px_rgba(37,43,80,0.20)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ce4ed] sm:w-auto"
          >
            UPDATE PASSWORD
          </button>
        </div>
      </form>
    </section>
  );
}

export default ChangePassword;