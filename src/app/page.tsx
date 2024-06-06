import Link from "next/link";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ fontSize: "50px" }}>Hello world!</h1>
      <Link href="/blog" style={{ fontSize: "30px" }}>
        Blog
      </Link>
      <Link href="/docs" style={{ fontSize: "30px" }}>
        Docs
      </Link>
      <Link href="/products" style={{ fontSize: "30px" }}>
        Products
      </Link>
      <Link href="/order-product" style={{ fontSize: "30px" }}>
        Order
      </Link>
      <Link href="/complex-dashboard" style={{ fontSize: "30px" }}>
    Dashboard
      </Link>
      <Link href="/f1" style={{ fontSize: "30px" }}>
    Folder 1
      </Link>
      <Link href="/photo-feed" style={{ fontSize: "30px" }}>
    Foto
      </Link>
    </div>
  );
}

export default Home;
