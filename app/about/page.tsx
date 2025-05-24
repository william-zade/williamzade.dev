// app/about/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 rounded bg-frost-100 text-midnight hover:bg-frost-200 transition font-semibold"
        aria-label="Go back"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">About This Site</h1>
      <p className="mb-6">
        Welcome to my personal portfolio! This portal showcases my projects, skills, and creative journey as a developer and designer.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
      <p className="mb-6">
        I’m William Zade, a developer and open source enthusiast passionate about building scalable, beautiful web experiences. My work blends technology, design, and storytelling, with a focus on FOSS tools and personal branding.
        Other stuff about me to know, I'm a combat veteran of the Marines and the Army, a dedicated husband, and a father to four wonderful children.
      </p>
      <h2 className="text-2xl font-semibold mb-2">What I Do Here</h2>
      <p>
        On this site, you’ll find my latest projects, design experiments, and insights into my creative process. Whether you’re here to collaborate, get inspired, or learn more about my journey, this portal is your gateway to everything I create.
      </p>
    </main>
  );
}
