<script lang="ts">
  import { nav, users } from "@src/stores";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";

  import mbtis from "@src/constants/mbtis.json";
  import titles from "@src/constants/titles.json";
  import gender_tags from "@src/constants/gender_tags.json";

  let gender = "FEMALE";
  let title = "dawn";

  const handleClickMBTI = (mbti: {
    mbti: string;
    sub_title: string;
    advice: string;
    title: string;
    detail: string;
    word: string;
    animal: string;
    best: string;
    best_title: string;
  }) => {
    $users.selects = [gender, title, ...mbti.mbti.split("")];

    $nav.current = "type";
  };
</script>

<IntersectionObserver>
  <div class="pt-4 bg-white mb-4 shadow-lg m-4 rounded init_anim">
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="px-1 m-4">
          <h2>성별</h2>
          <ul class="grid grid-cols-2 gap-2">
            {#each gender_tags as select}
              <li class="mx-1 my-2 text-center">
                <p
                  on:click={() => {
                    gender = select.type;
                  }}
                  class={`cursor-pointer text-xs  py-3 shadow-lg rounded block leading-normal text-white hover:bg-pb-600 hover:shadow-lg ${
                    gender === select.type ? "bg-pb-600" : "bg-gray-200"
                  }`}
                >
                  <i class="fas fa-space-shuttle text-base mr-1" />
                  {select.emoji}
                </p>
              </li>
            {/each}
          </ul>
          <div class="px-1  m-4" />
          <h2>선호하는 시간대</h2>
          <ul class="grid grid-cols-4 gap-2">
            {#each titles as select}
              <li class="mx-1 my-2 text-center">
                <p
                  on:click={() => {
                    title = select.type;
                  }}
                  class={`cursor-pointer text-base py-3 shadow-lg rounded block leading-normal font-bold hover:bg-pb-600 hover:text-white hover:shadow-lg ${
                    title === select.type
                      ? "bg-pb-600 text-white"
                      : "bg-gray-200 text-pb-600"
                  }`}
                >
                  {select.title}
                </p>
              </li>
            {/each}
          </ul>
        </div>
        <div class="px-1 m-4">
          <h2>궁금한 동물 유형</h2>
          <ul class="grid grid-cols-4 gap-2">
            {#each mbtis as mbti}
              <li
                class="mx-1 my-2 text-center"
                on:click={() => handleClickMBTI(mbti)}
              >
                <p
                  class={`cursor-pointer text-xs py-3 shadow-lg rounded block leading-normal text-white bg-white-500 bg-gray-200 hover:bg-pb-600 hover:shadow-lg`}
                >
                  {mbti.emoji}
                </p>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</IntersectionObserver>

<style>
  h2 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  .init_anim {
    animation-name: init;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  @keyframes init {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
</style>
