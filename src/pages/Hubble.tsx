import { CardsGrid, Filters, Overview, Title } from "@/components";
import { datastroCustomFetch } from "@/utils/customfetch";
import type { FiltersParam, HubbleImagesResponse, HubbleImagesResponseWithParams } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const hubbleParams = {
  order_by: "photo_date_taken desc",
  limit: 24
}

export const hubblePageLoader: LoaderFunction = async ({ request }): Promise<HubbleImagesResponseWithParams | null> => {
  try {
    // récupérer les params de l'URL et les transforme en objet JS
    const params: FiltersParam = Object.fromEntries(
      new URL(request.url).searchParams.entries()
    )

    // params qu'on donne a l'appel d'axios - "where" vient de l'api datastro
    const formattedParams = {
      where: params.term ? `photo_title like "${params.term}"` : "",
      ...hubbleParams
    }

    const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {
      params: formattedParams
    })

    return {
      response: response.data, 
      params
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponseWithParams
  const { response, params } = data
  console.log(data);

  return <section className="section">
    <Title text="Hubble telescope photos" />
    <Filters term={params.term} mode="hubble" key={params.term} />
    <Overview objects={response} />
    <CardsGrid objects={response.results} mode="hubble" />
  </section>
};

export default Hubble;