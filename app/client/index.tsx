import React from "react"
import { render } from "react-dom"
import "@reach/dialog/styles.css"

import App from "./App"

render(
    <App authUrl="https://auth.messy.cloud/" />,
    document.getElementById("root")
)
