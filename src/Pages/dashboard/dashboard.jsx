import DoctorsTable from "../../ui/mahboba/components/DoctorsTable";
import UpComingAppoinments from "../../ui/mahboba/components/UpComingAppoinments";
import AppointmentChart from "../../ui/mahboba/components/AppointmentChart";
import ChronicWellnessTracker from "../../ui/mahboba/components/ChronicWellnessTracker";
import HealthIndex from "../../ui/mahboba/components/HealthIndex";
import LocationMap from "../../ui/mahboba/components/LocationMap";
import PreviousAppointments from "../../ui/mahboba/components/PreviousAppoinments";
import PromotionByClinics from "../../ui/mahboba/components/PromotionByClinics";
import PromotionByPharmacies from "../../ui/mahboba/components/PromotionByPharmacies";
import SmartMarketUsageByApp from "../../ui/mahboba/components/SmartMarketUsageByApp";
import Symptoms from "../../ui/mahboba/components/Symptoms";

export default function Dashboard() {
  return (
    <div className="min-h-full bg-gray-100 p-1 sm:p-6">
      {/* Dashboard Title */}
      <h1 className="mb-8 text-2xl font-bold text-slate-700">
        Welcome To MyPatientHUB!
      </h1>

      {/* Promotion By Clinics Components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
        <PromotionByClinics />
        <PromotionByPharmacies />
        <SmartMarketUsageByApp />
        <div className="flex flex-col gap-0">
          <HealthIndex />
          <Symptoms />
        </div>
        <ChronicWellnessTracker />
        <AppointmentChart />
        <LocationMap />
        <div className="flex flex-col gap-4">
          <PreviousAppointments />
          <UpComingAppoinments />
        </div>
      </div>
      <div className=" my-10">
        <DoctorsTable />
      </div>
    </div>
  );
}
