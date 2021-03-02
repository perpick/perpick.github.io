<script>
  import { onMount } from "svelte";

  export let total = 326872;

  onMount(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        Kakao.init(import.meta.env.SNOWPACK_PUBLIC_KAKAO_KEY);
      }
      Kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "퍼픽 - 나만의 향수 추천",
          description: "나만을 위한 향수를 추천받으세요! #나만의향수 #인공지능 #추천 #분위기 #추억 #기념일",
          imageUrl: "http://k.kakaocdn.net/dn/Fz36y/btqYHTDb7l2/FAbm5E6xyXB3nMVjWu1Prk/kakaolink40_original.jpg",
          link: {
            mobileWebUrl: "https://perpick.github.io",
            webUrl: "https://perpick.github.io",
          },
        },
        social: {
          likeCount: total,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: "당장 추천받아 보기",
            link: {
              mobileWebUrl: "https://perpick.github.io",
              webUrl: "https://perpick.github.io",
            },
          },
        ],
      });
    }
  });
</script>

<button id="kakao-link-btn">
  <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="kakao-share-icon" />
</button>

<style>
  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>
