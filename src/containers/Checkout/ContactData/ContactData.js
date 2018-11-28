import React, { Component } from 'react';
import { connect } from 'react-redux'

import Button from '../../../components/UI/Button/Button';
import Spinner from  '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: '',
  }

  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice,
      customer: {
        name: 'Marcos',
        address: 'Test',
      }
    }

    axios.post('./orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false });
      });

      this.props.onOrderBurger(order);
  }

  render () {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your name" />
        <input className={classes.Input} type="text" name="email" placeholder="Your email" />
        <input className={classes.Input} type="address" name="address" placeholder="Your address" />
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
      );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    loading: state.loading
  
  }
}

const mapDispatchToProps = dispatch => {
  return {

    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));