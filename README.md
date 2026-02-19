```
$ git clone https://github.com/issueset/loro-prosemirror-ts-issue.git
$ cd loro-prosemirror-ts-issue
$ pnpm install
$ pnpm run build

> loro-prosemirror-ts-issue@1.0.0 build /private/tmp/loro-prosemirror-ts-issue
> tsc

src/index.ts:6:11 - error TS2322: Type 'import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index").Plugin<any>' is not assignable to type 'import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index", { with: { "resolution-mode": "import" } }).Plugin<any>'.
  The types of 'spec.props.handleDOMEvents["fullscreenchange"]' are incompatible between these types.
    Type '(this: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index").Plugin<...>, view: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror-view/dist/index").EditorView, event: Event...' is not assignable to type '(this: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index", { with: { "resolution-mode": "import" } }).Plugin<...>, view: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror...'.
      The 'this' types of each signature are incompatible.
        Type 'import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index", { with: { "resolution-mode": "import" } }).Plugin<any>' is not assignable to type 'import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index").Plugin<any>'.
          The types of 'spec.props.handleDOMEvents["fullscreenchange"]' are incompatible between these types.
            Type '(this: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index", { with: { "resolution-mode": "import" } }).Plugin<...>, view: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror...' is not assignable to type '(this: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-state@1.4.4/node_modules/prosemirror-state/dist/index").Plugin<...>, view: import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror-view/dist/index").EditorView, event: Event...'.
              Types of parameters 'view' and 'view' are incompatible.
                Type 'import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror-view/dist/index").EditorView' is not assignable to type 'import("/private/tmp/loro-prosemirror-ts-issue/node_modules/.pnpm/prosemirror-view@1.41.6/node_modules/prosemirror-view/dist/index", { with: { "resolution-mode": "import" } }).EditorView'.
                  Types have separate declarations of a private property 'directPlugins'.

6     const plugin2: Plugin = plguin1
            ~~~~~~~


Found 1 error in src/index.ts:6

 ELIFECYCLE  Command failed with exit code 2.
$
```
