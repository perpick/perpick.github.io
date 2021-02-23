<script lang="ts">
  import type { PerfumeSource } from "@src/models";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";
  import Content from "@src/components/Commons/Modal/Content.svelte";
  import Modal from "@src/components/Commons/Modal/Modal.svelte";
  import Image from "@src/components/Image/Image.svelte";

  export let source: PerfumeSource;
</script>

<div class="px-2 py-4">
  <div class="p-2 image_wrap">
    <IntersectionObserver once={true} let:intersecting>
      {#if intersecting}
        <Image src={source.img_url} alt={source.title} />
      {/if}
    </IntersectionObserver>
  </div>
  <Modal>
    <Content
      title="자세히 보기"
      image={source.img_url}
      rows={[
        { title: "이 향수의 브랜드는?", content: [source.brand] },
        { title: "이 향수의 이름은?", content: [source.title] },
        {
          title: "이 향수가 출시된 시기는?",
          content: [
            source.launching_year > "0" && source.launching_month > "0"
              ? `${source.launching_year}년 ${source.launching_month}월`
              : "정보가 부족해요!",
          ],
        },
        { title: "이 향수의 확산력은?", content: [source.density] },
        // {
        //   title: "이 향수와 어울리는 성별은?",
        //   content: [
        //     source.gender === "Feminine"
        //       ? "여성"
        //       : source.gender === "Shared"
        //       ? "중성"
        //       : "남성",
        //   ],
        // },
        {
          title: "이 향수가 향기 계열은?",
          content:
            source.main_scent.length > 0 || source.sub_scent.length > 0
              ? [...source.main_scent, ...source.sub_scent]
              : ["정보가 부족해요!"],
        },
        {
          title: "이 향수가 탑 노트는?",
          content:
            source.top_main || source.top_sub.length > 0
              ? [source.top_main, ...source.top_sub]
              : ["정보가 부족해요!"],
        },
        {
          title: "이 향수가 미들 노트는?",
          content:
            source.middle_main || source.middle_sub.length > 0
              ? [source.middle_main, ...source.middle_sub]
              : ["정보가 부족해요!"],
        },
        {
          title: "이 향수가 베이스 노트는?",
          content:
            source.base_main || source.base_sub.length > 0
              ? [source.base_main, ...source.base_sub]
              : ["정보가 부족해요!"],
        },
      ]}
    />
  </Modal>
</div>

<style>
  .image_wrap {
    min-width: 3rem;
    max-width: 6rem;
  }
</style>
