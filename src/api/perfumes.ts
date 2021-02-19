import type { AxiosPromise } from "axios"

import Request from "@src/utils/HttpClient"
import config from "@src/config/config"

import type { Filter, Perfumes, SearchedPerfume } from '@src/models'

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
          body: {
            query: {
              bool: {
                should: [
                  { match: { reviews: { query: match.join(" ")} } }
                ],
                filter: {
                  terms: {
                    ...filter
                  }
                }
              }
            }
          }
        }
      },
    }),
  genPerfumes: ({ match, filter }: { match: string[], filter: Filter}): AxiosPromise<SearchedPerfume> => 
    Request({
          baseURL: config.ES_URL,	         
          method: "POST",	      
          url: "/kor_perfumes/_search",	          
          withCredentials: true,	     
          auth: {	  
            username: config.ES_USERNAME,	
            password: config.ES_PASSWORD,	      
          },
          data: {
            query: {
              bool: {
                should: [
                  { match: { reviews: { query: match.join(" ")} } }
                ],
                filter: {
                  terms: {
                    ...filter
                  }
                }
              }
            }            
          }	            
    })
}

export default Apis