import { Section } from "@/components/section";

export default function Home() {
  return (
      <main className="flex-1 max-w-4xl">
        <div className="mb-16">
          <h1 className="mb-8">
            Ian
            <br />
            Zhang Ren
          </h1>
        </div>

        <div className="mb-24 w-full h-px bg-gray-200" />

        {/* Sections */}
        <div className="space-y-20">
          <Section number="01" title="A personal site">
            This is a space for sharing work, ideas, and observations. It's a
            living archive of projects, writing, and things I'm thinking about.
            Some ideas are polished, others are rough sketches. All are part of
            the process.
          </Section>

          <Section number="02" title="Things I'm interested in">
            Technology and the systems that shape our world. Design that feels
            intentional and necessary. The craft of building things that
            matter. Rock climbing, long conversations, and quiet mornings.
          </Section>

          <Section number="03" title="Writing & projects">
            Occasional essays on software, design, and systems thinking.
            Side projects exploring new ideas and technologies. All work is
            shared openly, with the hope that it might be useful to others.
          </Section>
        </div>
      </main>
  );
}

