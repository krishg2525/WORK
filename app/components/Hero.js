export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-center bg-no-repeat bg-cover sm:bg-top md:bg-center "
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Healing & Growth with Dr. Serena Blake
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Clinical Psychologist – Los Angeles & Online
        </p>
        <a
          href="#contact"
          className="mt-6 bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
