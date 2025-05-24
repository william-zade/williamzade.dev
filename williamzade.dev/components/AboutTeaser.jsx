import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section className="max-w-3xl mx-auto my-12 px-4 text-center sm:text-left">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        I’m William Zade, a passionate software developer and creative technologist dedicated to building impactful digital experiences.
        I combine my love for coding and music to bring unique projects to life.
      </p>
      <Link
        href="/about"
        className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition"
      >
        Read more &rarr;
      </Link>
    </section>
  );
}
