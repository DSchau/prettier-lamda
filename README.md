# prettier-lamda

A simple lamda function that will return prettified code blocks found on a page

## Usage

GET to `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier?url=https://medium.com/@kentcdodds/glamorous-v4-is-here-c678fe02a39a`

### Returns

A JSON response containing an array of `blocks` corresponding to the prettified code blocks

```json
{
  "blocks": [
    "// when creating a glamorousComponentFactoryconst bigDivFactory = glamorous('div', {withProps: {big: true}})const BigDiv = bigDivFactory(({big}) => ({fontSize: big ? 20 : 10}))render(<BigDiv />) // renders with fontSize: 20render(<BigDiv big={false} />) // renders with fontSize: 10\n",
    "// applying props to an existing componentconst MyDiv = glamorous.div(({small}) => ({fontSize: small ? 10 : 20}))const SmallDiv = MyDiv.withProps({small: true})render(<SmallDiv />) // renders with fontSize: 10\n",
    "const BoldDiv = glamorous\n  .div(({ bold }) => ({ fontWeight: bold ? \"bold\" : \"normal\" }))\n  .withProps(({ bold }) => ({\n    className: bold ? \"bold-element\" : \"normal-element\"\n  }));\n",
    "render(<BoldDiv />); // renders <div class=\"bold-element\" /> with fontWeight: boldrender(<BoldDiv bold={false} />) // renders <div class=\"normal-element\" /> with fontWeight: normal\n",
    "const FormInput = glamorous\n  .input(\n    {\n      /* styles */\n    }\n  )\n  .withProps(props => ({\n    pattern: props.creditCard ? creditCardPattern : null\n  }));\n",
    "render(<glamorous.Div marginTop={20} />); // renders <div /> with margin-top: 20px;\n",
    "const MyDiv = glamorous('div', {propsAreCssOverrides})({marginTop: 20})render(<MyDiv marginTop={10} />)// renders <div /> with margin-top: 10px;",
    "const MyArticle = glamorous(glamorous.Article)({marginBottom: 10})render(<MyArticle paddingLeft={20} />)// renders <article /> with margin-bottom: 10px; padding-left: 20px;",
    "const pureDivFactory = glamorous('div', {  shouldClassNameUpdate(props, previousProps, context, previousContext) {    // return `true` to update the classname and    // `false` to skip updating the class name    return true  },})const Div = pureDivFactory({marginLeft: 1})render(<Div css={{marginLeft: 2}} />)// this will render:// <div />// with {marginLeft: 2}",
    "// Appconst myRedText = glamorous.div({  label: 'labelForRedText',  color: 'red',})\n",
    "function App() {\n  return <myRedText>Whoa!</myRedText>;\n}\n",
    "render(<App />, document.getElementById(\"root\")); // result<div tabindex=\"0\" class=\"css-labelforredtext-1cz491u\">Whoa!</div>\n",
    "import React from 'react'import 'react-primitives'import glamorous from 'glamorous-primitives'",
    "const StyledView = glamorous.view({\n  display: \"flex\",\n  justifyContent: \"center\",\n  alignItems: \"center\"\n});\n",
    "const StyledText = glamorous.text({\n  fontSize: 25,\n  marginTop: 80,\n  color: \"pink\"\n});\n",
    "export default class App extends React.Component {\n  render() {\n    return (\n      <StyledView>\n        {\" \"}<StyledText>ðŸ’„ glamorous-primitives ðŸ’„</StyledText>{\" \"}\n      </StyledView>\n    );\n  }\n}\n",
    "const MyStyledView = glamorous.view({ margin: 1 });\n",
    "<MyStyledView>\n  {content}\n</MyStyledView>; // rendered output: <View style={{margin: 1}}>{content}</View>// styles applied: {margin: 1}// style is also cached and registered with `StyleSheet`\n",
    "const MyDynamicallyStyledSpan = glamorous.span((props, theme) => ({\n  fontSize: 20,\n  color: theme.colors.primary\n}));\n",
    "const MyDynamicallyStyledSpan = glamorous.span(({ theme }) => ({\n  fontSize: 20,\n  color: theme.colors.primary\n}));\n"
  ]
}
```

### Advanced

Any additional query parameters are passed directly to [`prettier`][prettier], e.g. `https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier?url=https://medium.com/@kentcdodds/glamorous-v4-is-here-c678fe02a39a&singleQuote=true` will use single quotes.

[prettier]: https://github.com/prettier/prettier
