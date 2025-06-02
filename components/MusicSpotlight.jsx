export default function MusicSpotlight() {
  return (
    <section className="bg-gradient-to-r from-zinc-800 via-zinc-900 to-black text-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-semibold mb-6">Music Spotlight</h2>
      <p className="text-lg max-w-2xl mb-4 text-gray-300">
        Outside of coding, I write doom and ambient music. Check out my latest tracks and concept albums.
      </p>
      {/* Placeholder - embed player or list */}
      <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-700">
        🎵 [Music Player Placeholder]
      </div>
    </section>
  );
}
