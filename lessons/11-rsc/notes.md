## RSC

https://19.react.dev/reference/rsc/server-components

https://www.joshwcomeau.com/react/server-components/

how client/server boundaries behave and some of the pitfalls

Render a component on the server:

```tsx
import marked from "marked"; // Not included in bundle
import sanitizeHtml from "sanitize-html"; // Not included in bundle

// !!!!!! async!
async function Page({ page }) {
  // NOTE: loads *during* render, when the app is built.
  const content = await file.readFile(`${page}.md`);

  return <div>{sanitizeHtml(marked(content))}</div>;
}
```

### 04-interactivity

You can't use hooks in a server components.

- Hooks are client-side only (except `use` and `useId`)
- createContext, memo, startTransition, forwardRef is client-side only
- Async functions are server-side only.

You must set the boundary with `use client` directive.

#### "use server" directive

There is no directive for Server Components.

A common misunderstanding is that Server Components are denoted by "use server", but there is no directive for Server Components. The "use server" directive is used for Server Actions.

https://19.react.dev/reference/rsc/server-components#there-is-no-directive-for-server-components

### 05-async-components

Don't forget to remove `async` from the client component!

### 06-general-components

TODO show how a component can be used on the server and client

!!! Children that are server-rendered can be passed in to a client component

see https://19.react.dev/reference/rsc/use-client example with Copyright in the `InspirationGenerator`
