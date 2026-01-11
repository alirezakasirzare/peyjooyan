import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const NewsPage = async ({ params }: PageProps<"/[locale]/about-us">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <>Minerals</>;
};

export default NewsPage;
