import type { News } from "@/utils/types";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPageCard = ({ news }: { news: News }) => {
    const { url, image_url, title, published_at, news_site, summary, authors } = news
    const authorName = authors?.[0]?.name || "Unknow author"
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4">
            <div className="p-2 overflow-hidden lg:col-span-1 h-75 md:h-100 lg:h-full">
                <Link to={url} target="_blank">
                    <img src={image_url} alt="main-img" className="h-full w-full object-cover" />
                </Link>
            </div>
            <div className="p-2 overflow-hidden lg:col-span-3 h-75 md:h-50 lg:h-full">
                <p className="text-2xl font-bold">{title}</p>
                <p className="flex items-center gap-1">
                    <span className="shrink-0">{published_at.split("T")[0]}</span>
                    by
                    <span className="truncate text-fuchsia-800">{authorName}</span>
                </p>
                <p className="flex items-center">
                    <span className="truncate">{news_site}</span>
                    <span className="shrink-0">|</span>
                    <span className="flex items-center gap-x-2 whitespace-nowrap shrink-0">
                        Read from source
                        <Link to={url} target="_blank">
                            <CircleArrowRight
                                color="var(--clr-violet)"
                                className="hover:scale-150 transition-all"
                            />
                        </Link>
                    </span>
                </p>
                <p className="mt-4">{summary}</p>
            </div>
        </div>
    );
};

export default NewsPageCard;