import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { contact } from "@/data/contact";

import { ContactActions } from "./ContactActions";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  return (
    <Section
      id="contact"
      className="py-28"
    >
      <Container>
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-border/60
            bg-card/50
            px-8
            py-20
            text-center
            backdrop-blur-md
          "
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight lg:text-6xl">
              {contact.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {contact.description}
            </p>

            <ContactActions
              email={contact.email}
              resume={contact.resume}
            />

            <SocialLinks />
          </div>
        </div>
      </Container>
    </Section>
  );
}