## Exercise

1. Load a list of products. Make sure that the list is validated using zod.
2. Use a Server action to add a item to the cart. The product must be validated using `zsa`.
3. Make sure the returned value from the server action is also validated.

### Bonus

1. Load more data and wrap in a Suspense. Show a spinner while the data is being fetched, but only if it loaded for more than 300ms.
