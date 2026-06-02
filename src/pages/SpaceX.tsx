import { CardsGrid, RelatedNews, Title } from "@/components";
import { snapiCustomFetch, spacexCustomFetch } from "@/utils/customfetch";
import type { News, NewsResponse, Rocket, SpaceXNewsAndRockets } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 9,
  ordering: "-published_at",
  "summary_contains": "spacex"
}

const starshipURL = "rockets/5e9d0d96eda699382d09d1ee"
const falconNineURL = "rockets/5e9d0d95eda69973a809d1ec"
const falconHeavyURL = "rockets/5e9d0d95eda69974db09d1ed"

const rocketsURLs = [starshipURL, falconNineURL, falconHeavyURL]

export const newsFetch = async (): Promise<News[] | null> => {
  try {
    const response = await snapiCustomFetch.get<NewsResponse>("", {params: newsParams})
    return response.data.results
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
    return null
  }
}

export const rocketFetch = async (rocketURL: string): Promise<Rocket | null> => {
  try {
    const response = await spacexCustomFetch.get<Rocket>(rocketURL)
    return response.data
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
    return null
  }
}

export const rocketsFetch = async (): Promise<(Rocket | null)[] | null> => {
  try {
    const response: (Rocket | null)[] = await Promise.all(
      rocketsURLs.map((rocketURL) => rocketFetch(rocketURL))
    )
    return response
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
    return null
  }
}

export const spacexPageLoader: LoaderFunction = async (): Promise<SpaceXNewsAndRockets | null> => {
  try {
    // promise.all
    const [news, rockets] = await Promise.all([newsFetch(), rocketsFetch()])
    return { news, rockets }
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
    return null
  }
}



const SpaceX = () => {
  const { news, rockets } = useLoaderData() as SpaceXNewsAndRockets
  return (
    <section className="section">
      <Title text="spaceX" />
      {news && <RelatedNews news={news} />}
      <Title text="rockets" />
      {rockets && <CardsGrid objects={rockets} mode="rockets" />}
    </section>
  );
};

export default SpaceX;