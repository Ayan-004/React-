import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type : "a",
//   props : {
//       href : "https://google.com",
//       target : "_blank"
//   },
//   childern: "Click me to visit google"
// }

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const anotherUser = 'Ayan Shaikh'

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
)
