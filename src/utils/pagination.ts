
type BuildUrlProps = {
    page: number
    pathname: string
    search: string
}

/**
 * @desc Création dynamique d'une URL
 * @params { page, pathname, search }
 * @return string url
 */
export const buildUrl = ({ page, pathname, search }: BuildUrlProps): string => {
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", page.toString())

    const url = `${pathname}?${searchParams.toString()}`
    return url
}

type builPrevAndNextUrlsProps = {
    page: number
    pathname: string
    search: string
    lastPage: number
}

/**
 * @desc Récupérer les URLs qui se cachent derrière les boutons previous et next
 * @params { page, pathname, search, lastPage }
 * @returns objet {prevUrl, nextUrl}
 */

export const builPrevAndNextUrls = ({ page, pathname, search, lastPage }: builPrevAndNextUrlsProps): { prevUrl: string, nextUrl: string } => {
    let prevPage = page - 1
    // si on est sur page < 1 on va sur la dernière page (on fait une boucle)
    if(prevPage < 1) prevPage = lastPage
    // on construit l'URL
    const prevUrl = buildUrl({ page: prevPage, pathname, search })

    let nextPage = page + 1
    // si on est sur la dernière page, on va sur la page 1
    if(nextPage >= lastPage) nextPage = 1
    // on construit l'URL
    const nextUrl = buildUrl({ page: nextPage, pathname, search })

    return { prevUrl, nextUrl }
}

// page : 7
// pathname : /news
// search : ?term=hubble

// lastPage: 10