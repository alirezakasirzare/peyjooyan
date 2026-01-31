import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { CardSheet } from "~/components/ui/card-sheet";
import data from "~/data/contact.json";

const addressData = {
  en: data.addressEn,
  fa: "",
};

const ContactItem = ({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h1 className="font-title text-primary md:text-2xl">{title}</h1>
      {children}
    </div>
  );
};

export const ContactList = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  const address = addressData[locale];

  return (
    <div className="flex flex-col gap-8">
      <ContactItem title={t("addressTitle")}>
        <p className="font-title text-foreground/80 text-xs md:text-base">
          {address}
        </p>
        <CardSheet className="mt-4">
          <Image
            src={"/images/map.png"}
            width={400}
            height={300}
            alt="map"
            className="w-full object-cover"
          />
        </CardSheet>
      </ContactItem>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <ContactItem title={t("emailTitle")}>
          <p className="font-title text-xs md:text-base">{data.email}</p>
        </ContactItem>
        <ContactItem title={t("contactTitle")}>
          <p className="font-title text-xs md:text-base">{data.phone}</p>
        </ContactItem>
        <ContactItem title={t("linkedinTitle")}>
          <p className="font-title text-xs md:text-base">{data.linkedin}</p>
        </ContactItem>
      </div>
    </div>
  );
};
