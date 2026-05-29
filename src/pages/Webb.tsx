import { CardsGrid, RelatedNews, Title, WebbTelescopeSummary } from "@/components";
import { snapiCustomFetch, webbCustomFetch } from "@/utils/customfetch";
import type { News, NewsResponse, WebbImage, WebbImagesResponse, WebbNewsAndImagery } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 9,
  ordering: "-published_at",
  summary_contains: "webb"
}

const imagesParams = {
  page: 1,
  perPage: 4
}

export const newsFetch = async (): Promise<News[] | null> => {
  try {
    const response = await snapiCustomFetch.get<NewsResponse>("", { params: newsParams })
    return response.data.results
  } catch (error) {
    console.log(error);
    return null
  }
}

export const imageryFetch = async (): Promise<WebbImage[] | null> => {
  try {
    const response = await webbCustomFetch.get<WebbImagesResponse>("", { params: imagesParams })
    return response.data.body
  } catch (error) {
    console.log(error);
    return null
  }
}

// Le loader fait un appel double à 2 api
export const webbPageLoader: LoaderFunction = async (): Promise<WebbNewsAndImagery | null> => {
  try {
    // promise.all
    const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()])
    return { news, imagery }
  } catch (error) {
    console.log(error);
    return null    
  }
}

const Webb = () => {
  // Importer les données du loader
  const { news, imagery } = useLoaderData() as WebbNewsAndImagery


  return <section className="section">
    <Title text="James Webb space telescope" />
    {news && <RelatedNews news={news} />}
    <Title text="in brief" />
    <WebbTelescopeSummary />
    <Title text="recent imagery" />
    {imagery && <CardsGrid objects={imagery} mode="imagery" />}
  </section>
};

export default Webb;