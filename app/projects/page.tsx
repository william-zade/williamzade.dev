"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Import the router hook

const projects = [
  {
    name: "Portfolio Website",
    description: "My personal website built with Next.js, React, and Tailwind CSS.",
    url: "https://github.com/william-zade/williamzade.dev",
  },
  {
    name: "Another Project",
    description: "Brief description of another project.",
    url: "https://github.com/william-zade/another-project",
  },
  // Add more projects as needed
];

export default function Projects() {
  const router = useRouter(); // Initialize the router

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 rounded bg-frost-100 text-midnight hover:bg-frost-200 transition font-semibold"
        aria-label="Go back"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-6">My GitHub Projects</h1>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.url} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-ember transition">
                {project.name}
              </Link>
            </h2>
            <p className="text-slate-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
