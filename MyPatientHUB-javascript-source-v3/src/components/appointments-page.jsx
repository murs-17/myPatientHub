import { useState, useMemo, useEffect } from "react";
import {
  addMonths,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  parseISO,
} from "date-fns";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Tooltip,
  LabelList,
} from "recharts";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  CalendarSearch,
  List,
  MoreVertical,
  Download,
  CalendarDays,
  Clock,
  Check,
} from "lucide-react";
import { PatientShell } from "./patient-shell";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import doctor from "@/assets/doctor.jpg.asset.json";
import { appointmentVisitors } from "@/lib/appointment-visitors";
const initialEvents = [
  { id: "1", title: "Blood Bank Visit", date: "2022-04-03", type: "Eximination", color: "blue" },
  { id: "2", title: "Dr. Madiha Visit", date: "2022-04-04", type: "Consultation", color: "orange" },
  {
    id: "3",
    title: "DR. Shamsir Visit",
    date: "2022-04-05",
    type: "Routine Checkup",
    color: "red",
  },
  {
    id: "4",
    title: "Apptms DR. Ali Visit",
    date: "2022-04-09",
    type: "Consultation",
    color: "orange",
  },
  {
    id: "5",
    title: "Apptms DR. Ali Visit",
    date: "2022-04-10",
    type: "Consultation",
    color: "orange",
  },
  { id: "6", title: "Approved Aptms", date: "2022-04-12", type: "Consultation", color: "magenta" },
  { id: "7", title: "Lab Checkup", date: "2022-04-21", type: "Routine Checkup", color: "red" },
  { id: "8", title: "DR. Bilal Visit", date: "2022-04-25", type: "Emergency", color: "blue" },
  { id: "9", title: "DR. Ibrahim Visit", date: "2022-04-25", type: "Eximination", color: "green" },
];
const doctors = [
  { id: "mustafa", title: "Dr.Mustafa", type: "Emergency", date: "2022-04-05", color: "blue" },
  {
    id: "khirullah",
    title: "DR. KHIRULLAH",
    type: "consultaion",
    date: "2022-11-02",
    color: "orange",
  },
  { id: "bilal", title: "DR. Bilal", type: "Eximination", date: "2022-03-09", color: "green" },
];
const bars = [
  { month: "jan", Emergency: 44, Eximination: 13, Consultation: 11, "Routine Checkup": 21 },
  { month: "Feb.", Emergency: 55, Eximination: 23, Consultation: 17, "Routine Checkup": 7 },
  { month: "Mar.", Emergency: 41, Eximination: 20, Consultation: 15, "Routine Checkup": 25 },
  { month: "Apr.", Emergency: 67, Eximination: 8, Consultation: 15, "Routine Checkup": 13 },
  { month: "May", Emergency: 22, Eximination: 13, Consultation: 21, "Routine Checkup": 22 },
  { month: "Jun", Emergency: 43, Eximination: 27, Consultation: 14, "Routine Checkup": 8 },
];
const types = ["Emergency", "Eximination", "Consultation", "Routine Checkup"];
function Stat({ label, value, increase }) {
  return (
    <section className="surface stat-panel">
      <h2 className="text-xs font-semibold text-muted-foreground">{label}</h2>
      <div className="mt-1 text-xl font-bold">
        {value}
        <span className="ml-1 text-xs text-success">+{increase}</span>
      </div>
      <div className="stat-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={appointmentVisitors} margin={{ top: 3, right: 5, left: 0, bottom: 0 }}>
            <CartesianGrid
              vertical
              horizontal={false}
              stroke="var(--border)"
              strokeDasharray="5 5"
            />
            <XAxis dataKey="month" axisLine={false} tickLine={false} interval={0} />
            <YAxis
              domain={[20, 110]}
              ticks={[40, 80]}
              width={25}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                const row = payload?.[0]?.payload;
                return active && row ? (
                  <div className="rounded-md border border-border bg-card px-3 py-2 text-xs text-card-foreground shadow-sm">
                    <p className="mb-1 font-semibold">{row.fullMonth}</p>
                    <p>visitors: {row.visitors}</p>
                  </div>
                ) : null;
              }}
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="var(--cyan)"
              fill="var(--cyan)"
              fillOpacity={0.025}
              strokeWidth={2}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
function AppointmentList({ title, rows, onDetails, upcoming = false }) {
  const [period, setPeriod] = useState("Days");
  return (
    <section className="surface appointment-list">
      <h2 className="section-title">{title}</h2>
      {upcoming && (
        <div className="period-tabs">
          {["Days", "Months", "Years"].map((p) => (
            <Button
              key={p}
              variant="ghost"
              size="sm"
              className={period === p ? "selected" : ""}
              onClick={() => setPeriod(p)}
            >
              {p}
            </Button>
          ))}
        </div>
      )}
      {rows.map((row) => (
        <div className="doctor-row" key={row.id}>
          <img src={doctor.url} className="doctor-avatar" alt={row.title} />
          <div className="min-w-0 flex-1">
            <h3 className="text-xs font-semibold">{row.title}</h3>
            <p className="mt-1 text-[11px] text-muted-foreground">{row.type}</p>
          </div>
          <span className="max-w-20 text-right text-[9px] leading-relaxed">
            {format(
              parseISO(row.date),
              period === "Years" && upcoming
                ? "yyyy"
                : period === "Months" && upcoming
                  ? "MMMM yyyy"
                  : "EEEE, MMMM d",
            )}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-5 shrink-0"
            aria-label={`Details for ${row.title}`}
            onClick={() => onDetails(row)}
          >
            <MoreVertical />
          </Button>
        </div>
      ))}
    </section>
  );
}
export function AppointmentsPage() {
  const [month, setMonth] = useState(new Date(2022, 3, 1));
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState(initialEvents);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("mph-appointments");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed))
          setEvents((prev) => [
            ...prev,
            ...parsed.filter(
              (row) =>
                row &&
                typeof row.id === "string" &&
                row.id.startsWith("booking-") &&
                !prev.some((e) => e.id === row.id),
            ),
          ]);
      }
    } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(
        "mph-appointments",
        JSON.stringify(events.filter((e) => e.id.startsWith("booking-"))),
      );
    } catch {}
  }, [events, loaded]);
  const [booking, setBooking] = useState(false);
  const [selected, setSelected] = useState(null);
  const [saved, setSaved] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [type, setType] = useState("Consultation");
  const days = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfWeek(startOfMonth(month)),
        end: endOfWeek(endOfMonth(month)),
      }),
    [month],
  );
  const matches = (row) => `${row.title} ${row.type}`.toLowerCase().includes(search.toLowerCase());
  function submit(e) {
    e.preventDefault();
    const row = {
      id: `booking-${Date.now()}`,
      title: `${name} Visit`,
      date,
      type,
      color: "magenta",
      time,
    };
    setEvents([...events, row]);
    setMonth(startOfMonth(parseISO(date)));
    setBooking(false);
    setSaved(true);
    setName("");
    setDate("");
  }
  function exportChart() {
    const csv = [
      "Month,Emergency,Eximination,Consultation,Routine Checkup",
      ...bars.map(
        (b) =>
          `${b.month},${b.Emergency},${b.Eximination},${b.Consultation},${b["Routine Checkup"]}`,
      ),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "appointments.csv";
    a.click();
    URL.revokeObjectURL(url);
    setExportOpen(false);
  }
  return (
    <PatientShell page="Appointment" search={search} onSearch={setSearch}>
      <div className="appointment-tabs">
        <Button
          variant="ghost"
          className="bg-card shadow-sm px-8"
          onClick={() => setBooking(false)}
        >
          <CalendarSearch className="text-primary" />
          Appointments
        </Button>
        <Button
          variant="ghost"
          className="px-8"
          onClick={() => {
            setBooking(true);
            setSaved(false);
          }}
        >
          <List className="text-primary" />
          New Booking
        </Button>
      </div>
      {saved && (
        <div
          role="status"
          className="mb-4 flex items-center gap-2 rounded-md bg-accent p-3 text-sm"
        >
          <Check size={16} />
          Appointment added to this session.
          <Button variant="ghost" size="sm" className="ml-auto" onClick={() => setSaved(false)}>
            Dismiss
          </Button>
        </div>
      )}
      <div className="summary-grid">
        <Stat label="Procedures Taken" value={30} increase={3} />
        <Stat label="Treatments Taken" value={12} increase={1} />
        <Button
          variant="outline"
          className="surface h-full min-h-32 flex-col gap-3 whitespace-normal text-calendar-control"
          onClick={() => {
            setBooking(true);
            setSaved(false);
          }}
        >
          <Plus className="size-6" />
          <span>New Appointment</span>
        </Button>
      </div>
      <div className="appointment-layout">
        <section className="surface calendar-panel" aria-label="Appointment calendar">
          <div className="calendar-top">
            <h2 className="text-lg font-bold">{format(month, "MMMM yyyy")}</h2>
            <div className="flex gap-2">
              <Button
                variant="calendar"
                size="sm"
                onClick={() => setMonth(startOfMonth(new Date()))}
              >
                today
              </Button>
              <div className="flex">
                <Button
                  variant="calendar"
                  size="icon"
                  className="h-8 w-7 rounded-r-none"
                  aria-label="Previous month"
                  onClick={() => setMonth(addMonths(month, -1))}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="calendar"
                  size="icon"
                  className="h-8 w-7 rounded-l-none"
                  aria-label="Next month"
                  onClick={() => setMonth(addMonths(month, 1))}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="calendar-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="week-label">
                {day}
              </div>
            ))}
          </div>
          <div className="calendar-grid">
            {days.map((day) => (
              <div
                key={day.toISOString()}
                className={`calendar-day ${isSameMonth(day, month) ? "" : "outside"} ${isSameDay(day, new Date()) ? "is-today" : ""}`}
              >
                <span className="day-number">{format(day, "d")}</span>
                {events
                  .filter((row) => row.date === format(day, "yyyy-MM-dd") && matches(row))
                  .map((row) => (
                    <Button
                      key={row.id}
                      variant="ghost"
                      title={row.title}
                      className={`event-chip event-${row.color}`}
                      onClick={() => setSelected(row)}
                    >
                      {row.title}
                    </Button>
                  ))}
              </div>
            ))}
          </div>
        </section>
        <div className="appointment-side">
          <section className="surface p-4">
            <div className="mb-3 flex justify-between items-center">
              <h2 className="section-title">Appointment</h2>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  aria-label="Chart export menu"
                  onClick={() => setExportOpen(!exportOpen)}
                >
                  <MenuIcon />
                </Button>
                {exportOpen && (
                  <div className="absolute right-0 z-10 w-40 rounded-md border bg-card p-2 shadow-sm">
                    <Button variant="ghost" size="sm" onClick={exportChart}>
                      <Download />
                      Download CSV
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="bar-chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={bars}
                  barSize={32}
                  margin={{ top: 3, right: 0, left: -24, bottom: 0 }}
                >
                  <CartesianGrid vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="month" tickLine={false} axisLine={{ stroke: "var(--border)" }} />
                  <YAxis
                    domain={[0, 120]}
                    ticks={[0, 30, 60, 90, 120]}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    shared={false}
                    cursor={{ fill: "transparent" }}
                    content={({ active, payload, label }) => {
                      const p = payload?.[0];
                      return active && p ? (
                        <div className="rounded-md border border-border bg-card px-3 py-2 text-xs text-card-foreground shadow-sm">
                          <p className="mb-1 font-semibold">{label ?? p.payload?.month}</p>
                          <p className="flex items-center gap-1.5">
                            <span
                              className="h-2.5 w-2.5 rounded-sm"
                              style={{ background: p.fill }}
                            />
                            {p.name}: {p.value}
                          </p>
                        </div>
                      ) : null;
                    }}
                  />
                  {types.map((t, i) => (
                    <Bar
                      key={t}
                      dataKey={t}
                      stackId="a"
                      fill={`var(--chart-${i + 1})`}
                      radius={i === 3 ? [6, 6, 0, 0] : 0}
                      isAnimationActive={false}
                    >
                      <LabelList
                        dataKey={t}
                        position="center"
                        fill="var(--primary-foreground)"
                        fontSize={9}
                        fontWeight={700}
                      />
                    </Bar>
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[9px]">
              {types.map((t, i) => (
                <span key={t} className="flex items-center gap-1">
                  <span
                    className={`h-2.5 w-2.5 rounded-sm ${["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"][i]}`}
                  />
                  {t}
                </span>
              ))}
            </div>
          </section>
          <AppointmentList
            title="Previous Appointments"
            rows={doctors.filter(matches)}
            onDetails={setSelected}
          />
          <AppointmentList
            title="Up Coming Appointments"
            upcoming
            rows={[...doctors, ...events.filter((e) => e.id.startsWith("booking-"))].filter(
              matches,
            )}
            onDetails={setSelected}
          />
        </div>
      </div>
      <Dialog open={booking} onOpenChange={setBooking}>
        <DialogContent>
          <DialogTitle>New Appointment</DialogTitle>
          <DialogDescription>Appointment details</DialogDescription>
          <form onSubmit={submit} className="grid gap-4">
            <label className="grid gap-2 text-xs font-semibold">
              Doctor
              <input
                required
                placeholder="Doctor name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="grid gap-2 text-xs font-semibold">
                Date
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold">
                Time
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </label>
            </div>
            <label className="grid gap-2 text-xs font-semibold">
              Appointment type
              <select value={type} onChange={(e) => setType(e.target.value)}>
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <div className="mt-2 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setBooking(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="brand">
                Add Appointment
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent>
          <DialogTitle>{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.type}</DialogDescription>
          {selected && (
            <>
              <div className="flex gap-3 items-center border-y py-4">
                <img src={doctor.url} alt="Doctor" className="doctor-avatar" />
                <div>
                  <p className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    {format(parseISO(selected.date), "EEEE, MMMM d, yyyy")}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <Clock size={15} />
                    {selected.time ?? "09:00"}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                {events.some((e) => e.id === selected.id) && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEvents(events.filter((e) => e.id !== selected.id));
                      setSelected(null);
                    }}
                  >
                    Cancel appointment
                  </Button>
                )}
                <Button variant="brand" onClick={() => setSelected(null)}>
                  Done
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PatientShell>
  );
}
function MenuIcon() {
  return <List size={14} />;
}
