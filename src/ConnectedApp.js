import React, { Component} from 'react';


export default class ConnectedApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      accounts: null
    }
  }

  componentWillMount(){
    this.props.eth.getAccounts( (err, accounts) => {
      if(err) console.error("Error fetching accounts", err)

      this.setState({ accounts: accounts })
    })
  }

  render(){
    if(this.state.accounts === null) return <div>Loading...</div>


    console.log("Ethereum: ",  this.state.accounts)

    return <div>
      <h1>Connected to Ethereum</h1>
      <small>Default account: [{this.state.accounts[0]}]</small>
    </div>

  }
}
