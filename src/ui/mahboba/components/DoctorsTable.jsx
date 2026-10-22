import doctorImage1 from "../../../assets/dashboard/doctor.jpg";
import doctorImage2 from "../../../assets/dashboard/doctor2.jpg";
import doctorImage3 from "../../../assets/dashboard/doctor3.jpg";
import doctorImage4 from "../../../assets/dashboard/doctor4.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr Ahmad",
    specialty: "Neurologist",
    fee: "RM 100",
    discount: "10%",
    image: doctorImage1,
  },
  {
    id: 2,
    name: "Dr Azam Shah",
    specialty: "Aurthopedic MD",
    fee: "RM 130",
    discount: "20%",
    image: doctorImage2,
  },
  {
    id: 3,
    name: "Dr Hanif",
    specialty: "Primary Care MD",
    fee: "RM 200",
    discount: "20%",
    image: doctorImage3,
  },
  {
    id: 4,
    name: "Dr Affan",
    specialty: "Cardilogist",
    fee: "RM 400",
    discount: "40%",
    image: doctorImage4,
  },
];

export default function DoctorsTable() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-700">Doctors</h2>

      {/* table*/}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[650px] border-collapse text-sm">
          <tbody>
            {doctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="border-b border-slate-100 last:border-b-0 transition "
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-11 w-11 shrink-0 "
                    />

                    <div>
                      <p className="mb-1 text-xs text-slate-400">Name:</p>

                      <p className="whitespace-nowrap font-semibold text-slate-700">
                        {doctor.name}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <div>
                    <p className="mb-1 text-xs text-slate-400">Speciality:</p>

                    <p className="whitespace-nowrap font-medium text-slate-700">
                      {doctor.specialty}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <div>
                    <p className="mb-1 text-xs text-slate-400">
                      Consultation Fee:
                    </p>

                    <p className="whitespace-nowrap font-medium text-slate-700">
                      {doctor.fee}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <div>
                    <p className="mb-1 text-xs text-slate-400">Discount:</p>

                    <p className="font-bold text-slate-600">
                      {doctor.discount}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
