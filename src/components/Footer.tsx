import type { ReactNode } from "react";

const Footer = (): ReactNode => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
        <p className="my-2">-{year}-</p>
        <p className="mars-font text-2xl my-4 text-center">shrefrySpace, by Elviredev</p>
        <p className="underline">resources:</p>
        <p className="text-center">
          <a
            href="https://www.nasa.gov/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >Nasa</a>{" | "}
          <a
            href="https://api.nasa.gov/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >Nasa API</a>{" | "}
          <a
            href="https://www.youtube.com/@NASA/videos"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >Nasa Youtube Channel</a>
        </p>
        <p>
          <a
            href="https://science.nasa.gov/mission/webb/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >JWST</a>{" | "}
          <a
            href="https://jwstapi.com/"
            target="_blank" rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >JWST API</a>
        </p>
        <p>
          <a
            href="https://www.esa.int/"
            target="_blank" rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >ESA</a>
        </p>
        <p>
          <a
            href="https://www.spacex.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >SpaceX</a>{" | "}
          <a
            href="https://docs.spacexdata.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >SpaceX API</a>
        </p>
        <p>
          <a
            href="https://www.datastro.eu/pages/home/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >Datastro API</a>
        </p>
        <p className="mb-8">
          <a
            href="https://www.spaceflightnewsapi.net/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >SNAPI API</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;