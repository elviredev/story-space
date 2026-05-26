import { CardsGrid, Overview, Title } from "@/components";
import { snapiCustomFetch } from "@/utils/customfetch";
import type { NewsResponse } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 20,
  ordering: "-published_at"
}

export const newsPageLoader: LoaderFunction  = async (): Promise<NewsResponse | null> => {
  try {
    // Params d'entrée qu'on demande
    const formattedParams = {
      ...newsParams
    }

    const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formattedParams
    })

    return response.data
  } catch(error) {
    console.log(error);
    return null
  }
}

const News = () => {
  const data = useLoaderData() as NewsResponse
  const { results } = data
  // console.log(results);


  return <section className="section">
    <Title text="All news" />
    <Overview objects={data} />
    <CardsGrid objects={results} mode="news-page" />
  </section>
};

export default News;