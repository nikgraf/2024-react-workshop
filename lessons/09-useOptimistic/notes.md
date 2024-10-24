### useOptimistic

useOptimistic is a React Hook that lets you optimistically update the UI.

```ts
const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
```

Really good example: https://vercel.com/blog/whats-new-in-react-19#useoptimistic

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#optimistic-updates

https://dev.to/barrymichaeldoyle/exploring-reacts-new-useoptimistic-hook-an-early-look-1a80

https://reetesh.in/blog/react-useoptimistic-and-usetransition-hooks-explained

https://jser.dev/2024-03-20-how-does-useoptimisticwork-internally-in-react/

Gotchas:

There are still lots of situations where this will not work:

- if the list is filtered, updating an entry might lead to it not being in the list anymore afterwards
- if the list is paginated, deleting an item should pull in one from the next page

Source: https://x.com/TkDodo/status/1791793247397744837

Where to use:

- Chat messages (Slack shows the message right away, but if it never went through later turn it into an error - the other way around would be a loading spinner on every message)
- Toggle
- Like button
- Drag n Drop

General rule: Everywhere where you have multiple fast interactions. Even better if they are independent. If you need strong confirmation for the user that an action was synced you can show it in a global state (like a toast showing the saving).
