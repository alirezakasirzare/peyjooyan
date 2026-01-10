import { ArrowUpRightIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "~/components/ui/button";
import pureDate from "~/data/articles.json";

const data = {
  en: pureDate.enArticles,
  fa: pureDate.faArticles,
};

export const ArticleList = () => {
  const locale = useLocale();
  const articles = data[locale];

  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8">
      {articles.map((article) => (
        <li key={article.id}>
          <div className="bg-[#1F2324] rounded-3xl p-4 text-[36px] font-title flex leading-none card-bottom-sheet">
            <h6>{article.title}</h6>
            <Button size={"icon"}>
              <ArrowUpRightIcon className="size-4 fill-primary" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
