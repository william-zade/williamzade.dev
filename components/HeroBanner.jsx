export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-blue-800 via-purple-800 to-gray-900 text-white py-24 px-6 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
        Hi, I'm William Zade
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mb-8">
        Software Developer, Music Creator, and Creative Technologist.
        <br />
        Explore my work, music, and more!
      </p>
      <a
        href="/projects"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
      >
        View My Projects
      </a>
    </section>
  );
}
