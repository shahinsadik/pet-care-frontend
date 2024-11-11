import { Link } from "@nextui-org/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="">
      <div>
        <div className="flex py-10 px-5 bg-[#d2e0fb] flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* About Section */}
          <div className="md:w-1/3">
            
            <h4 className="text-4xl font-bold mb-2 text-[#14b8a6]">Pet Care</h4>
            <p className="">
              Your trusted source for pet care tips, advice, and heartwarming
              stories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-blue-500"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-pink-500"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-blue-300"
                >
                  <FaTwitter />
                  <span>Twitter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" text-center bg-[#14b8a6] py-5 ">
          <p className="text-sm text-white">Copyright
            &copy; {new Date().getFullYear()} PetCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
