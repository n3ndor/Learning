import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h2>The Home Page</h2>
      <h3>
        Some links you can try out: (where you see the "..." you can type
        anything)
      </h3>
      <p>http://localhost:3000/portfolio</p>
      <p>http://localhost:3000/portfolio/list</p>
      <p>
        http://localhost:3000/portfolio/ "add anything and you get to
        /portfolio/[projectid] component"
      </p>
      <hr />
      <p>http://localhost:3000/clients</p>
      <p>http://localhost:3000/clients/ "add a Client name"</p>
      <p>http://localhost:3000/clients/ "client" / "project"</p>
      <hr />
      <p>http://localhost:3000/blog</p>
      <p>
        http://localhost:3000/blog/ "add so many routes as you wish ex:
        blog/1/11/11 or blog/1 or blog/1/1/1/1/1 ..."
      </p>
      <hr />
      <p>request = all states gonna lost / disadvantage</p>
      <ul>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/clients">Clients</a>
        </li>
      </ul>
      <hr />
      <p>using Link also navigate to the page but without loosing any state </p>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link replace href="/clients">
            Clients (added replace, don't go back to last page)
          </Link>
        </li>
      </ul>
      <hr />
      <p>added custom 404 Page </p>
    </div>
  );
}
export default HomePage;
