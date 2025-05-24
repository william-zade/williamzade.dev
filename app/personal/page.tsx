"use client";

import { useRouter } from "next/navigation";

export default function Personal() {
  const router = useRouter();

  // Example personal interests and side projects
  const interests = [
    {
      title: "Open Source Advocacy",
      description:
        "I actively support and contribute to FOSS projects, believing in the power of open collaboration and community-driven software.[3]",
    },
    {
      title: "Brand & Design",
      description:
        "I enjoy building scalable, personal brand identities using FOSS tools and modern CSS frameworks like Tailwind.[2]",
    },
    {
      title: "Music & Creativity",
      description:
        "Outside of coding, I explore music production and curation, often sharing playlists and creative works.",
    },
    {
      title: "Side Projects",
      description:
        "From experimental web apps to design experiments, I regularly prototype and share new ideas.[1]",
    },
  ];

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 rounded bg-frost-100 text-midnight hover:bg-frost-200 transition font-semibold"
        aria-label="Go back"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-6">Personal Projects & Passions</h1>
      <ul className="space-y-6">
        {interests.map((item) => (
          <li key={item.title} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-slate-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
