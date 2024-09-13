import React, { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";

const Profile = () => {
  const { user, bookings } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
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
          <p className="text-gray-500 mb-4">{user?.email}</p>
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
        <div className="flex justify-center">
          <button
            className="bg-[#FFD700] text-[#003366] px-4 py-2 rounded hover:bg-[#FFC107] transition duration-200"
            onClick={() => {}}
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
