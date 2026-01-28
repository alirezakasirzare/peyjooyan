import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Slider } from "./slider";

const NewsPage = async ({ params }: PageProps<"/[locale]/news">) => {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div className="p-6 md:pt-10 pb-10 md:pb-0 flex flex-col max-h-screen relative z-50">
      <h2 className="font-title text-[60px] md:text-[80px] leading-none">
        News
      </h2>
      <h1 className="font-title text-[60px] md:text-[40px] text-primary leading-none">
        Latest articles
      </h1>

      <div className="mt-5">
        <Slider />
      </div>
    </div>
  );
};

export default NewsPage;
