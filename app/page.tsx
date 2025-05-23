// Import Next.js's built-in Image component for optimized images
import Image from "next/image";

// Import your NavBar and HeroBanner components from the components folder
import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';

// The main Home component for your homepage
export default function Home() {
  return (
    // The main wrapper div for your page layout
    <div className="min-h-screen flex flex-col">
      
      {/* Navigation bar at the top of the page */}
      <NavBar />

      {/* Hero banner section with your main headline and call-to-action */}
      <HeroBanner />

      {/* Main content area for additional sections */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Example: You can add more content or sections here */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>

      {/* Footer section at the bottom of the page */}
      <footer className="py-6 flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} William Zade. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
