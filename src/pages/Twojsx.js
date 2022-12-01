import { Link } from 'react-router-dom'

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Jade',
  lastName: 'Qiu',
}

const element = (
  <div>
    <h1>hello, {formatName(user)}</h1>
    <Link to="/">跳转到Home</Link>
  </div>
)

function a () {
  return element
}

export default a
