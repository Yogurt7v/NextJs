"use client"
export default function ErrorBoundary({error, reset} : {
    error: Error,
    reset : () => void,
}
) {
    return (
        <>
        <h1>Error : {error.message}</h1>
        <button onClick={reset}>Try again</button>
        </>
    )
}