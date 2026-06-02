import { ApodPlayer, Title } from "@/components";
import { nasaCustomFetch } from "@/utils/customfetch";
import { numberToDate } from "@/utils/functions";
import type { ApodType } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";


export const apodPageloader: LoaderFunction = async (): Promise<ApodType | null> => {
  try {
    const response = await nasaCustomFetch.get<ApodType>("");
    return response.data
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
    return null
  }
}

const Apod = () => {
  const defaultApod = useLoaderData() as ApodType | null
  // stocker la donnée du apod courant
  //const [data, setData] = useState<ApodType | null>(defaultApod)
  // stocker le nb courant du jour
  const [day, setDay] = useState<number>(0)
  // stocker le chargement de l'image
  const [isLoading, setIsLoading] = useState(false)
  // console.log(defaultApod);

  // Récupérer l'apod du jour
  const fetchApod = async (day: number): Promise<void | null> => {
    setIsLoading(true)

    try {
      const params = { date: numberToDate(day) }
      const response = await nasaCustomFetch.get<ApodType>("", { params })

      setData(response.data)
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  // empêcher le premier fetch
  const firstRender = useRef(true)

  // chaque fois que le jour va changer on va faire qqchose
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    fetchApod(day)
  }, [day])

  if (!defaultApod) {
    return (
      <section className="section">
        <Title text="NASA's astronomy picture of the day" />
        <p>Impossible de charger l'image du jour.</p>
      </section>
    )
  }
  // stocker la donnée du apod courant si il existe
  const [data, setData] = useState<ApodType>(defaultApod)

  return <section className="section">
    <Title text="NASA's astronomy picture of the day" />
    <ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading} />
  </section>
};

export default Apod;