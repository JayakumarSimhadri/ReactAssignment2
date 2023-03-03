import {Component} from 'react'

import './index.css'

class Info extends Component {
  render() {
    const {eachItem, checked, passworddeleteFunc} = this.props
    console.log(checked)

    const deleteFunc = () => {
      passworddeleteFunc(eachItem.id)
    }

    return (
      <li>
        <div>
          <p className="initial-letter">{eachItem.gmail[0].toUpperCase()}</p>
        </div>
        <div>
          <p>{eachItem.gmail}</p>
          <p>{eachItem.name}</p>
          {checked === 'true' ? (
            <p>{eachItem.password}</p>
          ) : (
            <img
              className="stars-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <div>
          <button data-testid="delete" type="button" onClick={deleteFunc}>
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default Info
