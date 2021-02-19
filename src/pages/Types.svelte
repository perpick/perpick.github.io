<script lang="ts">
    import { nav, users } from "@src/stores";

    import mbtis from '@src/constants/mbtis.json'

    let gender: string = 'FEMALE'
    let title: string = 'sunrise'

    const handleClickMBTI = (mbti: { mbti: string; sub_title: string; advice: string; title: string; detail: string; word: string; animal: string; best: string; best_title: string; }) => {
        $users.selects = [...mbti.mbti.split(''), gender, title]
        
        $nav.current = "type"
    }
</script>

<style>
    h2 {
        font-family: KOTRA_BOLD-Bold;
        word-break: keep-all;
    }
</style>

<div class="pt-4 bg-white mb-4 shadow-lg m-4 rounded">
    <div class="flex flex-wrap">
        <div class="w-full">
            <div class="px-1">
                <h2>성별</h2>
                <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row  justify-center items-center">
                    {#each ['FEMALE', 'MALE'] as select}
                        <li class="-mb-px mx-1 my-2 last:mr-0 flex-auto text-center">
                            <p 
                                on:click={() => {
                                    gender = select
                                }}
                                class={`cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white ${gender === select ? "bg-pb-800" : "bg-gray-300"}`} >
                                <i class="fas fa-space-shuttle text-base mr-1"></i>  { select }
                            </p>
                        </li>
                    {/each}
                </ul>
            <div class="px-1">
            </div>
                <h2>타이틀</h2>
                <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row  justify-center items-center">
                    {#each ['sunrise', 'sunset', 'city', 'nature'] as select}
                        <li class="-mb-px mx-1  my-2 last:mr-0 flex-auto text-center">
                            <p 
                                on:click={() => {
                                    title = select
                                }}
                                class={`cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white  ${title === select ? "bg-pb-800" : "bg-gray-300"}`} >
                                <i class="fas fa-space-shuttle text-base mr-1"></i>  { select }
                            </p>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="px-1">
                <h2>동물</h2>
                <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row  justify-center items-center">
                    {#each mbtis as mbti}
                        <li class="-mb-px mx-1 my-2 last:mr-0 flex-auto text-center" on:click={() => handleClickMBTI(mbti)}>
                            <p 
                                class={`cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white  bg-purple-500`} >
                                <i class="fas fa-space-shuttle text-base mr-1"></i>  { mbti.animal }
                            </p>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>