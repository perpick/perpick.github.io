<script lang="ts">
    export let descHead: string, descBody: string;
  </script>
  
  <style>
    * {
      font-family: HangeulNuri-Bold;
      word-break: keep-all;
    }
  </style>
  
  <h1 class="text-lg">🎉 이 향수를 소개합니다! 🍾</h1>
  <br />
  
  <h2 class="text-base">이 향수의 브랜드는?</h2>
  <p class="text-base text-pb-900">{ descHead }</p>
  <br />

  <h2 class="text-base">이 향수의 이름은?</h2>
  <p class="text-base text-pb-900">{ descBody }</p>
  