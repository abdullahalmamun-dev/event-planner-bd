import React, { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";

const Profile = () => {
  const { user, bookings, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-100% bg-gray-200 p-4 py-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
          ) : (
            <div className="bg-[#FFD700] text-[#003366] w-24 h-24 rounded-full flex items-center justify-center font-bold mb-4">
              {user?.displayName?.charAt(0).toUpperCase()}
            </div>
          )}
          <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>
          <p className="text-gray-500 mb-2">{user?.email}</p>
          <p className="text-gray-500">
            Location: {user?.location || "Dhaka, Bangladesh"}
          </p>
          <p className="text-gray-500">
            Bio: {user?.bio || "No bio available."}
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4">My Bookings</h3>
        <div>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div key={index} className="bg-gray-100 rounded p-2 mb-2">
                <h4 className="font-semibold">{booking.title}</h4>
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Price: {booking.price}</p>
              </div>
            ))
          ) : (
            <p>No bookings found.</p>
          )}
        </div>

        <div className="mt-4">
          <h4 className="font-bold">Total Bookings: {bookings.length}</h4>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Recent Activities</h3>
          <ul className="list-disc list-inside">
            <li>
              Booked an event: {bookings.length > 0 ? bookings[0].title : "N/A"}
            </li>
            <li>Visited the FAQs page.</li>
            <li>Updated profile information.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Feedback</h3>
          <textarea
            rows="4"
            placeholder="Share your feedback..."
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <button className="mt-2 bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200">
            Submit Feedback
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
            onClick={() => {
              handleLogout();
            }}
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
