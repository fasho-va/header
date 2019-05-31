import React from "react";
import Header from "./components/header.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoList : [],
    }
    this.updateUuid = this.updateUuid.bind(this);
  }

  componentWillMount() {
    axios.get("http://ec2-52-23-195-154.compute-1.amazonaws.com/api/info/")
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

  updateUuid(uuid) {
    const event = new CustomEvent('updateUuid', { detail: uuid });
    window.dispatchEvent(event);
  }

  render() {

    return(
      <Header productInfo = {this.state.infoList} updateUuid = {this.updateUuid}/>
    )
  }
}

export default App;