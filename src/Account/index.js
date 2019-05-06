import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }
  render() {
    let balanceClass = 'balance'
    if(this.state.balance === 0) {
      balanceClass += ' zero'
    }

    return (
      <div className="account">

        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="number" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick}/>
        <input type="button" value="Withdraw" onClick={this.handleWithdrawlClick}/>

      </div>
    )
  }
  handleDepositClick = (e) => {
      e.preventDefault();
      const amount = parseInt(this.inputBox.value)
      let newBalance = 0
        if (this.state.balance - amount <= 0) {
        newBalance = this.state.balance - amount;
        } else {
        newBalance = this.state.balance;
      }
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = ''
    }
    handleWithdrawlClick = (e) => {
    let newBalance = 0
      if (this.state.balance - amount >= 0) {
      newBalance = this.state.balance - amount;
      } else {
      newBalance = this.state.balance;
    }
      e.preventDefault()
      const amount = parseInt(this.inputBox.value)
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = ''
    }

}





export default Account;
