export type PerfumeSource = {
    base_main: string;
    base_sub: string[]
    brand: string
    density: string
    gender: string
    img_url: string
    launching_month: string
    launching_year: string[]
    main_scent: string[]
    middle_main: string
    middle_sub: string[]
    reviews:string[]
    sub_scent: string[]
    title: string
    top_main: string
    top_sub: string[]
}

export type Perfume = {
    _id: string
    _index: string
    _score: number
    _source: PerfumeSource
    _type: string
}

export type Perfumes = Perfume[]