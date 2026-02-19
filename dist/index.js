import { LoroUndoPlugin } from "loro-prosemirror";
export function createPlugin(doc) {
    const plguin1 = LoroUndoPlugin({ doc });
    const plugin2 = plguin1;
    return plugin2;
}
