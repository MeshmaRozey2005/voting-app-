import Image from "next/image";
import ScheduleEvent from "./components/ScheduleEvent";
import CancelEvent from "./components/CancelEvent";
import VoteExamDate from "./components/VoteExamDate";
import StudentNomination from "./components/StudentNomination";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/pic1.jpg" // Path to your image in the public folder
        alt="Background"
        layout="fill" // Makes the image cover the full parent container
        objectFit="cover" // Ensures the image scales and covers the area
        className="-z-10" // Places the image behind other content
        priority // Loads the image faster for better performance
      />

      {/* Overlay Content */}
      <div className="relative z-10 py-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-black">Salim Habib Voting</h1>
      
        </div>

        {/* Main Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <ScheduleEvent />
          <CancelEvent />
          <VoteExamDate />
          <StudentNomination />
        </div>
      </div>
    </div>
  );
}


