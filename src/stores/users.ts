import { writable } from 'svelte/store';

import type { Users } from '@src/models'

const users = writable<Users>({
    email: '',
    selects: [],
})

export default users