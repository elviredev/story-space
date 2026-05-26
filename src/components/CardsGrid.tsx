import type { News } from "@/utils/types";
import type { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard";

const CardsGrid = ({ objects, mode }: {objects: News[], mode: string}): ReactNode => {
    console.log(mode);
    
  return (
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
        {objects.map((item, index) => (
            <NewsPageCard news={item} key={index} />
        ))}
    </div>
  );
};

export default CardsGrid;