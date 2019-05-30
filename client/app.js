import React from "react";
import Header from "./components/header.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoList : [],
    }
  }
  componentWillMount() {
    axios.get("http://localhost:3004/api/info/")
    .then(info => {
      return info.data;
    })
    .then(info => {
      this.setState({
        infoList : info,
      })
    })
    .catch(err => console.log(err));
  }

  render() {

    return(
      <Header productInfo = {this.state.infoList}/>
    )
  }
}

export default App;