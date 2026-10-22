import { useEffect, useId, useRef, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
const years = Array.from({ length: 122 }, (_, i) => String(1900 + i));

const genders = ["Male", "Female"];
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const labelClass =
  "mb-[6px] block text-[12px] font-semibold leading-[16px] text-[#344767]";

const inputClass =
  "h-[38px] w-full min-w-0 rounded-[6px] border border-[#d2d6da] bg-white px-3 font-roboto text-[13px] text-[#344767] outline-none placeholder:text-[#a0a7b4] transition-[border-color,box-shadow] duration-150 focus:border-[#8ce4ed] focus:ring-2 focus:ring-[#b5f0f4]/70";

function ChevronIcon({ open = false }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      className={`shrink-0 transition-transform duration-150 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NumberArrow({ direction }) {
  return (
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d={direction === "up" ? "m4 10 4-4 4 4" : "m4 6 4 4 4-4"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
  placeholder = "",
  scrollBoth = false,
}) {
  const [open, setOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const selectedRef = useRef(null);
  const generatedId = useId();
  const menuId = `menu-${generatedId}`;

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
        setHoveredOption(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setHoveredOption(null);
        buttonRef.current?.focus();
      }
    };

    selectedRef.current?.scrollIntoView({ block: "nearest" });

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative w-full min-w-0">
      {label && <label className={labelClass}>{label}</label>}

      <button
        ref={buttonRef}
        type="button"
        name={name}
        aria-label={label || placeholder || name}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          if (name === "blood-group") {
            return;
          }

          setOpen((previous) => !previous);
        }}
        className={`${inputClass} flex items-center justify-between gap-2 text-left ${
          open ? "border-[#8ce4ed] ring-2 ring-[#b5f0f4]/70" : ""
        }`}
      >
        <span
          className={`min-w-0 truncate ${
            value ? "text-[#344767]" : "text-[#a0a7b4]"
          }`}
        >
          {value || placeholder}
        </span>

        {name !== "blood-group" && (
          <span className="text-[#718096]">
            <ChevronIcon open={open} />
          </span>
        )}
      </button>

      {open && (
        <div
          id={menuId}
          role="listbox"
          aria-label={label || placeholder || name}
          onMouseLeave={() => setHoveredOption(null)}
          className={`absolute left-0 top-[calc(100%+5px)] z-50 max-h-[180px] rounded-[6px] border border-[#e5e7eb] bg-white p-[5px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] ${
            scrollBoth
              ? "w-full overflow-auto"
              : "w-full overflow-y-auto overflow-x-hidden"
          }`}
        >
          <div className={scrollBoth ? "min-w-[110%]" : "min-w-0"}>
            {options.map((option, index) => {
              const highlighted =
                hoveredOption !== null
                  ? hoveredOption === option
                  : value
                    ? value === option
                    : index === 0;

              return (
                <button
                  key={option}
                  ref={option === value ? selectedRef : null}
                  type="button"
                  role="option"
                  aria-selected={value === option}
                  onMouseEnter={() => setHoveredOption(option)}
                  onFocus={() => setHoveredOption(option)}
                  onBlur={() => setHoveredOption(null)}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                    setHoveredOption(null);
                    buttonRef.current?.focus();
                  }}
                  className={`group flex min-h-[30px] w-full items-center justify-between gap-2 rounded-[4px] px-2 text-left text-[12px] text-[#526078] transition-colors focus-visible:outline-2 focus-visible:outline-[#8ce4ed] ${
                    highlighted ? "bg-[#e9ecef]" : "bg-white"
                  }`}
                >
                  <span>{option}</span>

                  <span
                    className={`whitespace-nowrap text-[9px] text-[#a0a7b4] transition-opacity ${
                      hoveredOption === option ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Press to select
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function TextField({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  autoComplete = "off",
}) {
  return (
    <div className="w-full min-w-0">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass}
      />
    </div>
  );
}

function PhoneField({ value, onChange }) {
  const [focused, setFocused] = useState(false);

  const changeNumber = (amount) => {
    const current = value.trim();
    const number = current === "" ? 0 : Number(current);

    if (!Number.isFinite(number)) {
      onChange(String(amount));
      return;
    }

    onChange(String(number + amount));
  };

  return (
    <div className="w-full min-w-0">
      <label htmlFor="phone-number" className={labelClass}>
        Phone Number
      </label>

      <div className="relative">
        <input
          id="phone-number"
          name="phone"
          type="text"
          inputMode="tel"
          autoComplete="tel"
          value={value}
          placeholder="+40 735 631 620"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} pr-8 ${
            focused ? "border-[#8ce4ed] ring-2 ring-[#b5f0f4]/70" : ""
          }`}
        />

        {focused && (
          <div className="absolute right-[7px] top-1/2 flex -translate-y-1/2 flex-col">
            <button
              type="button"
              aria-label="Increase value"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => changeNumber(1)}
              className="flex h-[13px] w-5 items-center justify-center text-[#718096] hover:text-[#344767]"
            >
              <NumberArrow direction="up" />
            </button>

            <button
              type="button"
              aria-label="Decrease value"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => changeNumber(-1)}
              className="flex h-[13px] w-5 items-center justify-center text-[#718096] hover:text-[#344767]"
            >
              <NumberArrow direction="down" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function BasicInfo() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    month: "February",
    day: "1",
    year: "2021",
    email: "",
    bloodGroup: "A+",
    location: "",
    phone: "",
    height: "",
    weight: "",
  });

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <section
      id="basic-info"
      aria-labelledby="basic-info-title"
      className="w-full min-w-0 scroll-mt-6 rounded-xl bg-white p-4 shadow-[0_12px_27px_rgba(0,0,0,0.06)] sm:p-5 md:p-6"
    >
      <h2
        id="basic-info-title"
        className="mb-5 font-roboto text-[17px] font-semibold leading-6 text-[#344767]"
      >
        Basic Info
      </h2>

      <form
        className="grid w-full min-w-0 grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          label="First Name"
          name="firstName"
          autoComplete="off"
          placeholder="Alec"
          value={form.firstName}
          onChange={(value) => updateField("firstName", value)}
        />

        <TextField
          label="Last Name"
          name="lastName"
          autoComplete="off"
          placeholder="Thompson"
          value={form.lastName}
          onChange={(value) => updateField("lastName", value)}
        />

        <div className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-4 sm:col-span-2 sm:grid-cols-12">
          <div className="min-w-0 sm:col-span-4">
            <SelectField
              label="I'm"
              name="gender"
              value={form.gender}
              options={genders}
              onChange={(value) => updateField("gender", value)}
            />
          </div>

          <div className="min-w-0 sm:col-span-8">
            <label className={labelClass}>Birth Date</label>

            <div className="grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
              <SelectField
                name="birth-month"
                value={form.month}
                options={months}
                onChange={(value) => updateField("month", value)}
                scrollBoth
              />

              <SelectField
                name="birth-day"
                value={form.day}
                options={days}
                onChange={(value) => updateField("day", value)}
                scrollBoth
              />

              <SelectField
                name="birth-year"
                value={form.year}
                options={years}
                onChange={(value) => updateField("year", value)}
                scrollBoth
              />
            </div>
          </div>
        </div>

        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="example@email.com"
          value={form.email}
          onChange={(value) => updateField("email", value)}
        />

        <SelectField
          label="Blood Group"
          name="blood-group"
          value={form.bloodGroup}
          options={bloodGroups}
          onChange={(value) => updateField("bloodGroup", value)}
        />

        <TextField
          label="Your Location"
          name="location"
          autoComplete="off"
          placeholder="Sydney, A"
          value={form.location}
          onChange={(value) => updateField("location", value)}
        />

        <PhoneField
          value={form.phone}
          onChange={(value) => updateField("phone", value)}
        />

        <TextField
          label="Height"
          name="height"
          placeholder="Height"
          value={form.height}
          onChange={(value) => updateField("height", value)}
        />

        <TextField
          label="Weight"
          name="weight"
          placeholder="Weight"
          value={form.weight}
          onChange={(value) => updateField("weight", value)}
        />
      </form>
    </section>
  );
}

export default BasicInfo;
