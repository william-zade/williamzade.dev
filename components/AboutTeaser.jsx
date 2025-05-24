import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section
      className="w-80 h-80 bg-black text-ember border-2 border-ember rounded-none shadow-lg flex flex-col items-center justify-center text-center p-8"
      style={{ minWidth: '20rem', minHeight: '20rem' }}
    >
      <h2 className="text-2xl font-bold mb-2 text-ember">About Me</h2>
      <div className="flex flex-wrap items-center justify-center gap-2 w-full">
        <span className="text-ember font-semibold">Developer</span>
        <span className="text-ember font-semibold">Designer</span>
        <span className="text-ember font-semibold">Builder</span>
        <span className="text-ember font-semibold">Musician</span>
      </div>
      <p className="mt-4 text-ember text-base font-medium">
        I’m William Zade, passionate about building impactful digital experiences with code and creativity.
      </p>
      <Link
        href="/about"
        className="inline-block mt-4 text-ember hover:text-white font-semibold transition"
      >
        Read more &rarr;
      </Link>
    </section>
  );
}
