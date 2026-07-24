import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  Home,
  ShieldCheck,
  Pencil,
  Save,
} from "lucide-react";
import { profileData } from "../data/profileData";

function Profile() {
  const [profile, setProfile] = useState(profileData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">👤 My Profile</h1>

        <p className="text-slate-500 mt-2">Manage your personal information</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-36 h-36 rounded-full border-4 border-blue-100"
          />

          <div className="flex-1 grid md:grid-cols-2 gap-5">
            <div>
              <label className="font-medium flex items-center gap-2 mb-2">
                <User size={18} />
                Name
              </label>

              <input
                name="name"
                value={profile.name}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium flex items-center gap-2 mb-2">
                <Mail size={18} />
                Email
              </label>

              <input
                name="email"
                value={profile.email}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium flex items-center gap-2 mb-2">
                <Phone size={18} />
                Phone
              </label>

              <input
                name="phone"
                value={profile.phone}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium flex items-center gap-2 mb-2">
                <Home size={18} />
                Room Number
              </label>

              <input
                name="room"
                value={profile.room}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium flex items-center gap-2 mb-2">
                <Building2 size={18} />
                Hostel
              </label>

              <input
                name="hostel"
                value={profile.hostel}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium flex items-center gap-2 mb-2">
                <GraduationCap size={18} />
                Course
              </label>

              <input
                name="course"
                value={profile.course}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="font-medium flex items-center gap-2 mb-2">
                <ShieldCheck size={18} />
                Emergency Contact
              </label>

              <input
                name="emergencyContact"
                value={profile.emergencyContact}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={toggleEdit}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white transition ${
              isEditing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isEditing ? <Save size={18} /> : <Pencil size={18} />}
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
