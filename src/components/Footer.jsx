import { Footer } from "flowbite-react";
import { Link } from "react-router";
import Logo from "./Logo";

const FooterSection = () => {
  return (
    <Footer container className="">
      <div className="w-full text-center mt-16">
        <Footer.Divider className="max-w-40" />
        <div className="w-full flex flex-col gap-7 md:flex-row lg:items-center justify-between">
          <div>
            <Logo></Logo>
            <div className="text-left mt-5 text-gray-500">
              <p>23/3, Hospital Road, Nalchity, Jahlokati.</p>
              <p>mdalimuzzaman437@gmail.com</p>
              <p>+880 1405-742311</p>
            </div>
          </div>
          <div>
            <p className="text-left mb-3">Useful Links</p>
            <ul className="text-gray-500 flex gap-x-7 gap-y-2 flex-wrap">
              <li>
                <Link className="hover:text-gray-800" to={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-800" to={"/privacy"}>
                  Privacy-Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-800" to={"/terms"}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Footer.Divider />
        <Link
          to={"https://alimuzzaman-haris.netlify.app"}
          target="_blank"
          className="text-sm text-gray-500 text-center"
        >
          © {2025} <span className="hover:text-blue-700">Az Industries BD</span>
        </Link>
      </div>
    </Footer>
  );
};

export default FooterSection;
