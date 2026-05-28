import { ApodPlayer, Title } from "@/components";
import { nasaCustomFetch } from "@/utils/customfetch";
import { numberToDate } from "@/utils/functions";
import type { ApodType } from "@/utils/types";
import { useEffect, useState } from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";


export const apodPageloader: LoaderFunction = async (): Promise<ApodType | null> => {
  try {
    const response = await nasaCustomFetch.get<ApodType>("");
    return response.data
  } catch (error) {
    console.log(error);
    return null
  }
}

const Apod = () => {
  const defaultApod = useLoaderData() as ApodType
  // stocker la donnée du apod courant
  const [data, setData] = useState<ApodType>(defaultApod)
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
      setIsLoading(false)    
    } catch (error) {
      console.log(error)
      setIsLoading(false) 
      return null
    }
  }

  // chaque fois que le jour va changer on va faire qqchose
  useEffect(() => {
    fetchApod(day)
  }, [day])

  return <section className="section">
    <Title text="NASA's astronomy picture of the day" />
    <ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading} />
  </section>
};

export default Apod;