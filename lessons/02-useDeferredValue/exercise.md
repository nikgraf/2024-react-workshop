## Exercise 1

Leverage `useDeferredValue` and `memo` to disconnect the Table rendering from the search input. The input should feel very quick which the table lacks behind. Also indicate when the table is not up to date with a loading indicator.

Hint: you need to take the whole filter function and rendering of the table and move it to a new component that can be memoed.

## Exercise 2

Switching between the users is very slow due the slow hash calculation. Use `useDeferredValue` to defer rendering the `VerificationCode` component.

In addition show the calculating indicator in case the deferredValue currently is stale (out of date).
