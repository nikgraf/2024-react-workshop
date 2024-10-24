## RSC/RSA Pitfalls

### Closure data encryption

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#closures-and-encryption

### Do not auth in layout (Next.js)!

https://x.com/sebmarkbage/status/1765415322247426530

But also noticed in Expo Router the component is rendered once and then cached (kind of makes sense)

### What happens when you make a breaking change?

You client still has the old version on the client and tries to request a new one

### Exposing data

https://19.react.dev/reference/react/experimental_taintObjectReference
https://19.react.dev/reference/react/experimental_taintUniqueValue

https://nextjs.org/blog/security-nextjs-server-components-actions

Do validate everything!

### Caching

https://19.react.dev/reference/react/cache

## Patterns

### Logout is a <form>, not a <Link>

Source: https://x.com/rauchg/status/1757223214244384922?s=46&t=eemEy7xUHtm13BKhfZK2lw

### CSRF in general not needed for RSA

https://nextjs.org/blog/security-nextjs-server-components-actions#csrf

All Server Actions can be invoked by plain <form>, which could open them up to CSRF attacks. Behind the scenes, Server Actions are always implemented using POST and only this HTTP method is allowed to invoke them. This alone prevents most CSRF vulnerabilities in modern browsers, particularly due to Same-Site cookies being the default.

### Form validation

https://conform.guide/
https://zsa.vercel.app/docs/introduction

#### ZSA

- Validated inputs/outputs with zod (hence the name Zod Server Actions)
- Procedures (aka middleware) that pass context to your server actions
- React Query integration for querying server actions in client components

It does a fantastic job in form validation and it works with `useActionState` and react-query.

Checkout the best practices: https://zsa.vercel.app/docs/best-practices

#### Parse, don't validate

Original: https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/

-> inspired Elm

Practical example:

https://itnext.io/parse-dont-validate-incoming-data-in-typescript-d6d5bfb092c8

### Show a Spinner, but not right await

https://github.com/smeijer/spin-delay

### Async local storage

Async local storage for Node https://react-server-components.epicweb.dev/02/04/problem

```tsx
import { AsyncLocalStorage } from "node:async_hooks";

const userStorage = new AsyncLocalStorage();
```

## Rules of React

https://19.react.dev/reference/rules
