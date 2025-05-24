import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 justify-center mt-4">
      <a
        href="https://github.com/william-zade"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ember text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-frost-500 transition font-semibold"
        aria-label="GitHub"
      >
        <FaGithub />
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/william-zade-7712b5272"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ember text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-frost-500 transition font-semibold"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
        LinkedIn
      </a>
      <a
        href="https://x.com/ZadeBill"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ember text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-frost-500 transition font-semibold"
        aria-label="Twitter"
      >
        <FaTwitter />
        X
      </a>
      <a
        href="mailto:zadebill11@gmail.com"
        className="bg-ember text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-frost-500 transition font-semibold"
        aria-label="Email"
      >
        <FaEnvelope />
        Email
      </a>
    </div>
  );
}
