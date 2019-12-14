import React from "react"
import GoTrue from "gotrue-js"

const Login: React.FC = () => {
    const auth = new GoTrue({
        setCookie: false,
        APIUrl: "/.netlify/identity"
    })

    return <a href={auth.loginExternalUrl("github")}>Log in</a>
}

export default Login
