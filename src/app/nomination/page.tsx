import Image from "next/image";

export default function StudentNominationForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-[#efd5b2]  p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Student Representative Nomination Form
          </h1>
          <div className="flex justify-center mt-4">
            <Image
              src="/pic3.png"
              alt="Graduation Icon"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Section */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Your Name
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Student ID */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Student ID
            </label>
            <input
              type="text"
              placeholder="ex: 23"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Class
            </label>
            <input
              type="text"
              placeholder="Enter your class"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* School Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              School Email Address
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="(+92) 000-0000000"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Please enter a valid phone number.
            </p>
          </div>

          {/* Student Representative Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Vote for the name you want as the student representative.
            </label>
            <select className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500">
              <option>Please Select</option>
              <option>Student A</option>
              <option>Student B</option>
              <option>Student C</option>
            </select>
          </div>

          {/* Vice Representative Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Vote for the student vice representative.
            </label>
            <select className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500">
              <option>Please Select</option>
              <option>Student X</option>
              <option>Student Y</option>
              <option>Student Z</option>
            </select>
          </div>

          {/* Reason for Nomination */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Give a reason for your nomination.
            </label>
            <textarea
              rows={4}
              placeholder="Type here..."
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="py-2 px-4 border rounded text-gray-700 hover:bg-gray-200"
            >
              Save
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
