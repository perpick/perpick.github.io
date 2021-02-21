<script lang="ts">
    import { nav, users } from "@src/stores";
    import IntersectionObserver from '@src/components/Image/IntersectionObserver.svelte'

    import mbtis from '@src/constants/mbtis.json'
    import titles from '@src/constants/titles.json'
    import gender_tags from '@src/constants/gender_tags.json'

    let gender: string = 'FEMALE'
    let title: string = 'city'

    const handleClickMBTI = (mbti: { mbti: string; sub_title: string; advice: string; title: string; detail: string; word: string; animal: string; best: string; best_title: string; }) => {
        $users.selects = [gender, title, ...mbti.mbti.split(''),]
        
        $nav.current = "type"
    }
</script>

<style>
    h2 {
        font-family: KOTRA_BOLD-Bold;
        word-break: keep-all;
    }
</style>

<IntersectionObserver>
    <div class="pt-4 bg-white mb-4 shadow-lg m-4 rounded">
        <div class="flex flex-wrap">
            <div class="w-full">
                <div class="px-1 m-4">
                    <h2>성별 고르기</h2>
                    <ul class="grid grid-cols-2 gap-2">
                        {#each gender_tags as select}
                            <li class="mx-1 my-2 text-center">
                                <p 
                                    on:click={() => {
                                        gender = select.type
                                    }}
                                    class={`cursor-pointer text-xs  py-3 shadow-lg rounded block leading-normal text-white hover:bg-pb-800 hover:shadow-lg ${gender === select.type ? "bg-pb-800" : "bg-gray-200"}`} >
                                    <i class="fas fa-space-shuttle text-base mr-1"></i>  { select.emoji }
                                </p>
                            </li>
                        {/each}
                    </ul>
                <div class="px-1  m-4">
                </div>
                    <h2>타이틀 고르기</h2>
                    <ul class="grid grid-cols-4 gap-2">
                        {#each titles as select}
                            <li class="mx-1 my-2 text-center">
                                <p 
                                    on:click={() => {
                                        title = select.title
                                    }}
                                    class={`cursor-pointer text-xs  py-3 shadow-lg rounded block leading-normal text-white hover:bg-pb-800 hover:shadow-lg ${title === select.type ? "bg-pb-800" : "bg-gray-200"}`} >
                                    { select.emoji }
                                </p>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="px-1 m-4">
                    <h2>동물 고르기</h2>
                    <ul class="grid grid-cols-4 gap-2">
                        {#each mbtis as mbti}
                            <li class="mx-1 my-2 text-center" on:click={() => handleClickMBTI(mbti)}>
                                <p 
                                    class={`cursor-pointer text-xs py-3 shadow-lg rounded block leading-normal text-white  bg-white-500 bg-gray-200 hover:bg-pb-800 hover:shadow-lg`} >
                                    { mbti.emoji }
                                </p>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</IntersectionObserver>