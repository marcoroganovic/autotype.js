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
    perChar: 100,
    cursor: "_"
  });
  

})();
