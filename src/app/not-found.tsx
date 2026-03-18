import Link from "next/link"

export default function NotFound() {
  return (
    <main className="notFound">

      <div className="notFoundCard">

        <h1>404</h1>

        <p>Sorry!</p>

        <p className="notFoundDesc">
          The link is broken, try to refresh or go to home
        </p>

        <Link href="/">
          <button className="notFoundBtn">
            Go To Home
          </button>
        </Link>

      </div>

    </main>
  )
}