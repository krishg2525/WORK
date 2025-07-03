const services = [
  {
    title: "Anxiety & Stress Management",
    img: "/anxiety.jpg",
    description:
      "Evidence-based CBT and mindfulness strategies to manage stress and anxiety.",
    fee: "$200 / individual session",
  },
  {
    title: "Relationship Counseling",
    img: "/relationship.jpg",
    description: "Helping couples improve communication and connection.",
    fee: "$240 / couples session",
  },
  {
    title: "Trauma Recovery",
    img: "/trauma.jpg",
    description: "Supportive healing from past trauma through talk therapy.",
    fee: "$200 / individual session",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 text-center">
              <img
                src={s.img}
                alt={s.title}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.description}</p>
              <p className="mt-4 font-bold">{s.fee}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
