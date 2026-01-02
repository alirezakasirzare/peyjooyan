import Image from "next/image";
import { LandingMenu } from "~/components/layout/landing-menu";
import { InitSection } from "~/components/sections/init-section";

const MenuPage = () => {
  return (
    <>
      <InitSection />

      <Image
        src={"/images/miner.png"}
        alt="hero"
        width={1200}
        height={800}
        className="absolute left-0 bottom-0 w-[55vw] md:w-[28vw] z-50"
      />

      <LandingMenu />
    </>
  );
};

export default MenuPage;
