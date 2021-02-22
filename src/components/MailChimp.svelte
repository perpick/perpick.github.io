<script lang="ts">
  import { nav, users } from "@src/stores";
</script>

<link
  href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
  rel="stylesheet"
  type="text/css"
/>
<div id="mc_embed_signup" class="flex justify-center m-4">
  <form
    action="https://perpick.us7.list-manage.com/subscribe/post?u=ab790a36cc4ef5106067ad42d&amp;id=2066ae7171"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
    novalidate
  >
    <div id="mc_embed_signup_scroll">
      <label for="mce-EMAIL" class="text-gray-500"
        >하단의 구독을 통해 퍼픽의 최신 소식을 만나세요!</label
      >
      <input
        type="email"
        value={$users.email}
        name="EMAIL"
        class="email"
        id="mce-EMAIL"
        placeholder="이메일을 입력해주세요!"
        required
      />
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text"
          name="b_ab790a36cc4ef5106067ad42d_2066ae7171"
          tabindex="-1"
          value=""
        />
      </div>
    </div>
    <div class="clear mt-4">
      <input
        type="submit"
        value="함께하기"
        name="subscribe"
        id="mc-embedded-subscribe"
        class="py-2 px-4 text-pp-50 bg-pp-800 hover:bg-pp-50 hover:text-pp-800 active:bg-pp-50 active:bg-text-pp-800 rounded cursor-pointer"
      />
    </div>
  </form>
</div>

<style type="text/css">
  #mc_embed_signup {
    clear: left;
    /* font:14px Helvetica,Arial,sans-serif;  */
  }
  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
