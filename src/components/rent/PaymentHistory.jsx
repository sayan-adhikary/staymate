import StatusBadge from "./StatusBadge";

function PaymentHistory({ history }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-5">Payment History</h2>

      <div className="space-y-4">
        {history.map((payment) => (
          <div
            key={payment.id}
            className="flex justify-between items-center border rounded-xl p-4"
          >
            <div>
              <h3 className="font-semibold">{payment.month}</h3>

              <p className="text-slate-500">₹ {payment.amount}</p>
            </div>

            <StatusBadge status={payment.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentHistory;
