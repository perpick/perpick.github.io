import App from "./components/App/App.svelte";

const app = new App({
  target: document.body,
});

export default app;

if (import.meta?.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}

declare global {
  interface Window {
    dataLayer: any[];
  }
  interface ImportMeta {
    hot: {
      accept: Function;
      dispose: Function;
    };
    env: {
      MODE: string;
      SNOWPACK_PUBLIC_DEV_API_URL: string;
      SNOWPACK_PUBLIC_PROD_API_URL: string;
      SNOWPACK_PUBLIC_GA_TAG_MANAGER_ID: string;
      SNOWPACK_PUBLIC_PP_USERNAME: string;
      SNOWPACK_PUBLIC_PP_PASSWORD: string;
      SNOWPACK_PUBLIC_ES_URL: string;
      SNOWPACK_PUBLIC_ES_USERNAME: string;
      SNOWPACK_PUBLIC_ES_PASSWORD: string;
      SNOWPACK_PUBLIC_KAKAO_KEY: string;
    };
  }
}
