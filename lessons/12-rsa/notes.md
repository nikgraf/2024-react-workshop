## React Server Actions (RSA)

https://19.react.dev/reference/rsc/use-server#serializable-parameters-and-return-values

Arguments to Server Actions are fully client-controlled. For security, always treat them as untrusted input, and make sure to validate and escape arguments as appropriate.

In any Server Action, make sure to validate that the logged-in user is allowed to perform that action.

https://19.react.dev/reference/rsc/use-server#security

### 01-server-action in a server component

A simple button click (no form action yet)

(Didn't work) - show the error when you invoke it directly

https://19.react.dev/reference/rsc/server-actions#creating-a-server-action-from-a-server-component

### 02-server-action in a client component

The action must be located in another file!

Don't use `"use server"` in a function in a "use server" module.

### 03-server-form-action

So far we only saw simple async actions onClick. Forms are special.

The tricky part here: the server component is not rendered again, the form reset and on the client we can't react on it.

That said: It can be composed.

### 04-server-form-action with a useActionState

We want to leverage the returning data and isPending state

### Interesting

You can add multiple ones on parallel: https://x.com/adamwathan/status/1797365974326264292
