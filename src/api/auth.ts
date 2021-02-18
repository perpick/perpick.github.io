import type { AxiosPromise } from "axios"

import Request from "@src/utils/HttpClient"
import config from '@src/config/config'

import type { Auth } from '@src/models'

const Apis = {
    login: (): AxiosPromise<Auth> => 
      Request({
        url: "auth/login",
        method: "POST",
        data: {
            account: config.PP_USERNAME,
            password: config.PP_PASSWORD,
        },
    })
}

export default Apis