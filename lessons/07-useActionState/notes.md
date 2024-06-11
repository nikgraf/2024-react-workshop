### useActionState

```ts
function useActionState<State>(
  action: (state: Awaited<State>) => State | Promise<State>,
  initialState: Awaited<State>,
  permalink?: string
): [state: Awaited<State>, dispatch: () => void, boolean];
```

https://github.com/facebook/react/pull/28491 (why it replaces `useFormState`)

Automatically reset forms after action finishes #28804 https://github.com/facebook/react/pull/28804 (only uncontrolled inputs!!!) - basically a `form.reset()` after the action is done

#### requestFormReset

Why is this useful? Component libraries can implement their own custom, progressively-enhanced action APIs without losing any built-in functionality: https://github.com/facebook/react/pull/29019
Source: https://x.com/acdlite/status/1788038539998908720

```tsx
import { requestFormReset } from "react-dom";

// To implement progressive enhancement, pass both a form action *and* a
// submit event handler. The action is used for submissions that happen
// before hydration, and the submit handler is used for submissions that
// happen after.
<form
  action={action}
  onSubmit={(event) => {
    // After hydration, we upgrade the form with additional client-
    // only behavior.
    event.preventDefault();

    // Manually dispatch the action.
    startTransition(async () => {
      // (Optional) Reset any uncontrolled inputs once the action is
      // complete, like built-in form actions do.
      requestFormReset(event.target);

      // ...Do extra action-y stuff in here, like setting a custom
      // optimistic state...

      // Call the user-provided action
      const formData = new FormData(event.target);
      await action(formData);
    });
  }}
/>;
```
