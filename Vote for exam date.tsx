import Image from "next/image"


export default function ExamDateVotingForm() {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-[#efd5b2] rounded-lg p-4 sm:p-6 md:p-8">
          {/* Space for illustration */}
          <div className="h-48 mb-4 pl-5 sm:mb-6">
            <Image
            src="/pic2.png"
            alt="picture"
            width={300}
            height={300}/>
          </div>
  
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
            Exam Date Voting Form
          </h2>
          
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="studentFirstName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                Student Name
              </label>
              <input
                type="text"
                id="studentFirstName"
                name="studentFirstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="First Name"
              />
              <input
                type="text"
                id="studentLastName"
                name="studentLastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-2 text-sm sm:text-base"
                placeholder="Last Name"
              />
            </div>
  
            <div>
              <label htmlFor="studentId" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
              />
            </div>
  
            <div>
              <label htmlFor="course" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
              />
            </div>
  
            <div>
              <label htmlFor="section" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                Section
              </label>
              <select
                id="section"
                name="section"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm sm:text-base"
              >
                <option value="">Please Select</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
              </select>
            </div>
  
            <div className="border-t border-orange-200 my-4 sm:my-6"></div>
  
            <div>
              <label htmlFor="dateTime" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                Select Date & Time
              </label>
              <select
                id="dateTime"
                name="dateTime"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm sm:text-base"
              >
                <option value="">Click to Select</option>
                <optgroup label="January 6 - Monday">
                  <option value="January6 -1000">10:00am - 11:30am</option>
                  <option value="January6-1300">1:00pm - 2:30pm</option>
                  <option value="January6-1530">3:30pm - 5:00pm</option>
                </optgroup>
                <optgroup label=" January 7- Tuesday">
                  <option value="January7-1000">10:00am - 11:30am</option>
                  <option value="January7-1300">1:00pm - 2:30pm</option>
                  <option value="January7-1530">3:30pm - 5:00pm</option>
                </optgroup>
                <optgroup label="January 8 - Wednesday">
                  <option value="January8-1000">10:00am - 11:30am</option>
                  <option value="January8-1300">1:00pm - 2:30pm</option>
                  <option value="January8-1530">3:30pm - 5:00pm</option>
                </optgroup>
                <optgroup label="January 9 - Thursday">
                  <option value="January9-1000">10:00am - 11:30am</option>
                  <option value="January9-1300">1:00pm - 2:30pm</option>
                  <option value="January9-1530">3:30pm - 5:00pm</option>
                </optgroup>
                <optgroup label="January 10- Friday">
                  <option value="January10-1000">10:00am - 11:30am</option>
                  <option value="January10-1300">1:00pm - 2:30pm</option>
                  <option value="January10-1530">3:30pm - 5:00pm</option>
                </optgroup>
              </select>
            </div>
  
            <div>
              <label htmlFor="comments" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                Comments & Questions
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
              />
            </div>
  
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <button
                type="button"
                className="w-full sm:w-1/2 px-4 py-2 bg-white text-gray-700 rounded-md border border-gray-300 text-sm sm:text-base"
              >
                Save
              </button>
              <button
                type="submit"
                className="w-full sm:w-1/2 px-4 py-2 bg-red-400 text-white rounded-md text-sm sm:text-base"
              >
                Vote
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }