## Exercise

Show the updated cart immediately after adding a product to the cart. Use the `useOptimistic` hook to update the cart state immediately.

Replace the section in with an actual useOptimistic hook in App.tsx:

```tsx
// replace with an useOptimistic hook
const [optimisticCart, updateOptimisticCart] = [
  cart,
  (_order: { id: string; amount: number }) => undefined,
];
```

`updateOptimisticCart` is already invoked in App.tsx at the right place.
