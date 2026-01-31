"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { CardSheet } from "~/components/ui/card-sheet";
import pureDate from "~/data/connectUs.json";
import { useRouter } from "~/i18n/navigation";
import { ContactUsStore } from "./contact-us-store";

const data = {
  en: pureDate.enConnectUs,
  fa: pureDate.faArticles,
};

export const ConnectUsList = () => {
  const locale = useLocale();
  const t = useTranslations("connectUs");

  const items = data[locale];

  const router = useRouter();
  const handleClick = (id: number) => {
    switch (id) {
      case 1:
      case 2:
        ContactUsStore.setState({ step: 1 });
        break;
      case 3:
      case 4:
        router.push("/footer");
    }
  };

  return (
    <ul className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <li key={item.id}>
          <CardSheet>
            <h3 className="font-title text-center text-[40px] md:text-[70px] leading-none pt-5">
              {item.title}
            </h3>
            <Button
              variant={"outline-secondary"}
              className="font-title mt-10 w-full"
              onClick={() => handleClick(item.id)}
            >
              {t("requestBtn")}
            </Button>
          </CardSheet>
        </li>
      ))}
    </ul>
  );
};
