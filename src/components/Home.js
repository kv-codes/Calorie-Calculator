import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Welcome to the Calorie Calculator!</h1>
      <h2>Please enter your info below then click the 'submit' button.</h2> 
      <br/>
      <br/>
      <br/>   
      <p>Age:</p>
      <input
        type='number'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <p>Gender:</p>
      <button onclick="male">Male</button>
      <button onclick="female">Female</button>
      <br/>
      <br/>
      <p>Height(inches):</p>
      <input
      type='number'
      name='gender'
      onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <p>Weight(lbs):</p>
      <input
      type='number'
      name='gender'
      onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <p>Exercise level:</p>
      <button onclick="low">Low</button>
      <button onclick="moderate">Moderate</button>
      <button onclick="intense">Intense</button>
      <br/>
      <br/>

      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
export default Home;