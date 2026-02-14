import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between ">
            <Link href="/" className="text-2xl font-bold">My App</Link>
            <ul className='flex gap-4'>
                <li>
                    <Link href="/" className='hover:text-blue-400'>Home</Link>
                </li>
                <li>
                    <Link href="/about" className='hover:text-blue-400'>About</Link>
                </li>
                <li>
                    <Link href="/contact" className='hover:text-blue-400'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}