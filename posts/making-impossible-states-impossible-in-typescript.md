---
title: "Making Impossible States Impossible in TypeScript"
description: ""
date: "2023-05-25"
---

## What are impossible states?

Impossible states arise when our application enters a condition that should be functionally impossible.

For example, let's say we want to represent some field data for it to be rendered later.

```typescript
type Field = {
  name: string;
  type: "text" | "number" | "select" | "checkbox";
  value: string | number | boolean;
  options?: string[];
};
```

Altough this type seems to make sense at a first glance, this type allows you to have impossible representations. For example:

```typescript
const field = {
  name: "remember_me",
  type: "checkbox",
  value: 5,
  options: ["choice 1", "choice 2"],
};
```

In the above example, a checkbox field has a numeric value, and unnecessary options, neither of which make sense.

Now, depending on how the code that uses these field types was written, it might actually be impossible for the a field to end up in an impossible state, but
because it can, we can assume that at some point, it will end up, causing bugs or other issues.

## How to prevent them

The key to avoiding these illegal states is to carefully design our types, we should make these states impossible to represent at compile time. For example, we
could redesign our `Field` type using a discriminated union like this:

```typescript
type TextField = {
  name: string;
  type: "text";
  value: string;
};

type NumberField = {
  name: string;
  type: "number";
  value: number;
};

type SelectField = {
  name: string;
  type: "select";
  value: string;
  options: string[];
};

type CheckboxField = {
  name: string;
  type: "checkbox";
  checked: boolean;
};

type Field = TextField | NumberField | SelectField | CheckboxField;
```

In this case, the compiler forces us to first check the `type` of the field before accessing any of the fields that are not shared between all the types of the union.

For example, this is what we'd get if we tried to access `options` directly on a `Field`:

```typescript
function printFieldOptions(field: Field) {
  console.log(field.options); // Error
  // Property 'options' does not exist on type 'Field'.
  //  Property 'options' does not exist on type 'TextField'.
}
```

The compiler would force us to do it like this:

```typescript
function printFieldOptions(field: Field) {
  if (field.type === "checkbox") {
    console.log(field.options); // we know options exists in field
  } else {
    ...
  }
}
```

## React Component States

The same thing can happen in React state when we split states that are should stay together. To following example illustrates this scenario:

```typescript
const [data, setData] = useState<Data | null>(null);
const [error, setError] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("your/api/endpoint");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = (await response.json()) as Data;
      setData(data);
    } catch (error) {
      setError(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, []);
```

The way the states are set up could be problematic because we could end up in a state where `data` and `error` are both set, which doesn't make sense.

To avoid those impossible states, we could rewrite the state to be a discriminated union:

```typescript
type State =
  | { status: "loading" }
  | { status: "success"; data: Data }
  | { status: "error"; error: string };

const [state, setState] = useState<State>({ status: "loading" });

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("your/api/endpoint");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = (await response.json()) as Data;
      setState({ status: "success", data });
    } catch (error) {
      setState({ status: "error", error: error.toString() });
    }
  };

  fetchData();
}, []);
```

In this setup, we encapsulate data, error, and loading status into a single state object. This structure ensures that the state of our component is always valid, as each state variation is well-defined.

# Conclusion

Representing our states in such a way where it's impossible to have these incorrect states is one way to eliminate a whole class of bugs and make our code more robust.

If you're interested in learning more, watch this talk by Richard Feldman: [https://www.youtube.com/watch?v=IcgmSRJHu_8](https://www.youtube.com/watch?v=IcgmSRJHu_8)
