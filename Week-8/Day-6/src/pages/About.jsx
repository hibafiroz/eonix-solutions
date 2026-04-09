function About() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-16">

      {/* Title */}
      <h1 className="text-4xl mt-20 font-bold text-center text-green-400 mb-10">
        About Us
      </h1>

      {/* Intro */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
        Welcome to our store! We provide high-quality products with a seamless
        shopping experience. Our goal is to make online shopping simple, fast,
        and enjoyable.
      </p>

      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-400 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-300">
            To deliver the best products at affordable prices while ensuring a
            smooth and enjoyable user experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-400 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-300">
            To become a trusted and popular online store by focusing on quality,
            innovation, and customer satisfaction.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-400 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-300">
            Fast delivery, secure payments, and a wide range of products tailored
            to meet your needs.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About