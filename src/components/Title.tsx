import type { ReactNode } from "react";

const Title = ({text}: {text: string}): ReactNode => {
  return (
    <div className="p-2">
        <h2 className="my-6 text-5xl capitalize">{text}</h2>
    </div>
  );
};

export default Title;