import Request from "@src/utils/HttpClient"
import config from "@src/config/config"
import type { Filter } from '@src/models'
import type { AxiosPromise } from "axios"

const Apis = {
    getPerfumes: <T>({ matchStr, filter }: { matchStr: string, filter: Filter}): AxiosPromise<T> => {
      return Request({
          baseURL: config.ES_URL,
          method: "POST",
          url: "/kor_perfumes/_search",
          withCredentials: true,
          auth: {
            username: config.ES_USERNAME,
            password: config.ES_PASSWORD,
          },
          data: {
              "query": {
                  "bool": {
                    "should": [
                      { "match": { "reviews": { "query": matchStr} } }
                    ],
                    "filter": {
                      "terms": {
                        ...filter
                      }
                    }
                  }
                }
            }
        })
    }
}

export default Apis