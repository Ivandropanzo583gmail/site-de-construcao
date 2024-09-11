import Link from "next/dist/client/link";

const Footer = () => {
    return (
      <footer className="bg-[#0E1639] text-white py-10 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo e informações da empresa */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="bg-red-600 rounded-full p-2 mr-2">
                <span className="text-white text-2xl font-bold">P</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">PROJEX TEC</h2>
                <p className="text-gray-400">ENGINEERING & CONTRACTING</p>
              </div>
            </div>
            <p>Sara Tower, 23 Al Batrawi Street, 3rd Floor, Abbas El-Akkad, Nasr City, Cairo, Egypt</p>
            <p className="mt-2">+20222617124</p>
            <p>info@projex-tec.com</p>
          </div>
  
          {/* Links de navegação */}
          <div className="text-center mb-6 md:mb-0">
            <nav className="mb-4">
              <ul className="space-y-2">
                <li>
                  <Link  href="/about">
                      <a className="hover:text-gray-400">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                      <a  className="hover:text-gray-400">Services</a>
                  </Link>
                  
                </li>
                <li>
                  <Link href="#contact">
                      <a  className="hover:text-gray-400">Contact</a>
                  </Link>
                  
                </li>
              </ul>
            </nav>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Get A Quote
            </button>
          </div>
  
          {/* Links sociais */}
          <div className="text-center">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            </ul>
          </div>
        </div>
  
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>©2024 PROJEX TEC. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  