import { LanguagesIcon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "~/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export const LandingNavs = () => {
  const currentLocale = useLocale();
  const t = useTranslations("menu");
  const otherLocale: "fa" | "en" = currentLocale === "en" ? "fa" : "en";

  return (
    <div className="absolute left-0 bottom-0 w-full h-[100px]">
      <div className="flex gap-5 justify-center rtl:flex-row-reverse items-center h-full">
        <Button variant={"glass"} size={"icon-lg"} asChild>
          <Link href={"/"} locale={otherLocale}>
            <LanguagesIcon className="size-4" />
          </Link>
        </Button>
        <Button variant={"glass"} className="font-medium" size={"lg"}>
          {t("home")}
        </Button>
        <Button variant={"glass"} size={"icon-lg"} asChild>
          <Link href={"/menu"}>
            <MenuIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
