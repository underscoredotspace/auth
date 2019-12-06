import React from "react"
import { IdentityContextProvider } from "react-netlify-identity"

import Login from "./Login"

interface AppProps {
    authUrl: string
}

const App: React.FC<AppProps> = ({ authUrl }) => (
    <IdentityContextProvider url={authUrl}>
        <Login />
    </IdentityContextProvider>
)

export default App
