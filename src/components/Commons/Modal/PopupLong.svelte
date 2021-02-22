<script lang="ts">
  export let descHead: string, descBody: string;
</script>

<div class="tracking-widest mb-3">
  <h1 class="text-lg">🌺</h1>
  <h1 class="text-lg  pt-4">이 향수를 소개합니다!</h1>
  <br />

  <h2 class="text-base">이 향수의 브랜드는?</h2>
  <p class="text-base text-pb-900">{descHead}</p>
  <br />

  <h2 class="text-base">이 향수의 이름은?</h2>
  <p class="text-base text-pb-900">{descBody}</p>
</div>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  h2 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
</style>
