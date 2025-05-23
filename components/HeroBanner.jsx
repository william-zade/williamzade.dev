// components/HeroBanner.jsx

import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="bg-frost-100 text-midnight font-sans py-16 px-6 flex flex-col items-center text-center shadow-md rounded-b-3xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
        HoarFrost
      </h1>
      <p className="text-xl md:text-2xl mb-6 max-w-2xl">
        Forged in the North, shaped by resilience.<br />
        Ambient doom blues and software from the edge of the world.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="bg-ember text-midnight font-semibold px-6 py-3 rounded shadow hover:bg-frost-500 hover:text-ember transition"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="border-2 border-ember text-ember font-semibold px-6 py-3 rounded hover:bg-ember hover:text-midnight transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
