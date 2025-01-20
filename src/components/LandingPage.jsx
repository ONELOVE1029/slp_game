import "../iconLibrary";

const LandingPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            This is a place to improve speech sound skills with engaging games. 
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            
            Developed by a pediatric speech-language pathologist, this website was designed specifically for children with speech and language delays and disorders, helps individuals reach their goals faster, while having fun!
          </p>
          <div className="space-x-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-200"
            >
              Get Started
            </a>
            <a
              href="/features"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
