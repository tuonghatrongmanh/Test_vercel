import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
        <div className="container-fluid">
          <Link href={"/"} className='py-3 text-white text-decoration-none'>Trang Chủ</Link>
        </div>
      </nav>
    </div>
  )
}