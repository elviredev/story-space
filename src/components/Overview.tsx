import type { NewsResponse } from "@/utils/types";
import type { ReactNode } from "react";

const Overview = ({ objects }: { objects: NewsResponse }): ReactNode => {
    const number: number = objects.count

    return (
        <div className="p-2 my-6 text-xl">{number} matches</div>
    );
};

export default Overview;