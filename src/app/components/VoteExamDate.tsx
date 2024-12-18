import Link from "next/link";
import { PiExamFill } from "react-icons/pi";

const VoteExamDate: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <PiExamFill  size={32} />
        <h2 className="text-2xl font-semibold text-gray-800">
          Vote for Exam Date
        </h2>
      </div>
      <p className="text-gray-600 mb-4">
        Select a preferred date for upcoming exams through voting.
      </p>
      <Link href="/ExamVote">
        <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Vote Now
        </button>
      </Link>
    </div>
  );
};

export default VoteExamDate;

  