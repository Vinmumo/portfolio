import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

const links = [
  { href: site.github, label: "GitHub", Icon: Github },
  { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
];

function SocialLinks({ size = 20, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="p-2 rounded-md text-zinc-400 hover:text-accent hover:bg-zinc-900 transition-colors"
        >
          <Icon size={size} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
