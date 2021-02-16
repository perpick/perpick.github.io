import Request from "@src/utils/HttpClient"
import type { Filter } from '@src/models'
import type { AxiosPromise } from "axios"

const Apis = {
    getPerfumes: <T>({ matchStr, filter }: { matchStr: string, filter: Filter}): AxiosPromise<T> => {
        const { SNOWPACK_PUBLIC_ES_URL, SNOWPACK_PUBLIC_ES_USERNAME, SNOWPACK_PUBLIC_ES_PASSWORD } = import.meta.env
        return Request({
            baseURL: SNOWPACK_PUBLIC_ES_URL,
            method: "POST",
            url: "/kor_perfumes/_search",
	withCredentials: true,
            auth: {
              username: SNOWPACK_PUBLIC_ES_USERNAME,
              password: SNOWPACK_PUBLIC_ES_PASSWORD,
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