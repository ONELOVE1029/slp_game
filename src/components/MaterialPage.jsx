import { FaBook, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const MaterialPage = () => {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Comprehensive Resource Library
          </h2>
          <p className="text-gray-600 mb-12">
            Explore a vast collection of tools, guides, and resources tailored
            to help you achieve your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              {/* Icon for Interactive Workbooks */}
              <div className="w-16 h-16 text-blue-500 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                <FaBook className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Interactive Workbooks
              </h3>
              <p className="text-gray-600">
                Access detailed workbooks designed to guide learning
                step-by-step with interactive exercises.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              {/* Icon for Video Tutorials */}
              <div className="w-16 h-16 text-blue-500 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-gray-600">
                Watch and learn with our comprehensive video tutorials.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              {/* Icon for Coding Exercises */}
              <div className="w-16 h-16 text-blue-500 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                <FaLaptopCode className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Coding Exercises</h3>
              <p className="text-gray-600">
                Practice coding with our interactive exercises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MaterialPage;
