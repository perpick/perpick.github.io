<script lang="ts">
    import { users } from "@src/stores";
    import { PC } from '@src/utils'
    import API from '@src/api/perfumes'
  
    import Title from '@src/components/Title/Title.svelte'
    import MBTI from '@src/components/MBTI/MBTI.svelte'
    import Perfumes from '@src/components/Perfumes/Perfumes.svelte'
    import type { Filter } from "@src/models";
    // import Gender from '@src/components/Gender/Gender.svelte'
    
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
    const title = PC.getTitle($users.selects.find(select => select === 'sunrise' || select === 'sunset'))
  
    const getPerfumes = async ({matchStr, filter}: { matchStr: string, filter: Filter}, ) => {
    //   const perfumes = await API.getPerfumes<any>({ matchStr, filter })
  
      return API.getPerfumes<any>({ matchStr, filter })
    }
</script>

<style>
    * {
        font-family: NotoSans;
    word-break: keep-all;
    }
</style>

<div class="divide-y divide-purpick-100">
    {#if title && gender && tags && descriptions }
    {#await getPerfumes({ matchStr: [...title.tags, ...tags].join(" "), filter: { gender: gender.tags } })}
        Loading...
    {:then perfumes} 
        <!-- <Gender gender={gender} /> -->
        <Title title={title} descriptions={descriptions}/>
        <MBTI descriptions={descriptions} tags={tags} />
        <Perfumes perfumes={perfumes.data.hits.hits} />
    {/await}
    {/if}
</div>