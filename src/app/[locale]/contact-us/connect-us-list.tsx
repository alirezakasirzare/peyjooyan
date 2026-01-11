import { useLocale, useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { CardSheet } from "~/components/ui/card-sheet";
import pureDate from "~/data/connectUs.json";

const data = {
  en: pureDate.enConnectUs,
  fa: pureDate.faArticles,
};

export const ConnectUsList = () => {
  const locale = useLocale();
  const t = useTranslations("connectUs");

  const items = data[locale];

  return (
    <ul className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <li key={item.id}>
          <CardSheet>
            <h3 className="font-title text-center text-[70px] leading-none pt-5">
              {item.title}
            </h3>
            <Button
              variant={"outline-secondary"}
              className="font-title mt-10 w-full"
            >
              {t("requestBtn")}
            </Button>
          </CardSheet>
        </li>
      ))}
    </ul>
  );
};
