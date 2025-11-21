import Link from 'next/link';

export default function ContactCard() {
  return (
    <section className="bg-ember text-midnight px-6 py-8 rounded-xl shadow-xl max-w-2xl mx-auto mt-16 text-center">
      <h2 className="text-2xl font-bold mb-3">Interested in working together?</h2>
      <p className="mb-6 text-sm text-midnight/90">
        Let’s build something great. Reach out for freelance, collaborations, or just to connect.
      </p>
      <Link href="/contact">
        <button className="bg-frost-100 hover:bg-frost-500 text-midnight px-6 py-2 rounded font-semibold transition">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
