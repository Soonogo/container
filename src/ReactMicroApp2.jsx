// ReactMicroApp.jsx
export const ReactMicroApp2 = () => {
    return (
      <div>
        <h1>react-app</h1>
        <micro-app
          name='flow-app'
          url='http://127.0.0.1:30001/'
          baseroute='/flow-app'
        >
        </micro-app>
      </div>
    )
  }