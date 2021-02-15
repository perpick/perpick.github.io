import Request from "@src/utils/HttpClient"

const Apis = {
    getPerfumes: () => {
        const { SNOWPACK_PUBLIC_ES_URL } = import.meta.env
        return Request({
            baseURL: SNOWPACK_PUBLIC_ES_URL,
            method: "POST",
            url: "/kor_perfumes/_search",
            data: {
                "query": {
                    "bool": {
                      "should": [
                        { "match": { "reviews": { "query": "친구 발랄 칭찬 청량 데일리 도전 자극 에디션 오래 용기 감동 아이 달달함 산뜻함 사랑 인기 로맨스 신선 기억 신비 니치 편리 판타지 대박 최애"} } }
                      ],
                      "filter": {
                        "terms": {
                          "gender": [ "Masculine","Shared"]
                        }
                      }
                    }
                  }
            }
        })
    }
}

export default Apis