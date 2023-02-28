import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

import Info from './components/Info'

let detailsList = []

class App extends Component {
  state = {
    updateddetailsList: detailsList,
    gmail: '',
    name: '',
    password: '',
    checked: 'false',
  }

  gmailFunc = event => {
    this.setState({gmail: event.target.value})
  }

  nameFunc = event => {
    this.setState({name: event.target.value})
  }

  passwordFunc = event => {
    this.setState({password: event.target.value})
  }

  detailsCaptureFunc = event => {
    event.preventDefault()

    const id = uuidv4()

    const {gmail, name, password} = this.state

    detailsList.push({gmail, name, password, id})

    this.setState({
      updateddetailsList: detailsList,
      gmail: '',
      name: '',
      password: '',
    })
  }

  radioCheckFunc = () => {
    const {checked} = this.state

    if (checked === 'false') {
      this.setState({checked: 'true'})
    } else {
      this.setState({checked: 'false'})
    }
  }

  passworddeleteFunc = deleteid => {
    const {updateddetailsList} = this.state
    detailsList = updateddetailsList.filter(
      eachItem => eachItem.id !== deleteid,
    )

    console.log(detailsList)

    this.setState({updateddetailsList: detailsList})
  }

  searchPasswordFunc = event => {
    const {updateddetailsList} = this.state
    const requiredList = detailsList.filter(eachItem =>
      eachItem.name.includes(event.target.value),
    )

    console.log(detailsList)

    this.setState({updateddetailsList: requiredList})
  }

  render() {
    const {updateddetailsList, gmail, name, password, checked} = this.state
    console.log(checked)

    return (
      <div className="total">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="first">
          <div className="first-one">
            <h1>Add New Password</h1>
            <form onSubmit={this.detailsCaptureFunc}>
              <div className="user-input">
                <img
                  className="small-icons"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  className="input"
                  onChange={this.gmailFunc}
                  placeholder="Enter Website"
                  value={gmail}
                />
              </div>
              <div className="user-input">
                <img
                  className="small-icons"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  className="input"
                  onChange={this.nameFunc}
                  placeholder="Enter Username"
                  value={name}
                />
              </div>
              <div className="user-input">
                <img
                  className="small-icons"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  className="input"
                  onChange={this.passwordFunc}
                  placeholder="Enter Password"
                  value={password}
                />
              </div>

              <button type="submit">Add</button>
            </form>
          </div>

          <div>
            <img
              className="password-manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="second">
          <div className="second-one">
            <div className="password-count">
              <h1>Your Passwords</h1>
              {updateddetailsList.length === 0 ? (
                <p>0</p>
              ) : (
                <p>{updateddetailsList.length}</p>
              )}
            </div>
            <div className="user-input">
              <img
                className="small-icons"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                className="input"
                placeholder="Search"
                onChange={this.searchPasswordFunc}
              />
            </div>
          </div>
          <hr />
          <div className="radio-input">
            <input
              id="radioinput"
              type="checkbox"
              onClick={this.radioCheckFunc}
            />
            <label htmlFor="radioinput" value="Show Passwords">
              Show Passwords
            </label>
          </div>
          <div>
            {updateddetailsList.length === 0 ? (
              <div>
                <img
                  className="no-passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul>
                {updateddetailsList.map(eachItem => (
                  <Info
                    key={eachItem.id}
                    eachItem={eachItem}
                    checked={checked}
                    passworddeleteFunc={this.passworddeleteFunc}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
