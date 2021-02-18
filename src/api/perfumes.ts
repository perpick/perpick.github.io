import type { AxiosPromise } from "axios"

import Request from "@src/utils/HttpClient"

import type { Filter,Perfumes } from '@src/models'

const Apis = {
  getTotal: (): AxiosPromise<number> => 
    Request({
      url: "perfume/generate",
      method: "GET",
    }),
  getPerfumes: ({ email, selects, match, filter }: { email: string, selects:string[], match: string[], filter: Filter}): AxiosPromise<Perfumes> => 
    Request({
      url: "perfume/generate",
      method: "POST",
      data: {
        email,
        selects,
        search : {
          "query": {
              "bool": {
                "should": [
                  { "match": { "reviews": { "query": match.join(" ")} } }
                ],
                "filter": {
                  "terms": {
                    ...filter
                  }
                }
              }
            }
        }
      },
    })
}

export default Apis