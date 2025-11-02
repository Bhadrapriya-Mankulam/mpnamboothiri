import Section from "./Section";

const areas = [
  "Andheri",
  "Bandra",
  "Borivali",
  "Chembur",
  "Dadar",
  "Goregaon",
  "Juhu",
  "Kandivali",
  "Khar",
  "Malad",
  "Powai",
  "Santacruz",
  "Vile Parle",
  "Worli",
];

export default function ServiceAreas() {
  return (
    <Section className="bg-gradient-to-b from-temple-stone-200/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-indigo-900 mb-4">
            Service Areas
          </h2>
          <p className="text-text-muted mb-8">
            Serving Mumbai Metropolitan Region
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white rounded-full text-sm text-deep-indigo-900 shadow-sm border border-temple-stone-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

