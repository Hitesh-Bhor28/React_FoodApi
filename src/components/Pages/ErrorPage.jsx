import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Oops! Something went wrong 😢</h1>
                <h2>{err? `Error ${err.status || ""}: ${err.statusText || ""}`: "404: Page Not Found"}</h2>
                <p>{err?.data || err?.message || "The page you are looking for does not exist."}</p>
            </div>
        </>
    )
}

export default ErrorPage