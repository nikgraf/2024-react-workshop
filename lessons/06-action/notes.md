## Action (Form Actions)

https://react.dev/blog/2024/04/25/react-19#actions (best explanation)

You can handle async code and it will give you pending states, errors, optimistic updates.

By convention, functions that use async transitions are called “Actions”.
https://react.dev/blog/2024/04/25/react-19#by-convention-functions-that-use-async-transitions-are-called-actions

https://19.react.dev/blog/2024/04/25/react-19#form-actions

## Demo

Show how it worked in React 18 - except for the error case there was an uncaught promise.

## Gotchas

- The way transitions are handled changes (see isPending when comparing React 18 vs 19)
- When throwing an error it will throw up to the next Error boundary (from React 19 on)

- <form> action

- In <input> you can overwrite the form action with `formAction` prop.
  Useful for https://19.react.dev/reference/react-dom/components/form#handling-multiple-submission-types
