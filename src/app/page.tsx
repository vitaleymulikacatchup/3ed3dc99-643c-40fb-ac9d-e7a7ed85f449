"use client";
import { NavbarLayoutFloatingInline } from '@/components/navigation/NavbarLayoutFloatingInline';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import BentoStepSimple from '@/components/bento/BentoStepSimple';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

const navItems = [
  { name: "Hero", id: "#hero" },
  { name: "About", id: "#about" },
  { name: "How To Buy", id: "#how-to-buy" },
  { name: "Tokenomics", id: "#tokenomics" },
  { name: "FAQs", id: "#faq" },
  { name: "Footer", id: "#footer" },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        navItems={navItems}
        buttonText="Buy MEME"
        onButtonClick={() => { /* Handle CTA Click */ }}
      />
      <BillboardHero
        title="Welcome to MEMECOIN POP!"
        subtitle="Join the meme revolution."
      />
      <SplitAbout
        description="Discover the vibrant world of memecoins and how you can be a part of this exciting trend."
      />
      <BentoStepSimple
        items={[
          { title: "Step 1", description: "Get your wallet ready!" },
          { title: "Step 2", description: "Buy MEMECOIN with ease!" },
          { title: "Step 3", description: "Participate in our community!" }
        ]}
      />
      <TextGridTokenomics
        title="Tokenomics"
        description="A quick look at our memecoin's tokenomics."
        tokenData={[
          { value: "100M", description: "Total Supply" },
          { value: "50M", description: "Circulating Supply" },
          { value: "5%", description: "Transaction Fee" },
        ]}
      />
      <CentralFAQ
        items={[
          { title: "What is MEMECOIN?", content: "A playful cryptocurrency for fun and investment." },
          { title: "How do I buy it?", content: "Follow our simple steps above." },
          // Additional FAQs...
        ]}
      />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        columns={[
          { title: "Links", items: [ { label: "Home", onClick: () => {} }, ... ] },
          // Additional footer items...
        ]}
        copyrightText="© 2023 MEMECOIN POP"
        onPrivacyClick={() => { /* Handle Privacy Click */ }}
      />
    </SiteThemeProvider>
  );
}