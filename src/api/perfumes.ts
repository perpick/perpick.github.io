import type { AxiosPromise } from "axios"

import Request from "@src/utils/HttpClient"

import type { Filter,Perfumes } from '@src/models'

const Apis = {
    getPerfumes: ({ email, match, filter }: { email: string, match: string[], filter: Filter}): AxiosPromise<Perfumes> => 
      Request({
        url: "perfume/generate",
        method: "POST",
        data: {
          email,
          selects: match,
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