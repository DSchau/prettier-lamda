# prettier-lamda

A simple lamda function that will return prettified code blocks found on a page

## Usage

POST to `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier` with the post body set to a code block to be prettified, e.g.

```
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

returns

```
{
  "prettier": "foo(\n  reallyLongArg(),\n  omgSoManyParameters(),\n  IShouldRefactorThis(),\n  isThereSeriouslyAnotherOne()\n);\n"
}
```

### Advanced

Any additional query parameters are passed directly to [`prettier`][prettier], e.g. `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier?singleQuote=true` will use single quotes.

[prettier]: https://github.com/prettier/prettier
