import { CardsGrid, Filters, Overview, PaginationContainer, Title } from "@/components";
import { objectsPerPage } from "@/utils/constants";
import { snapiCustomFetch } from "@/utils/customfetch";
import type { FiltersParam, NewsResponse, NewsResponseWithParams } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: objectsPerPage,
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
      // pour la pagination: 24 elt par page. Si on est sur la page 3 par ex -> offset de 2 et si on est sur la page 1 pas d'offset donc 0
      offset: params.page ? objectsPerPage * (parseFloat(params.page) - 1) : 0,
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
    /* eslint-disable-next-line no-console */
    console.log(error);
    return null
  }
}

const News = () => {
  const data = useLoaderData() as NewsResponseWithParams
  const { response, params } = data

  return <section className="section">
    <Title text="All news" />
    <Filters term={params.term} mode="news" key={params.term} />
    <Overview objects={data} />
    <CardsGrid objects={response.results} mode="news-page" />
    <PaginationContainer />
  </section>
};

export default News;