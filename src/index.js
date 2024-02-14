import React from 'react'
import ReactDom from 'react-dom/client'

function App() {
    return (
        <h1>Hello world!</h1>
    )
}


ReactDom.createRoot(document.getElementById('root')).render(<App />);