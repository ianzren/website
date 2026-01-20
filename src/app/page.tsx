import { Section } from "@/components/section";

export default function Home() {
  return (
    <main className="flex-1 max-w-4xl">
      <div className="mb-16">
        <h1 className="mb-8">
          ian
          <br />
          zhang ren
        </h1>
      </div>

      <div className="mb-16 w-full h-px bg-gray-200" />

      <div className="space-y-12">
        <Section
          title="currently"
          items={[
            "full-stack engineer at hived",
            "builder and maintainer of a few open-source projects (coming soon)",
          ]}
        />

        <Section
          title="previously"
          items={[
            "full stack engineer at terra (yc21)",
            "intern at elliot investment management",
            "intern at img arena",
            "founding team at foodllama",
            "computing at imperial college london",
          ]}
        />
      </div>
    </main>
  );
}
