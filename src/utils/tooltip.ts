import * as Popper from '@popperjs/core'

export const tooltip = (node: any, options: any) => {
    const button = node
    const tooltipComponent = options.content
    
    let popperInstance:  Popper.Instance | null
    let componentInstance: any;
    
    const show = () => {
        componentInstance = new tooltipComponent({
            target: document.body,
            props: { title: options.title, descHead: options.descHead, descBody: options.descBody, pos: options.pos }
        })
        
        const tooltip = <HTMLElement>document.querySelector('#tooltip');
        tooltip.setAttribute('data-show', '');

        popperInstance = Popper.createPopper(button, tooltip, {
            modifiers: [{
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },],
        });
    }

    const  hide = () => {
        const tooltip = <HTMLElement>document.querySelector('#tooltip');
        tooltip.removeAttribute('data-show');
        if (popperInstance) {
            popperInstance.destroy();
            popperInstance = null;
        }
        componentInstance.$destroy()
    }
    
    button.addEventListener('mouseover', show);
    button.addEventListener('mouseout', hide);

    return {
        destroy() {
            button.removeEventListener('mouseover', show);
            button.removeEventListener('mouseout', hide);
        }
	};
}