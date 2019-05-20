const React = require("react");
const Header = require("./components/header.js")


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <Header />
    )
  }
}

module.exports = Header;