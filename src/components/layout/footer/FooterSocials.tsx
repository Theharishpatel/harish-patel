import Link from "next/link";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
} from "react-icons/fa";

import { footer } from "@/data/footer";

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function FooterSocials() {
  return (
    <div className="flex justify-center gap-4">
      {footer.socials.map((social) => {
        const Icon =
          icons[social.id as keyof typeof icons];

        return (
          <Link
            key={social.id}
            href={social.href}
            target="_blank"
            className="rounded-full border border-border p-3 transition-all hover:border-primary hover:text-primary"
          >
            <Icon className="size-5" />
          </Link>
        );
      })}
    </div>
  );
}