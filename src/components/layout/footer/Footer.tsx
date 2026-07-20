import { Container } from "@/components/common/Container";

import { FooterBrand } from "./FooterBrand";
import { FooterCopyright } from "./FooterCopyright";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocials } from "./FooterSocials";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-16">
      <Container>
        <div className="space-y-12">
          <div className="flex flex-col items-center gap-10 text-center">
            <FooterBrand />

            <FooterNavigation />

            <FooterSocials />
          </div>

          <FooterCopyright />
        </div>
      </Container>
    </footer>
  );
}