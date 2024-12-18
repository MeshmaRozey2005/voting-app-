import Link from "next/link";
import { FcCancel } from "react-icons/fc";

const CancelEvent: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-row items-center mb-4">
        <FcCancel size={40} />
        <h2 className="text-2xl font-semibold text-gray-800">
          Cancel or Postpone?
        </h2>
      </div>
      <p className="text-gray-600 mb-4">
        Decide whether to cancel or reschedule an event with ease.
      </p>
      <Link href="/Cancelling">
        <button className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Manage Events
        </button>
      </Link>
    </div>
  );
};

export default CancelEvent;

  