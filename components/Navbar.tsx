export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">
          Agam Technology
        </h1>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#why-choose-us" className="hover:text-blue-400">About</a></li>
          <li><a href="#services" className="hover:text-blue-400">Services</a></li>
          <li><a href="#technologies" className="hover:text-blue-400">Technologies</a></li>
        </ul>  
        
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
          Book Consultation
        </button>
      </nav>
    </header>
  );
}