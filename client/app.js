import React from "react";
import Header from "./components/header.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    axios.get("http://localhost:3004/api/names/")
    .then(names => {
      console.log(names.data);
    })
  }

  render() {

    return(
      <Header />
    )
  }
}

export default App;