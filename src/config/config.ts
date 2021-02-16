const config = {
    mode: import.meta.env.MODE || 'development',
    isProd: import.meta.env.MODE === 'production',
    isDev: import.meta.env.MODE === 'development',
    API_URL: import.meta.env.SNOWPACK_PUBLIC_API_URL || '',
    ES_PASSWORD: import.meta.env.SNOWPACK_PUBLIC_ES_PASSWORD || '',
    ES_URL: import.meta.env.SNOWPACK_PUBLIC_ES_URL || '',
    ES_USERNAME: import.meta.env.SNOWPACK_PUBLIC_ES_USERNAME || '',
    GA_TAG_MANAGER_ID: import.meta.env.SNOWPACK_PUBLIC_GA_TAG_MANAGER_ID || '',
}

export default config