import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Ultimate guidance for the students who wanna built their career in IT industry.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/mission"
                className="hover:text-white transition-colors duration-300"
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/adhyayanaa?mibextid=ZbWKwL" target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://g.co/kgs/euaiQcH" target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Google Map
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Central Sinthi Rd, Biswanath Colony, Sinthee, Kolkata, West Bengal 700050</p>
          <p>Phone Number : 7685829500</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 ADHYAYANA. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
