import { useLocale, useTranslations } from "next-intl";
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
      <h1 className="font-title text-primary text-2xl">{title}</h1>
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
        <p className="font-title">{address}</p>
        <CardSheet className="mt-4">
          <div className="h-20"></div>
        </CardSheet>
      </ContactItem>

      <div className="grid grid-cols-3 gap-4">
        <ContactItem title={t("emailTitle")}>
          <p className="font-title">{data.email}</p>
        </ContactItem>
        <ContactItem title={t("contactTitle")}>
          <p className="font-title">{data.phone}</p>
        </ContactItem>
        <ContactItem title={t("linkedinTitle")}>
          <p className="font-title">{data.linkedin}</p>
        </ContactItem>
      </div>
    </div>
  );
};
