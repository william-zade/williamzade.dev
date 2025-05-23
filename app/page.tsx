import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks'; // create this component
import FeaturedProjects from '../components/FeaturedProjects'; // create this component
import AboutTeaser from '../components/AboutTeaser'; // create this component
import MusicSpotlight from '../components/MusicSpotlight'; // optional

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <HeroBanner />
      {/* Social/professional links under hero */}
      <SocialLinks />
      {/* Featured projects preview */}
      <FeaturedProjects />
      {/* About Me teaser */}
      <AboutTeaser />
      {/* Music spotlight (optional) */}
      <MusicSpotlight />
      {/* Call to action banner */}
      <section className="bg-blue-700 text-white text-center py-8 my-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-2xl font-bold mb-2">Interested in working together?</h2>
        <p className="mb-4">Let’s build something great. Reach out for freelance, collaborations, or just to connect.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </section>
      <Footer />
    </div>
  );
}
