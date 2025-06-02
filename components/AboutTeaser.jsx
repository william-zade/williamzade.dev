import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100 py-12 px-6 md:px-20">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed max-w-3xl">
        I'm a full-stack developer with a focus on performance, clarity, and long-term maintainability.
        I love combining clean code with visual storytelling.
      </p>
    </section>
  );
}

