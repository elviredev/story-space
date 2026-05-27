import type { NewsResponseWithParams } from "@/utils/types";
import type { ReactNode } from "react";

const Overview = ({ objects }: { objects: NewsResponseWithParams }): ReactNode => {
    const number: number = objects.response.count

    return (
        <div className="p-2 my-6 text-xl">{number} matches</div>
    );
};

export default Overview;