import RentCard from "../components/rent/RentCard";
import PaymentHistory from "../components/rent/PaymentHistory";
import { rentData } from "../data/rentData";

function Rent() {
  const paidMonths = rentData.history.filter(
    (payment) => payment.status === "Paid",
  ).length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Rent Management</h1>

        <p className="text-slate-500 mt-2">
          Track your hostel rent and payment history.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-600 text-white rounded-2xl p-6">
          <p className="text-blue-100">Monthly Rent</p>

          <h2 className="text-4xl font-bold mt-2">
            ₹ {rentData.currentRent.amount}
          </h2>
        </div>

        <div className="bg-green-600 text-white rounded-2xl p-6">
          <p className="text-green-100">Payments Completed</p>

          <h2 className="text-4xl font-bold mt-2">{paidMonths}</h2>
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-6">
          <p className="text-orange-100">Current Status</p>

          <h2 className="text-3xl font-bold mt-2">
            {rentData.currentRent.status}
          </h2>
        </div>
      </div>

      <RentCard rent={rentData.currentRent} />

      <PaymentHistory history={rentData.history} />
    </div>
  );
}

export default Rent;
