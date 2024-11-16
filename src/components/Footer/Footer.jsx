import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral text-neutral-content p-10 pt-[90px]">
        <div className="footer max-w-7xl mx-auto grid gap-10 md:grid-cols-5">
          <aside className="space-y-5">
            <h2 className="text-2xl md:text-[32px] font-extrabold">
              Career Hub
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="grid grid-flow-col gap-4 text-4xl">
              <FaFacebookF />
              <FaXTwitter />
              <IoLogoInstagram />
            </div>
          </aside>
          <nav className="space-y-3">
            <h6 className=" text-xl font-semibold text-white">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Work</a>
            <a className="link link-hover">Latest News</a>
            <a className="link link-hover">Careers</a>
          </nav>
          <nav className="space-y-3">
            <h6 className=" text-xl font-semibold text-white">Product</h6>
            <a className="link link-hover">Prototype</a>
            <a className="link link-hover">Plans & Pricing</a>
            <a className="link link-hover">Customers</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav className="space-y-3">
            <h6 className=" text-xl font-semibold text-white">Support</h6>
            <a className="link link-hover">Help Desk</a>
            <a className="link link-hover">Sales</a>
            <a className="link link-hover">Become a Partner</a>
            <a className="link link-hover">Developers</a>
          </nav>
          <nav className="space-y-3">
            <h6 className=" text-xl font-semibold text-white">Contact</h6>
            <a className="link link-hover">524 Broadway , NYC</a>
            <a className="link link-hover">+1 777 - 978 - 5570</a>
          </nav>
        </div>
      </footer>
      <footer className=" bg-neutral text-neutral-content px-10 py-4 pb-[130px]">
        <div className="footer max-w-7xl mx-auto border-t-[1px]  pt-[50px]">
          <aside className="grid-flow-col items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <Link to={"/"} className="font-semibold">
                CareerHub
              </Link>
              . All Rights Reserved
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <p className="text-sm font-normal">
                Powered by <span className="font-bold">CareerHub</span>
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
