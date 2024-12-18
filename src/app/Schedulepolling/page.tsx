const SchedulingEvent: React.FC = () => {
    return (
      <div id='#polling'
      className="min-h-screen bg-gray-50 py-10 px-4">
        {/* Container */}
        <div className="max-w-3xl mx-auto bg-[#efd5b2] shadow-lg rounded-lg p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Scheduling Poll</h1>
            <p className="text-gray-600 mt-2">
              Please take a moment to fill this out in order to help us schedule.
            </p>
          </div>
  
          {/* Scheduling Poll */}
          <div>
            <p className="text-gray-800 mb-4">
              Please choose the date and time that is appropriate for you.
            </p>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">Date & Time</th>
                    <th className="p-3 border text-center">Yes, I’m available.</th>
                    <th className="p-3 border text-center">No, I’m not available.</th>
                    <th className="p-3 border text-center">Not sure.</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Tuesday, March 01 - 10:00",
                    "Tuesday, March 01 - 13:00",
                    "Friday, March 04 - 09:00",
                    "Friday, March 04 - 14:00",
                    "Monday, March 07 - 11:00",
                    "Monday, March 07 - 15:30",
                  ].map((time, index) => (
                    <tr key={index} className="even:bg-gray-50">
                      <td className="p-3 border">{time}</td>
                      <td className="p-3 border text-center">
                        <input type="radio" name={`availability-${index}`} />
                      </td>
                      <td className="p-3 border text-center">
                        <input type="radio" name={`availability-${index}`} />
                      </td>
                      <td className="p-3 border text-center">
                        <input type="radio" name={`availability-${index}`} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  
            {/* Additional Date Input */}
            <div className="mt-6">
              <p className="text-gray-800 mb-2">
                Please select another date and time that you are available but is not listed above.
              </p>
              <div className="flex flex-wrap gap-4">
                <input
                  type="date"
                  className="border border-gray-300 rounded p-2 w-full sm:w-auto"
                />
                <input
                  type="time"
                  className="border border-gray-300 rounded p-2 w-full sm:w-auto"
                />
                <select className="border border-gray-300 rounded p-2 w-full sm:w-auto">
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>
  
          <hr className="my-8" />
  
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Information</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <div className="flex gap-2">
                    <select className="border border-gray-300 rounded p-2">
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                      <option>Dr.</option>
                    </select>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-2 border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  placeholder="(+92) 000-0000000"
                  className="border border-gray-300 rounded p-2 w-full"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Please note any suggestions or comments.
                </label>
                <textarea
                  placeholder="Type here..."
                  className="border border-gray-300 rounded p-2 w-full h-24 resize-none"
                />
              </div>
  
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SchedulingEvent;
  