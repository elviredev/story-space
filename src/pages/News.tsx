import { CardsGrid, Filters, Overview, Title } from "@/components";
import { snapiCustomFetch } from "@/utils/customfetch";
import type { FiltersParam, NewsResponse, NewsResponseWithParams } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 20,
  ordering: "-published_at"
}

export const newsPageLoader: LoaderFunction  = async ({request}): Promise<NewsResponseWithParams | null> => {
  try {
    // récupérer les params de l'URL et les transforme en objet JS
    const params: FiltersParam = Object.fromEntries(
      new URL(request.url).searchParams.entries()
    )
    

    // Params d'entrée qu'on demande
    const formattedParams = {
      search: params.term ? params.term : "",
      ...newsParams
    }

    const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formattedParams
    })

    return { 
      response: response.data,
      params
    }
  } catch(error) {
    console.log(error);
    return null
  }
}

const News = () => {
  const data = useLoaderData() as NewsResponseWithParams
  const { response, params } = data
  // console.log(response);


  return <section className="section">
    <Title text="All news" />
    <Filters term={params.term} mode="news" key={params.term} />
    <Overview objects={data} />
    <CardsGrid objects={response} mode="news-page" />
  </section>
};

export default News;