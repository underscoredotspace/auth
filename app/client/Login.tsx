import React from "react"
import { useIdentityContext } from "react-netlify-identity"

// import "react-netlify-identity-widget/styles.css"
// code split the modal til you need it!
const IdentityModal = React.lazy(() => import("react-netlify-identity-widget"))

const Login: React.FC = () => {
    const identity = useIdentityContext()
    const [dialog, setDialog] = React.useState(false)
    const isLoggedIn = identity?.isLoggedIn

    return (
        <div>
            <div>
                <button className="RNIW_btn" onClick={() => setDialog(true)}>
                    {isLoggedIn ? `Hello ${name}, Log out here!` : "Log In"}
                </button>
            </div>
            <React.Suspense fallback="Loading...">
                <IdentityModal
                    showDialog={dialog}
                    onCloseDialog={() => setDialog(false)}
                    onLogin={user => console.log("hello ", user?.user_metadata)}
                    onSignup={user =>
                        console.log("welcome ", user?.user_metadata)
                    }
                    onLogout={() => console.log("bye ", name)}
                />
            </React.Suspense>
        </div>
    )
}

export default Login
