import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Powered by AutoShark",
        href: "https://docs.autoshark.finance/resources/swap-as-a-service-integration"
      }
    ]
  }
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/rugzombie"
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/rugzombie"
      }
    ]
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/rugzombie"
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/Rug-Zombie/"
  }
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`
}));
