# prettier-lamda

A simple lamda function that will return prettified code blocks found on a page

## Usage

GET to `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier?url=https://google.com`

### Returns

A JSON response containing an array of `blocks` corresponding to the prettified code blocks

### Advanced

Any additional query parameters are passed directly to [`prettier`][prettier], e.g. `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier?url=https://google.com&singleQuote=true` will use single quotes.

[prettier]: https://github.com/prettier/prettier
