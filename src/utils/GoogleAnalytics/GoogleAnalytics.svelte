<script lang="typescript">
  import { onMount } from "svelte";
  import loader from "@beyonk/async-script-loader";
  import { gaStore } from "./store";
  // export let subTagManagerId: string[];
  export const enabled = true;

  const { SNOWPACK_PUBLIC_GA_TAG_MANAGER_ID } = import.meta.env;
  onMount(() => {
    if (!enabled) {
      return;
    }
    loader(
      [
        {
          type: "script",
          url: `//www.googletagmanager.com/gtag/js?id=${SNOWPACK_PUBLIC_GA_TAG_MANAGER_ID}`,
        },
      ],
      test,
      callback,
    );
  });

  const test = () =>
    Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer);

  const gtag = (...args: any[]) => {
    window.dataLayer.push(args);
  };

  const callback = () => {
    window.dataLayer = window.dataLayer || [];

    gtag("js", new Date());
    // subTagManagerId.forEach((p) => {
    //   gtag("config", p);
    // });

    return gaStore.subscribe((queue) => {
      let next = queue.length && queue.shift();
      while (next) {
        const { event, data } = next;
        gtag("event", event, data);
        next = queue.shift();
      }
    });
  };
</script>
