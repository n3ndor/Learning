import Link from "next/link"

export default function Home() {
  return (
    <main >
      <h2>Home Page</h2>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
