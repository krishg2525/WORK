export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/serena.jpg"
          alt="Dr. Serena Blake"
          className="w-64 h-64 object-cover rounded-full"
        />
        <div className="space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            About Dr. Serena Blake, PsyD (Clinical Psychologist)
          </h2>
          <p>
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
          <p>
            <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA
          </p>
          <p>
            <strong>Office Hours:</strong> Tue/Thu (In-person), Mon/Wed/Fri
            (Zoom)
          </p>
          <p>
            <strong>Phone: </strong> (323) 555-0192
          </p>
          <p>
            <strong>Email: </strong> serena@blakepsychology.com
          </p>
        </div>
      </div>
    </section>
  );
}
