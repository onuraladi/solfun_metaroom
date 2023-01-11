import { defaultSSROptions } from "screen-space-reflections"
import { Pane } from "tweakpane"

export class SSRDebugGUI {
	constructor(ssrEffect, params = defaultSSROptions) {
		const pane = new Pane()
		this.pane = pane
		pane.containerElem_.style.userSelect = "none"
		pane.containerElem_.style.width = "380px"

		pane.on("change", ev => {
			const { presetKey } = ev

			ssrEffect[presetKey] = ev.value
		})

	
		

		
		




		
	}
}
