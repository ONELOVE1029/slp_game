import img1 from "../img/img (1).jpg";
import img2 from "../img/img (2).jpg";
import img3 from "../img/img (3).jpg";
import img4 from "../img/img (4).jpg";
import img5 from "../img/img (5).jpg";
import img6 from "../img/img (6).jpg";
import "../iconLibrary";

const BodyPage = () => {
  return (
    <main>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={img1}
                alt="Game 1"
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Immersive Gameplay</h3>
              <p className="text-gray-600">
                Experience the thrill of advanced and immersive gameplay like
                never before.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={img2}
                alt="Game 2"
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                Cutting-Edge Graphics
              </h3>
              <p className="text-gray-600">
                Our games feature stunning visuals that bring every scene to
                life.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={img3}
                alt="Game 3"
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Multiplayer Fun</h3>
              <p className="text-gray-600">
                Enjoy the best multiplayer experiences with friends and family.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={img4}
                alt="Game 4"
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                Creative Challenges
              </h3>
              <p className="text-gray-600">
                Solve creative puzzles and overcome challenges designed to
                entertain.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={img5}
                alt="Game 5"
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Expansive Worlds</h3>
              <p className="text-gray-600">
                Explore expansive worlds filled with mysteries and surprises.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <img
                src={img6}
                alt="Game 6"
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Frequent Updates</h3>
              <p className="text-gray-600">
                We regularly update our games to bring you the latest content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Players Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <p className="text-gray-600 italic">
                "This platform has revolutionized how I enjoy gaming. Every
                feature is top-notch!"
              </p>
              <h3 className="text-lg font-semibold mt-4">- Alex Johnson</h3>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <p className="text-gray-600 italic">
                "I can't get enough of the amazing visuals and gameplay!"
              </p>
              <h3 className="text-lg font-semibold mt-4">- Maria Wilson</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BodyPage;
