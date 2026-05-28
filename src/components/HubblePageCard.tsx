import type { HubbleImage } from "@/utils/types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CircleArrowRight } from "lucide-react";

const HubblePageCard = ({ image }: { image: HubbleImage }) => {
    const { photo_id, photo_date_taken, photo_title, photo_url_m } = image
    const { url } = photo_url_m

    return (
        <Link to={`/hubble/${photo_id}`} className="block">
            <Card className="relative min-h-100 rounded-none slider-card">
                <CardHeader className=" top-2 left-2 text-white z-10">
                    <CardTitle>{photo_title}</CardTitle>
                </CardHeader>
                <CardContent className="absolute inset-0 p-0">
                    <img src={url} alt="hubble-pic" className="h-full w-full object-cover" />
                </CardContent>
                <CardFooter className="absolute bottom-2 flex gap-2 text-white">
                    <p>Taken: {photo_date_taken}</p>
                    <CircleArrowRight
                        color="var(--clr-violet)"
                        className="hover:scale-150 transition-all"
                    />
                </CardFooter>
            </Card>
        </Link>
    );
};

export default HubblePageCard;