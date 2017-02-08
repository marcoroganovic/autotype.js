### Sample usage

```javascript
var preTag = document.querySelector("pre");

var text = `
const TodoItem = (props) => {
  return <li data-id="{props.id}">{state.taskName}</li>;
}
`;

autoType({
  content: text,
  element: preTag,
  perChar: 150
});

```
