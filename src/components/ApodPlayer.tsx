import type { ApodType } from "@/utils/types";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

type ApodPlayerProps = {
    apod: ApodType
    day: number
    setDay: React.Dispatch<React.SetStateAction<number>>
    isLoading: boolean
}

const ApodPlayer = ({ apod, day, setDay, isLoading }: ApodPlayerProps) => {
    const { date, explanation, media_type, title, url } = apod

    const prevHandler = () => {
        setDay((state) => {
            return state + 1;
        });
    };

    const nextHandler = () => {
        setDay((state) => {
            if (state < 1) return 0;
            return state - 1;
        });
    };


    return <>
        <div className="p-2">
            <div className="w-full mx-auto flex justify-between">
                <button onClick={prevHandler} className="mx-4"  >
                    <CircleChevronLeft size={36} className="transition-all text-(--clr-violet-light) hover:scale-110 hover:text-(--clr-violet)" />
                </button>
                {!isLoading ? (
                    <div className="h-100 w-full">
                        {media_type === "video"
                            ? <iframe height="100%" width="100%" src={url}></iframe>
                            : <img src={url} alt="apod-image" className="h-full w-full object-cover" />
                        }
                    </div>
                ) : (
                    <div className="h-100 w-full grid place-content-center">
                        <p>is loading...</p>
                    </div>
                )}
                <button onClick={nextHandler} className="mx-4" disabled={day === 0}>
                    <CircleChevronRight size={36} className={`transition-all cursor-default text-(--clr-disabled) ${day !== 0 ? "cursor-pointer text-(--clr-violet-light) hover:scale-110 hover:text-(--clr-violet)" : ""}`} />
                </button>
            </div>
            <div className="capitalize text-center text-2xl">{date}</div>
            <div className="mx-auto w-full my-8">
                <h2 className="capitalize text-2xl mb-2">{title}</h2>
                <p className="">{explanation}</p>
                <p className="capitalize mt-4 text-right">copyright</p>
                <p className="capitalize text-right">{date}</p>
            </div>
        </div>
    </>
};

export default ApodPlayer;