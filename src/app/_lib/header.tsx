import Link from "next/link";

export default function Header() {
    return (
        <header style={{ backgroundColor: 'blue', color: 'white',  display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
            <p style={{fontSize: '30px'}}>Header</p>
            <Link href="/" style={{color: 'white',fontSize: '30px'}}>Home</Link>
        </header>
    )
}