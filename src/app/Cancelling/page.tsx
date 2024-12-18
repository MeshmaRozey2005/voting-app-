export default function ResponsiveCancelationForm() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-md bg-[#efd5b2] rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">
          Cancelation / Postponement Voting Form
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Uncertain about an event's schedule? Cast your votes to determine
          whether it should proceed, be postponed, or canceled.
        </p>

        <form className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="areaCode"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <div className="grid grid-cols-[1fr,2fr] sm:grid-cols-[100px,1fr] gap-2">
              <input
                type="text"
                id="areaCode"
                name="areaCode"
                placeholder="Area Code"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="block text-sm sm:text-base font-medium text-gray-700">
              Your preference
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="canceled"
                  name="preference"
                  value="canceled"
                  className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="canceled"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Canceled
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="postponed"
                  name="preference"
                  value="postponed"
                  className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="postponed"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Postponed
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between pt-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
            <button
              type="reset"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
