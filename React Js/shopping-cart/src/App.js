import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 45999.00,
          title: 'Apple Watch Series 8 GPS Aluminium Case with Sport Band ( Midnight,45 mm )',
          qty: 1,
          img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171067000%2C1661968920857',
          id: 1
        },
        {
          price: 139000.00,
          title: 'iPhone 14 Pro Max',
          qty: 10,
          img: 'https://images.news18.com/ibnlive/uploads/2022/09/apple-iphone-14-pro-launch-2022-16625743583x2.jpg?im=FitAndFill,width=1200,height=900',
          id: 2
        },
        {
          price: 122990,
          title: '13‑inch MacBook Pro - Space Grey (M1 Chip)',
          qty: 4,
          img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=1280&hei=1190&fmt=jpeg&qlt=90&.v=1664497359481',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }><b>TOTAL: {this.getCartTotal()}.00</b></div>
      </div>
    );
  }
}

export default App;
