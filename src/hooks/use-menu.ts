import { useTranslations } from "next-intl";
import { usePathname } from "~/i18n/navigation";

export type MenuItemShape = {
  text: string;
  path: string;
  hide?: boolean;
};

export const useMenu = () => {
  const t = useTranslations("menu");
  const pathname = usePathname();

  const menuItems: MenuItemShape[] = [
    {
      text: t("home"),
      path: "/",
    },
    {
      text: t("aboutUs"),
      path: "/about-us",
    },
    {
      text: t("mines"),
      path: "/mines",
    },
    {
      text: t("mnerals"),
      path: "/minerals",
    },
    {
      text: t("ceo"),
      path: "/ceo",
    },
    {
      text: t("founder"),
      path: "/founder",
    },
    {
      text: t("news"),
      path: "/news",
    },
    {
      text: t("articles"),
      path: "/articles",
    },
    {
      text: t("contactUs"),
      path: "/contact-us",
    },
    {
      text: t("footer"),
      path: "/footer",
      hide: true,
    },
  ];

  const activeItem = menuItems.find((item) => item.path === pathname);

  return {
    items: menuItems,
    activeItem,
  };
};
