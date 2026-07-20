import Link from "next/link";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
} from "react-icons/fa";

import { contact } from "@/data/contact";

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function SocialLinks() {
  return (
    <div className="mt-10 flex justify-center gap-5">
      {contact.socials.map((social) => {
        const Icon =
          icons[social.id as keyof typeof icons];

        return (
          <Link
            key={social.id}
            href={social.href}
            target="_blank"
            className="
              flex
              size-12
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary
              hover:text-primary
            "
          >
            <Icon className="size-5" />
          </Link>
        );
      })}
    </div>
  );
}