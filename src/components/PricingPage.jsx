import "../iconLibrary";

const PricingPage = () => {
  return (
    <main>
      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
          <p className="text-lg mb-12 text-gray-600">
            Select the best plan that fits your gaming needs. Upgrade or cancel
            anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-gray-600 mb-6">Perfect for casual gamers.</p>
              <h4 className="text-4xl font-bold mb-4">$9.99</h4>
              <p className="text-sm text-gray-500 mb-6">per month</p>
              <ul className="text-left mb-6">
                <li>✔ Access to 10 games</li>
                <li>✔ Standard graphics</li>
                <li>✔ Community support</li>
              </ul>
              <a
                href="/signup"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
              >
                Subscribe Now
              </a>
            </div>

            {/* Pro Plan */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-gray-600 mb-6">Ideal for dedicated gamers.</p>
              <h4 className="text-4xl font-bold mb-4">$19.99</h4>
              <p className="text-sm text-gray-500 mb-6">per month</p>
              <ul className="text-left mb-6">
                <li>✔ Access to 50 games</li>
                <li>✔ High-resolution graphics</li>
                <li>✔ Priority support</li>
              </ul>
              <a
                href="/signup"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
              >
                Subscribe Now
              </a>
            </div>

            {/* Premium Plan */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
              <p className="text-gray-600 mb-6">
                For the ultimate gaming experience.
              </p>
              <h4 className="text-4xl font-bold mb-4">$29.99</h4>
              <p className="text-sm text-gray-500 mb-6">per month</p>
              <ul className="text-left mb-6">
                <li>✔ Unlimited games</li>
                <li>✔ Ultra HD graphics</li>
                <li>✔ 24/7 dedicated support</li>
              </ul>
              <a
                href="/signup"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
