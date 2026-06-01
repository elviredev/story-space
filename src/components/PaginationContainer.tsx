import { buildUrl, builPrevAndNextUrls } from "@/utils/pagination";
import type { HubbleImagesResponseWithParams, NewsResponseWithParams } from "@/utils/types";
import { type ReactNode } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

const PaginationContainer = () => {
  // retour du Loader
  const { response } = useLoaderData() as HubbleImagesResponseWithParams | NewsResponseWithParams
  // récupère le pathname et search
  const { pathname, search } = useLocation()
  const searchParams = new URLSearchParams(search)

  // récupérer le param "page" si il existe
  const pageFromURL: string | null = searchParams.get("page")
  // nb d'éléments par page
  const objectsPerPage = 24

  const firstPage = 1

  // récupérer la page courante
  let activePage: number
  if (!pageFromURL) {
    activePage = 1
  } else {
    activePage = parseFloat(pageFromURL)
  }

  // récupérer le nb total d'éléments selon qu'on est dans News ou Hubble
  let objectsInTotal: number
  if ("total_count" in response) {
    // cas Hubble
    objectsInTotal = response.total_count
  } else {
    // cas News
    objectsInTotal = response.count
  }

  // récupérer la dernière page
  let lastPage: number
  if (objectsInTotal === 0) {
    lastPage = 0
    // s'il c'est un multiple de objectsPerPage
  } else if (objectsInTotal % objectsPerPage === 0) {
    lastPage = objectsInTotal / objectsPerPage
  } else {
    lastPage = Math.floor(objectsInTotal / objectsPerPage) + 1
  }

  // récupérer les URLs prev et next
  const { prevUrl, nextUrl } = builPrevAndNextUrls({ page: activePage, pathname, search, lastPage })

  // Créer les boutons de page du milieu : 
  const buildBtn = ({ page, isActive }: { page: number, isActive: boolean }): ReactNode => {
    const url = buildUrl({ page, pathname, search })
    return (
      <PaginationItem key={page}>
        <PaginationLink to={url} isActive={isActive} size="default">{page}</PaginationLink>
      </PaginationItem>
    )
  }

  // création de l'ellipse (...)
  const buildDots = (key: string): ReactNode => {
    return <PaginationItem key={key}>
      <PaginationEllipsis></PaginationEllipsis>
    </PaginationItem>
  }

  // construire un tableau de DOM elt et le retourner
  const buildContent = (): ReactNode[] => {
    let pages: ReactNode[] = []
    // first page
    pages.push(buildBtn({ page: firstPage, isActive: activePage === firstPage }))
    // ellipse (...)
    if (activePage > 2) {
      pages.push(buildDots("dots-1"))
    }

    // active page
    if (activePage !== firstPage && activePage !== lastPage) {
      pages.push(buildBtn({ page: activePage, isActive: activePage === activePage }))
    }
    // ellipse (...)
    if (activePage < lastPage - 1) {
      pages.push(buildDots("dots+1"))
    }

    // last page
    pages.push(buildBtn({ page: lastPage, isActive: activePage === lastPage }))
    return pages
  }

  // à chaque fois qu'une variable change, on veut voir les log
  // useEffect(() => {
  //   console.log("prevUrl:", prevUrl);
  //   console.log("activePage:", activePage);
  //   console.log("nextUrl:", nextUrl);
  // }, [activePage, prevUrl, nextUrl])

  // Si peu de résultats, pas besoin de pagination
  if(lastPage < 2) {
    return null
  }
  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} size={"default"}></PaginationPrevious>
        </PaginationItem>
        {buildContent()}
        <PaginationItem>
          <PaginationNext to={nextUrl} size={"default"}></PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;