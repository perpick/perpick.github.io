import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import config from '@src/config/config'

// examples 

/**
 * examples
 * 
 * import Request from "@src/utils/HttpClient"
 * const getSample = ({ data, params }) => Request({
 *     method: 'get'.
 *     url: `/sample/${params.id}`,
 * })
 * const postSample = ({ data, params }) => Request({
 *     method: 'post'.
 *     url: `/sample`,
 *     data,
 *     params
 * })
 */

const HttpClient = axios.create({
    baseURL: config.isProd ? config.PROD_API_URL : config.DEV_API_URL,
    timeout: 3000,
    headers: {'Content-Type' : 'application/json' },
})

const handleReqFulfilled = (config: AxiosRequestConfig) => {
    return ({
        ...config,
        data: JSON.stringify(config.data),
        params: JSON.stringify(config.params),
    })
}

const handleResFulfilled = (response: AxiosResponse<unknown>) => {
    return response
}

const handleRejected = (error: unknown) => {
    return Promise.reject(error);
}

HttpClient.interceptors.request.use(handleReqFulfilled, handleRejected)
HttpClient.interceptors.response.use(handleResFulfilled, handleRejected)

export default HttpClient