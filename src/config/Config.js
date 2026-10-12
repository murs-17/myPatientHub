import {
  CalendarDays,
  ClipboardPlus,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Store,
  UserRound,
  Users,
  Pill,
  Hospital,
} from "lucide-react";

export const mainMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Appointment",
    icon: CalendarDays,
    path: "/appointment",
  },
  {
    title: "Find Doctor",
    icon: ClipboardPlus,
    path: "/searchdoctor",
  },
  {
    title: "Find Clinic",
    icon: Hospital,
    path: "/findhospital",
  },
  {
    title: "Find Marketplace",
    icon: Store,
    path: "/marketplace",

  },
  {
    title: "Chat",
    icon: MessageSquare,
    path: "/chat",
    
  },
  {
    title: "Find Pharmacy",
    icon: Pill,
    path: "/findpharmacy",
  },
  {
    title: "My Dependents",
    icon: Users,
    path: "/dependents",
  },
  {
    title: "My Account",
    icon: UserRound,
    path: "/account",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
