const config = {
    mode: import.meta.env.MODE || 'development',
    apiUrl: import.meta.env.SNOWPACK_PUBLIC_API_URL || '',
    esPassword: import.meta.env.SNOWPACK_PUBLIC_ES_PASSWORD || '',
    esUrl: import.meta.env.SNOWPACK_PUBLIC_ES_URL || '',
    esUsername: import.meta.env.SNOWPACK_PUBLIC_ES_USERNAME || '',
    gaTMI: import.meta.env.SNOWPACK_PUBLIC_GA_TAG_MANAGER_ID || '',
}

export default config