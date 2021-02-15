import { writeEffect } from '../helpers/writeEffect'
import { unwriteEffect } from '../helpers/unwriteEffect'
import { getRandomElement } from '../helpers/getRandomElement'
import type { TypewriterEffectFn, TypewriterModeFn } from '../types'

const loopTypewriter: TypewriterEffectFn = async ({ currentNode, text }, options) => {
	await writeEffect({ currentNode, text }, options)
	const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
	const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
	fullyWritten && (await unwriteEffect(currentNode, options))
}

const mode: TypewriterModeFn = async (elements, options) => {
	while (true) {
		if (options.loop) {
			for (const element of elements) await loopTypewriter(element, options)
		} else if (options.loopRandom) {
			const element = getRandomElement(elements)
			await loopTypewriter(element, options)
		}
	}
}

export { mode }