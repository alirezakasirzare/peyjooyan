import "swiper/css";
import "swiper/css/effect-cards";
import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "~/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { LayoutProvider } from "../../components/providers/layout-provider";
import { LandingMenu } from "~/components/layout/landing-menu";
import { MenuScrollProvider } from "~/components/providers/menu-scroll-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#080c0d",
};

const enTitleFont = localFont({
  src: "../../../public/fonts/DAVINCI.ttf",
  variable: "--font-title",
});

const enTextFont = Inter({
  variable: "--font-text",
});

const faTitleFont = localFont({
  src: "../../../public/fonts/Shiveh.woff",
  variable: "--font-title",
});

const faTextFont = localFont({
  src: "../../../public/fonts/Peyda-Regular.ttf",
  variable: "--font-text",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
  };
}
const RootLayout = async ({ children, params }: LayoutProps<"/[locale]">) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const layoutDir: "rtl" | "ltr" = locale === "fa" ? "rtl" : "ltr";
  const titleFont = locale === "fa" ? faTitleFont : enTitleFont;
  const textFont = locale === "fa" ? faTextFont : enTextFont;

  return (
    <html lang={locale} dir={layoutDir}>
      <body
        className={`${titleFont.variable} ${textFont.variable} font-text antialiased dark h-[100dvh] overflow-hidden`}
      >
        <LayoutProvider dir={layoutDir}>
          <NextIntlClientProvider>
            <MenuScrollProvider>{children}</MenuScrollProvider>
            <LandingMenu />
          </NextIntlClientProvider>
        </LayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;
