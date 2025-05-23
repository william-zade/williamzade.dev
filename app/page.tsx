import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation bar at the top of the page */}
      <NavBar />

      {/* Hero banner section with your main headline and call-to-action */}
      <HeroBanner />

      {/* Use the reusable Footer component here */}
      <Footer />
    </div>
  );
}
