import Link from "next/link"

function Home () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="text-3xl font-bold underline ">Hello world!</h1>
            <Link href="/blog" style={{fontSize: '30px'}}>Blog</Link>
            <Link href="/products" style={{fontSize: '30px'}}>Products</Link>
        </div>
    )
}

export default Home