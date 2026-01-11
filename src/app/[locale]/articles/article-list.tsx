import { ArrowUpRightIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "~/components/ui/button";
import { CardSheet } from "~/components/ui/card-sheet";
import pureDate from "~/data/articles.json";

const data = {
  en: pureDate.enArticles,
  fa: pureDate.faArticles,
};

export const ArticleList = () => {
  const locale = useLocale();
  const articles = data[locale];

  return (
    <ul className="grid grid-cols-2 gap-4">
      {articles.map((article) => (
        <li key={article.id}>
          <CardSheet>
            <div className="flex">
              <h6 className="font-title">{article.title}</h6>
              <Button size={"icon"}>
                <ArrowUpRightIcon className="size-4 fill-primary" />
              </Button>
            </div>
          </CardSheet>
        </li>
      ))}
    </ul>
  );
};
