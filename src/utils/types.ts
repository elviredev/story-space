export type Author = {
    name: string,
    socials: string | null
}

export type News = {
    id: number,
    title: string,
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    updated_at: string,
    featured: boolean,
    launches: string[],
    events: string[],
    authors: Author[]
}

export type NewsResponse = {
    count: number,
    next: string,
    previous: string,
    results: News[]
}

export type FiltersParam = {
    term?: string
    page?: string
}

export type NewsResponseWithParams = {
    response: NewsResponse,
    params: FiltersParam
}

export type HubbleImage = {
    photo_id: number,
    photo_title: string,
    photo_description: string,
    photo_url_m: {
        thumbnail: boolean,
        filename: string,
        format: string,
        width: number,
        mimetype: string,
        id: string,
        last_synchronized: string,
        height: number,
        url: string
    },
    photo_date_taken: string,
    photo_height: number,
    photo_width: number,
    photo_license: string,
    album_id: number,
    album_name_tags: string,
    url: string,
    tags: null
}

export type HubbleImagesResponse = {
    total_count: number,
    results: HubbleImage[]
}

export type HubbleImagesResponseWithParams = {
    response: HubbleImagesResponse,
    params: FiltersParam
}

export type ApodType = {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

export type WebbImage = {
    id: string,
    observation_id: string,
    program: number,
    details: {
        mission: string,
        instruments: [
            {
                "instrument": string
            },
            {
                "instrument": string
            },
            {
                "instrument": string
            },
            {
                "instrument": string
            },
            {
                "instrument": string
            }
        ],
        suffix: string,
        description: string
    },
    file_type: string,
    thumbnail: string,
    location: string
}

export type WebbImagesResponse = {
    status_code: number,
    body: WebbImage[],
    error: string
}

export type WebbNewsAndImagery = {
  news: News[] | null,
  imagery: WebbImage[] | null
}

export type Rocket = {
    height: {
      meters: number,
      feet: number
    },
    diameter: {
      meters: number,
      feet: number
    },
    mass: {
      kg: number,
      lb: number
    },
    first_stage: {
      thrust_sea_level: {
        kN: number,
        lbf: number
      },
      trust_vacuum: {
        "kN": number,
        lbf: number
      },
      reusable: boolean,
      engines: number,
      fuel_amount_tons: number,
      burn_time_sec: number
    },
    second_stage: {
      thrust: {
        kN: number,
        lbf: number
      },
      payloads: {
        composite_fairing: {
          height: {
            meters: number,
            feet: number
          },
          diameter: {
            meters: number,
            feet: number
          }
        },
        option_1: string
      },
      reusable: boolean,
      engines: number,
      fuel_amount_tons: number,
      burn_time_sec: number
    },
    engines: {
      isp: {
        sea_level: number,
        vacuum: number
      },
      thrust_sea_level: {
        kN: number,
        lbf: number
      },
      thrust_vacuum: {
        kN: number,
        lbf: number
      },
      number: number,
      type: string,
      version: string,
      layout: string,
      engine_loss_max: number,
      propellant_1: string,
      propellant_2: string,
      thrust_to_weight: number
    },
    landing_legs: {
      number: number,
      material: string
    },
    payload_weights: [
      {
        id: string,
        name: string,
        kg: number,
        lb: number
      },
      {
        id: string,
        name: string,
        kg: number,
        lb: number
      },
      {
        id: string,
        name: string,
        kg: number,
        lb: number
      },
      {
        id: string,
        name: string,
        kg: number,
        lb: number
      }
    ],
    flickr_images: string[],
    name: string,
    type: string,
    active: boolean,
    stages: number,
    boosters: number,
    cost_per_launch: number,
    success_rate_pct: number,
    first_flight: string,
    country: string,
    company: string,
    wikipedia: string,
    description: string,
    id: string
}

export type SpaceXNewsAndRockets = {
  news: News[] | null,
  rockets: (Rocket | null)[] | null
}

export type LandingPageNewsApodHubbles = {
  news: News[] | null,
  apod: ApodType | null,
  hubbles: HubbleImage[] | null
}