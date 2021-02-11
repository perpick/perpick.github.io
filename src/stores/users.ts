import { writable } from 'svelte/store';

import type { Users } from '@src/models'

const users = writable<Users>({
    mbti: undefined,
    title: undefined,
    selects: [],
})

export default users