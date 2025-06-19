import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const total = calculateDays() * price;

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl space-y-4 sticky top-10">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div>
        <label className="block text-sm font-medium">Check-in</label>
        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="mt-1 w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium">Check-out</label>
        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="mt-1 w-full border p-2 rounded" />
      </div>

      <p>Total payment: <strong>${total}</strong></p>

      <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">Reserve now</button>
    </div>
  );
};

export default BookingSection;
