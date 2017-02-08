(function() {
  var text = `
  const ProductItem = (props) => {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    );
  }

  class ProductList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [
          { name: "Toast", price: 23 },
          { name: "Bacon", price: 30 },
          { name: "Coffe", price: 20 }
        ];
      }
    }

    render() {
      var products = this.state.products.map(product, i => {
        return <ProductItem 
                key={i} 
                name={product.name} 
                price={product.price} />
      });

      return (
          <table>
            {products}
          </table>
      )
    }
  }

  var $root = document.querySelector("#app");
  ReactDOM.render(<ProductList />, $root);
  `;

  var $el = document.querySelector(".code");

  autoType({
    content: text,
    element: $el,
    perChar: 50,
    cursor: "_"
  });


  var textTwo = `
  const TodoItem = (props) => {
    return <li data-id="{props.id}">{props.task}</li>;
  }

  class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          { id: 1, task: "Learn JavaScript", state: false },
          { id: 2, task: "Practice a lot", state: false },
          { id: 3, task: "Build something great", state: false }
        ]
      }
    }

    render() {
      var list = this.state.todos.map(todo => {
        return <TodoItem id="{todo.id}" task="{todo.task}" />
      });

      return (
          <section className="todo-container">
            {list}
          </section>
      );
    }
  }

  var $root = document.querySelector("#app");
  ReactDOM.render(<TodoList />, $root);
  `;

  var $elTwo = document.querySelector(".code-two");

  autoType({
    content: textTwo,
    element: $elTwo,
    perChar: 100,
    cursor: "|"
  });

})();
