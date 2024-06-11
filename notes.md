# Outline

What are the parts of React now:

- Components
- Hooks
- Actions (Server Actions)
- Directives

## New Hooks

- useActionState (replaces `useFormState`)
- useFormStatus
- useOptimistic
- use()

## New built-in components

- meta https://19.react.dev/reference/react-dom/components/meta
- script https://19.react.dev/reference/react-dom/components/script
- style https://19.react.dev/reference/react-dom/components/style
- title https://19.react.dev/reference/react-dom/components/title

```tsx
function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={post.keywords} />
      <p>Eee equals em-see-squared...</p>
    </article>
  );
}
```

https://19.react.dev/blog/2024/04/25/react-19#support-for-metadata-tags

You may still want a Metadata library -> react-helmet

## Preloading resources

```tsx
import { prefetchDNS, preconnect, preload, preinit } from "react-dom";
function MyComponent() {
  preinit("https://.../path/to/some/script.js", { as: "script" }); // loads and executes this script eagerly
  preload("https://.../path/to/font.woff", { as: "font" }); // preloads this font
  preload("https://.../path/to/stylesheet.css", { as: "style" }); // preloads this stylesheet
  prefetchDNS("https://..."); // when you may not actually request anything from this host
  preconnect("https://..."); // when you will request something but aren't sure what
}
```

## How to build a RSC framework

https://github.com/rafaelrcamargo/r19

## useEventEffect

https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
https://semaphoreci.com/blog/useeffectevent

## RSC in production

https://x.com/timneutkens/status/1791403315479171086
