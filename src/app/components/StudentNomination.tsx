import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa6";

const StudentNomination: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-row items-center mb-4">
        <FaGraduationCap size={40} />
        <h2 className="text-2xl font-semibold text-gray-800">
          Student Nomination
        </h2>
      </div>
      <p className="text-gray-600 mb-4">
        Nominate candidates for student representative elections.
      </p>
      <Link href="/nomination">
        <button className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
          Nominate Now
        </button>
      </Link>
    </div>
  );
};

export default StudentNomination;

  