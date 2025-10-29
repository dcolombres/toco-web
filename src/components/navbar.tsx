import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4 z-10 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/TOCO_logo.jpg" alt="TOCO Logo" width={80} height={40} />
        </Link>
        <div className="flex space-x-8">
          <Link href="/about" className="text-black hover:text-gray-600">
            Qué es TOCO
          </Link>
          <Link href="/movement" className="text-black hover:text-gray-600">
            Sumate al Movimiento
          </Link>
          <Link href="/alliances" className="text-black hover:text-gray-600">
            Alianzas
          </Link>
        </div>
      </div>
    </nav>
  );
}