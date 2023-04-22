import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <i class="fas fa-shopping-cart" style={styles.cartIcon}></i>
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    fontSize: 30,
    marginRight: 30
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative',
    color: 'white'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '2px 2px',
    position: 'absolute',
    right: 15,
    top: -20,
    height: 20,
    width: 20,
    textAlign: 'center',
    color: 'black'
  }
};


export default Navbar;