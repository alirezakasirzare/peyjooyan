import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";

const HomePage = () => {
  const t = useTranslations("home");

  return (
    <main className="min-h-screen flex flex-col">
      <Image
        src={"/hero.png"}
        alt="hero"
        width={1200}
        height={800}
        className="w-full h-[calc(100vh-100px)] object-cover"
      />
      <div className="absolute left-1/2 top-1/2 -translate-1/2">
        <h1 className="text-[#CF3501] text-[200px] text-center">
          {t("title")}
        </h1>
        <h2 className="text-[100px] text-center">{t("subtitle")}</h2>
        <div className="flex gap-4">
          <Button>{t("cta")}</Button>
          <Button size={"icon"}>
            <ArrowUpRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
