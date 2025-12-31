import { useTranslations } from "next-intl";
import Image from "next/image";
import { LandingMenu } from "~/components/layout/landing-menu";

const MenuPage = () => {
  const t = useTranslations("home");

  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Image
          src={"/hero.png"}
          alt="hero"
          width={1200}
          height={800}
          className="w-full h-[calc(100vh-100px)] object-cover"
        />
        <div className="absolute left-1/2 top-1/2 -translate-1/2">
          <h1 className="text-primary text-[200px] text-center">
            {t("title")}
          </h1>
          <h2 className="text-[100px] text-center">{t("subtitle")}</h2>
        </div>
      </main>

      <Image
        src={"/images/miner.png"}
        alt="hero"
        width={1200}
        height={800}
        className="absolute left-0 bottom-0 w-[28vw]"
      />

      <LandingMenu />
    </>
  );
};

export default MenuPage;
