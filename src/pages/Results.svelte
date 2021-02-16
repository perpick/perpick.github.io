<script lang="ts">
    import type { AxiosPromise, AxiosResponse } from "axios";

    import { users } from "@src/stores";
    import { PC } from '@src/utils'
    import API from '@src/api/perfumes'
  
    import Title from '@src/components/Title/Title.svelte'
    import MBTI from '@src/components/MBTI/MBTI.svelte'
    import Perfumes from '@src/components/Perfumes/Perfumes.svelte'
    import type { Filter } from "@src/models";
    
    const getTagInStrArrLen = (a: string[], t: string) => a.filter(s => s === t).length
  
    const EL = getTagInStrArrLen($users.selects, 'E')
    const IL = getTagInStrArrLen($users.selects, 'I')
    const EnI = EL > IL ? 'E' : 'I'
    const SL = getTagInStrArrLen($users.selects, 'S')
    const NL = getTagInStrArrLen($users.selects, 'N')
    const SnN= SL > NL ? 'S' : 'N'
    const TL = getTagInStrArrLen($users.selects, 'T')
    const FL = getTagInStrArrLen($users.selects, 'F')
    const TnF= TL > FL ? 'T' : 'F'
    const JL = getTagInStrArrLen($users.selects, 'J')
    const PL = getTagInStrArrLen($users.selects, 'P')
    const JnP= JL > PL ? 'J' : 'P'
    const mbti = `${EnI}${SnN}${TnF}${JnP}`
    const descriptions = PC.getDescription(mbti)
    const tags =PC.getTagsWithAttr(mbti)
  
    const gender = PC.getGender($users.selects.find(select => select === 'MALE' || select === 'FEMALE'))
    const title = PC.getTitle($users.selects.find(select => select === 'sunrise' || select === 'sunset' || select === 'city' || select === 'nature'))

    const getPerfumes = async ({matchStr, filter}: { matchStr: string, filter: Filter}, ) => {
        await new Promise( resolve => setTimeout(resolve, 2000) )
        return API.getPerfumes({ matchStr, filter })
    }
</script>

<style>
    * {
        font-family: NotoSans;
        word-break: keep-all;
    }
</style>

<div class="pt-4 pb-24 bg-white">
    {#if title && gender && tags && descriptions }
        {#await getPerfumes({ matchStr: [...title.tags, ...tags].join(" "), filter: { gender: gender.tags } })}
        <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossorigin="anonymous">
        <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span class="text-pp-500 opacity-75 top-1/2 my-0 mx-auto block relative" style="
            top: 50%;
        ">
            <i class="fas fa-circle-notch fa-spin fa-5x" />
        </span>
        </div>
        {:then perfumes} 
            <!-- <Gender gender={gender} /> -->
            <Title title={title} descriptions={descriptions}/>
            <MBTI descriptions={descriptions} tags={tags} />
            <Perfumes perfumes={perfumes.data} />
        {/await}
    {/if}
</div>