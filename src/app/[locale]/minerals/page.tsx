import { ArrowUpRightIcon } from "lucide-react";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";
import { Steps } from "./steps";

const MineralsPage = async ({ params }: PageProps<"/[locale]/minerals">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("home");

  return (
    <>
      <Image
        src={"/images/minerals.png"}
        alt="hero"
        width={1200}
        height={800}
        className="w-full h-screen fixed top-0 left-0 object-cover"
      />

      <div className="fixed left-0 top-0 bg-linear-to-t from-black to-black/0 w-full h-full bottom-22 z-10"></div>

      {/* <div className="fixed left-0 bg-linear-to-t from-black to-black/0 w-full h-[calc(100vh)] bottom-0"></div> */}
      <div className="p-6 md:pt-10 pb-10 md:pb-0 flex flex-col max-h-screen relative z-50">
        <h2 className="font-title text-[60px] md:text-[60px] leading-none">
          Minerals
        </h2>
        <h1 className="font-title text-[60px] md:text-[60px] text-primary leading-none">
          Peyjooyan
        </h1>
        <h3 className="font-title text-xl text-primary leading-none mt-3">
          The minerals we extract
        </h3>
        <Image
          src={"/images/rock.gif"}
          alt="rock"
          width={400}
          height={400}
          className="object-cover w-[180px]"
        />
        <p className="font-title">
          The maximum and average lead element grades are 9.7 and 2.2 percent,
          respectively.
        </p>
        <div className="mt-5">
          <Steps />
        </div>
      </div>
    </>
  );
};

export default MineralsPage;
