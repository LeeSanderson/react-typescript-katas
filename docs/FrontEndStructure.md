# Frontend Structure

React applications can be difficult to navigate and understand. By providing a simple, well documented structure the philosophy outlined below intends to simplify applications - making them easier to understand and easier to onboard new developers.

> The concepts here are based upon ideas presented by [Laurence Lord](https://github.com/LL782/) during an talk given at the internal [Codurance](https://www.codurance.com/) Technical Community of Practice meetup.

## 1. One directory per view

- Each view organised as follows
  - `components`
  - `hooks`
  - `mockData`
  - `model`
- Code shared by more than one view is moved to one of the following shared locations

  - `context` (if the code represents global shared state)
  - `i18n` (if the code support internationalisation)
  - `sharedModels` (if the code represents models e.g. API contracts etc)
  - `UIPalette` (if the code represents a reusable visual component)
  - `core` (if the code does not fit into any of the above categories e.g. auth, http)

- Code from one view should never be imported by code from another view

- Keep code that is only used in one place close to where it is used

**Key benefits:**

1. Easy to follow, widely recommended way to organise (less deliberation)
1. Views directory provides a customer focused overview of the app
1. Locating code close to where it is used make reading easier
1. Making it explicit when code is used in multiple places helps reduce bugs

_Example:_

```text
  /src/
    index.tsx
    topLevelRouter.tsx
    /context/
    /core/
      /auth/
      /http/

    /i18n/
    /sharedModels/
    /UIPalette/
    /Views/
      /Home/
        /components/
        /hooks/
        /mockData/
        /model/

```

## 2. Position outer and inner tests within view directories

- Put integration (or outer) tests at top level of each view
- Put unit (or inner) tests next to implementation files

**Key benefits:**

1. Easily put integration tests in context

_Example:_

```text
  /Home/
    index.tsx
    integration.spec.ts

    /components/
      /Layout/
        Layout.tsx
        Layout.spec.ts
        Layout.styles.css

```

**Rejected ideas:**

- Put some (or all) tests in a **tests** directory at the top of each view

**Rejected because:**

1. Preference to have unit tests in same directory as implementation code
1. Preference to avoid creating directories around a single file

## 3. Use `index.ts` files for view directories only

- Include an index file at the top of each view
  - Export the top level component for that view, generally the view's router file.
- Avoid index files in other places.

**Key benefits:**

1. Provides a clear entry point for each view
1. No need to manually update index files for other directories

_Example:_

```text
  /Home/
    index.tsx

    /components/
    /hooks/
    /mockData/
    /model/

```

## 4. Prefer shorter names

**Key benefits:**

1. Shorter file paths
1. Easier to read file tree

_Example:_

```text
  /src/views/Home/components/HomeLayout/HomeLayout.tsx

    vs

  /src/views/Home/components/Layout/Layout.tsx

```

**Rejected ideas:**

- Avoid using directories when a filename prefix will do

_Example (rejected):_

```text
  /Home/
    index.tsx

    /components/
      HomeLayout.tsx
      HomeLayout.spec.tsx
      HomeLayout.styles.css
      HomeNavBar.tsx
      HomeNavBar.spec.tsx
      HomeNavBar.styles.tsx

```

**Rejected because:**

1. Prefer less repetition
1. Prefer easier to scan file tree

## 5. `i18n` directory organised by domain concepts

- Keep the `i18n` code in a top level directory based on domain entity

**Key benefits:**

1. Easy to reference existing patterns for `locale`

_Example:_

```text
  /src/
    /i18n/
      context.tsx
      i18n.ts
      keyMap.ts
      types.ts

      /de/
        /Users/
        /Search/
        ...

      /en/
      /es/
      /fr/

```

## 6. Put utility code in the right place

- If it doesn't seem to be a `component`, `context`, `hook`, or `styling`
  - If it is part of the mental model of what the application does maybe it fits in `/model/`
  - If not, follow the general guidelines:
    - Code from one view should never be imported by code from another view
    - Keep code that is only used in one place close to where it is used
  - If necessary update these guidelines
    > Remember: It's often more productive to treat this methodology as helpful examples rather than strict rules to follow.

## 7. Use `hooks` for business logic where possible

- Hooks can be used for most code this complexity extracted from a component
- For [legacy] code that isn't written using the hook pattern
  - Try to put code in one of the places offered by the guidelines
    - _A place for everything and everything in its place_
  - Move the code into the `hooks` directory
    - This is an indicator that the code should be refactored into a hook
    - It makes it easier for the next developer to spot when something is out of place

**Key benefits:**

1. How to structure code becomes more obvious when the pattern is consistent
1. Regarding why Hooks are better:
   - See React docs on [Motivation for Hooks](https://reactjs.org/docs/hooks-intro.html#motivation)
   - Hooks aren't always better but they are an option
   - The benefit is sometimes purely down to consistency

_Example:_

`EmailValidator` provides a function called `isEmailValid` that is imported and called inside `EmailInput` (and used in `useEffect` and input handlers). Rather than importing the function directly, a hook can be created that returns the function.

```typescript
import { useEmailValidator } from "../hooks/EmailValidator";

const EmailInput = ({ text }) => {
  const isEmailValid = useEmailValidator();
  const [email, setEmail] = useState("");
  const [emailValidationError, setEmailValidationError] = useState(false);

  useEffect(() => {
    if (isEmailValid(text)) {
      setEmail(text);
    }
  }, []);

  const validateEmail = (email: string) => {
    if (!isEmailValid(email)) {
      setEmailValidationError(true);
      return;
    }

    setEmailValidationError(false);
    setEmail(email);
  };

  return (
    <HTMLTextField onChange={({ target }) => validateEmail(target.value)} />
  );
};

```

## 8. General guidelines

- If code is only used in one component of the UI palette or view it should live there.
- Nothing should be imported from one view to another.
- If something is need by more that once view it should be moved to a shared directory.
  - e.g. `context`, `sharedModels`, `UIPalette`

## Final Proposal

Bringing all of the above guidelines together the following shows how code could be structured.
This vision doesn't claim to be perfect but is intended as a starting point and is opinionated enough to make it easy to follow

_Example:_

```text
  /src/
    index.tsx <-- App entry point
    topLevelRouter.tsx

    /context/
      GlobalStateContext.tsx

    /core/
      /auth/
        cookies.ts
        index.ts
        refreshLogins.ts
        ...

      /http/
        fetcher.tsx
        index.ts
        request.ts
        types.ts

    /i18n/
      context.tsx
      i18n.ts
      keyMap.ts
      types.ts

      /de/
          /Users/
          /Search/
          ...

      /en/
      /es/
      /fr/

    /sharedModels/
        User.d.ts

    /UIPalette/
      /components/
        /EmailInput/
          EmailInput.tsx
          EmailInput.spec.tsx
          EmailInput.styles.css

      /hooks/
        useEmailValidator.ts

    /Views/
      /Home/
        index.tsx
        integration.spec.ts

        /components/
          /Layout/
            Layout.tsx
            Layout.spec.ts
            Layout.styles.css

        /hooks/
        /mockData/
        /model/

      /Search/
      /Profile/

```
