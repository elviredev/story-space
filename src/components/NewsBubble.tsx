import type { News } from "@/utils/types";

const NewsBubble = ({news}: {news: News}) => {
    const { image_url, title, news_site, url } = news
  return (
    <a href={url} target="_blank" rel="noreferrer">
        <div className="grid grid-cols-3 p-1 h-full lg:gap-4">
            <div className="col-span-1 justify-self-center self-center">
                <img src={image_url} alt="card-news-image" className="h-20 w-20 rounded-full object-cover p-0" />
            </div>
            <div className="col-span-2 justify-self-start self-center">
                <p className="leading-4 font-bold text-sm">{title}</p>
                <p className="mt-2">{news_site}</p>
            </div>
        </div>
    </a>
  );
};

export default NewsBubble;