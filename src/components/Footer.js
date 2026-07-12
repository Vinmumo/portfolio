import React from "react";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-500">
          © {currentYear} {site.name} · Built with React & Tailwind CSS
        </p>
        <SocialLinks size={18} />
      </div>
    </footer>
  );
}

export default Footer;
