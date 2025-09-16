import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const slotDateFormat = (slotDate) => {
    const [day, month, year] = slotDate.split("_");
    return `${day} ${months[Number(month)]} ${year}`;
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token }
      });
      setAppointments(data.appointments.reverse());
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-appointment`,
        { appointmentId },
        { headers: { token } }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      getUserAppointments();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) getUserAppointments();
  }, [token]);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b pb-2">
        My Appointments
      </h2>
      <div className="flex flex-col gap-6">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 items-start p-4 border rounded-lg"
          >
            <img
              className="w-28 sm:w-36 rounded bg-[#EAEFFF]"
              src={item.docData.image}
              alt={item.docData.name}
            />
            <div className="flex-1 text-sm text-gray-700">
              <p className="font-semibold text-gray-800">{item.docData.name}</p>
              <p className="text-gray-600">{item.docData.speciality}</p>
              <p className="mt-1 text-gray-600">
                {item.docData.address.line1}, {item.docData.address.line2}
              </p>
              <p className="mt-1 text-gray-600">
                📅 {slotDateFormat(item.slotDate)} | ⏰ {item.slotTime}
              </p>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="px-4 py-2 border rounded text-gray-700 hover:bg-red-600 hover:text-white transition"
                >
                  Cancel
                </button>
              )}
              {item.cancelled && !item.isCompleted && (
                <span className="px-4 py-2 border border-red-500 text-red-500 rounded">
                  Cancelled
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
