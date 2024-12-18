import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";

const ScheduleEvent: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
       
        <IoCalendarOutline size={40}/>
        <h2 className="text-2xl font-semibold text-gray-800">Schedule an Event</h2>
      </div>
      <p className="text-gray-600 mb-4">
        Plan and schedule events efficiently for your class.
      </p>
      <Link href="/Schedulepolling">
        <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Schedule Now
        </button>
      </Link>
    </div>
  );
};

export default ScheduleEvent;

