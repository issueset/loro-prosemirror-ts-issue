import { type LoroDocType, LoroUndoPlugin } from "loro-prosemirror"
import type { Plugin } from "prosemirror-state"

export function createPlugin(doc: LoroDocType): Plugin {
    const plguin1 = LoroUndoPlugin({ doc })
    const plugin2: Plugin = plguin1
    return plugin2
}
