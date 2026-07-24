import { useMemo, useState } from "react";
import { Plus, Trash2, Wallet } from "lucide-react";
import { expenseData } from "../data/expenseData";

function Expenses() {
  const [expenses, setExpenses] = useState(expenseData);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!title.trim() || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      category,
      amount: Number(amount),
    };

    setExpenses([newExpense, ...expenses]);
    setTitle("");
    setCategory("Food");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">💰 Expenses</h1>

        <p className="text-slate-500 mt-2">Track your monthly spending</p>
      </div>

      <div className="bg-blue-600 text-white rounded-2xl p-6 flex items-center justify-between">
        <div>
          <p className="text-blue-100">Total Expenses</p>

          <h2 className="text-4xl font-bold mt-2">₹ {totalExpense}</h2>
        </div>

        <Wallet size={45} />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <input
          type="text"
          placeholder="Expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option>Food</option>
          <option>Rent</option>
          <option>Travel</option>
          <option>Personal</option>
          <option>Entertainment</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addExpense}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
        >
          <Plus size={18} />
          Add Expense
        </button>
      </div>

      <div className="space-y-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg">{expense.title}</h2>

              <p className="text-slate-500">{expense.category}</p>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-bold text-lg">₹ {expense.amount}</span>

              <button
                onClick={() => deleteExpense(expense.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        {expenses.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center text-slate-500">
            No expenses added.
          </div>
        )}
      </div>
    </div>
  );
}

export default Expenses;
