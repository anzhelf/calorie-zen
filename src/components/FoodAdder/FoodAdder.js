import React from "react";
import "./FoodAdder.css";

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodList: []
    }
  }

handleSubmit = () => {}


render () {
    return (
      <form className="food-adder">
      <input type="text" placeholder="Добавьте продукты" />
      <button className="food-adder__submit"></button>
    </form>
  );
}
}

export default FoodAdder;