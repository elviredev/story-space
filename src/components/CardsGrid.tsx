import type { HubbleImage, HubbleImagesResponse, News, NewsResponse } from "@/utils/types";
import type { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard";
import HubblePageCard from "./HubblePageCard";

const CardsGrid = ({ objects, mode }: { objects: NewsResponse | HubbleImagesResponse, mode: string }): ReactNode => {
  console.log(mode);

  if (mode === "hubble-page") {
    return (
      <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16 p-2">
        {objects.results.map((item, index) => (
          <HubblePageCard image={item as HubbleImage} key={index} />
        ))}
      </div>
    )
  } else if (mode === "news-page") {
    return (
      <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
        {objects.results.map((item, index) => (
          <NewsPageCard news={item as News} key={index} />
        ))}
      </div>
    );
  }
};

export default CardsGrid;