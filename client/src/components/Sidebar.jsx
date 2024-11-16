import { useNavigate } from "react-router-dom";
import image from "../constants/image";

function Sidebar() {
  let navigate = useNavigate();
  const users = [
    { name: "Dr. John Doe", specialization: "Endocrinologist", gender: "Male" },
    { name: "Dr. Ollie Jones", specialization: "Allergist", gender: "Female" },
  ];

  return (
    <div className="w-1/4 h-9/12 bg-gray-900 h-screen p-4 text-gray-300 relative">
      <h2 className="text-xl font-semibold mb-4">Previous Chats</h2>
      <div className="space-y-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-gray-800 rounded-lg cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.gender === "Male" ? image.mdoc : image.fdoc}
                alt={`${user.gender} Doctor`}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="text-xl font-medium">{user.name}</p>
                <p className="text-lg text-gray-500">{user.specialization}</p>
              </div>
            </div>
            <span className="text-sm text-gray-400">Now</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 z-10 flex justify-between items-center w-10/12 mx-5">
        <img
          src={image.person}
          alt="Person"
          className="w-14 h-14 rounded-full"
        />
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-14 py-3.5 text-center"
        >
          New Symptom
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
