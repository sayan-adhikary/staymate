import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Phone, UserPlus } from "lucide-react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">StayMate</h1>

          <p className="text-slate-500 mt-2">Create your account</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>

            <div className="flex items-center border rounded-xl px-3">
              <User className="text-gray-400" size={20} />

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone Number</label>

            <div className="flex items-center border rounded-xl px-3">
              <Phone className="text-gray-400" size={20} />

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>

            <div className="flex items-center border rounded-xl px-3">
              <Mail className="text-gray-400" size={20} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>

            <div className="flex items-center border rounded-xl px-3">
              <Lock className="text-gray-400" size={20} />

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Confirm Password</label>

            <div className="flex items-center border rounded-xl px-3">
              <Lock className="text-gray-400" size={20} />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
          >
            <UserPlus size={20} />
            Create Account
          </button>
        </form>

        <p className="text-center text-slate-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
