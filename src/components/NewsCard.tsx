import type { News } from "@/utils/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

const NewsCard = ({ news }: { news: News }) => {
    const { image_url, title, news_site, url } = news

    return (
		<Card className="relative h-96 overflow-hidden text-white border-0">
			<Link to={url} target="_blank" className="block h-full">
				<CardHeader className="absolute top-1 left-1 z-10 p-0 capitalize">{news_site}</CardHeader>
				<CardContent className="h-full w-full p-0">
					<img src={image_url} alt="card-img" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/0 transition-all" />
				</CardContent>
				<CardFooter className="absolute bottom-0 z-10 p-2 font-extrabold text-xl leading-5">
					{title}
				</CardFooter>
			</Link>
		</Card>
	);
};

export default NewsCard;