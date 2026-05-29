import type { WebbImage } from "@/utils/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const ImageCard = ({ image }: { image: WebbImage }) => {
    const { details, location } = image
    const { description, mission } = details

    return (
        <Card className="bg-primary-foreground">
            <CardHeader>{mission}</CardHeader>
            <CardContent>
                <img src={location} alt="jwst-pic" className="w-full" />
            </CardContent>
            <CardFooter>{description}</CardFooter>
        </Card>
    )
};

export default ImageCard;