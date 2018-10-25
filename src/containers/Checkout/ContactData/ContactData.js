import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: ''
  }

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="text" name="email" placeholder="Your email" />
          <input type="address" name="address" placeholder="Your address" />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
      );
  }
}

export default ContactData;