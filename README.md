# prettier-lamda

A simple lamda function that will return prettified code blocks found on a page

## Usage

POST to `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier` with the post body set to a code block to be prettified, e.g.

```
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

returns (stringified)

```
"foo(\n  reallyLongArg(),\n  omgSoManyParameters(),\n  IShouldRefactorThis(),\n  isThereSeriouslyAnotherOne()\n);\n"
```

### Example with `fetch`

```javascript
import fetch from 'isomorphic-fetch';

fetch(`https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier`, {
  method: 'POST',
  mode: 'cors',
  body: `foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());`
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.text();
  })
  .then(prettified => {
    // do something cool :)
  });
```

### Advanced

Any additional query parameters are passed directly to [`prettier`][prettier], e.g. `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier?singleQuote=true&noSemi=true` will use single quotes and no semi-colons.

[prettier]: https://github.com/prettier/prettier
