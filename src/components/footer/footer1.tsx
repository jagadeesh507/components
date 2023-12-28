import { Column_1 } from "@/mock/footer";
import { Column_2 } from "@/mock/footer";
import { Social } from "@/mock/footer";
import { year } from "@/mock/footer";
import { policy } from "@/mock/footer";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";
function Footer1() {
  let socialIcons: any[] = [
    <FaFacebook />,
    <FaXTwitter />,
    <FaInstagram />,
    <FaLinkedin />,
    <FaYoutube />,
  ];
  return (
    <div className="flex flex-col  bg-base-200 text-base-content p-5 md:p-10">
      <footer className="footer">
        <aside className="w-full md:max-w-lg flex flex-col gap-4">
          <h1 className="font-extrabold text-2xl">Logo</h1>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered rounded-none w-full"
            />
            <button className="btn btn-outline rounded-none">Subscribe</button>
          </div>
          <p>
            By subscribing you agree to with our{" "}
            <span className="underline hover:cursor-pointer">{policy[0]}</span>{" "}
            and provide consent to receive updates from our company.
          </p>
        </aside>
        <nav className="gap-5">
          <header className="footer-title">Column 1</header>
          {Column_1.map((column) => (
            <a className="link link-hover">{column}</a>
          ))}
        </nav>
        <nav className="gap-5">
          <header className="footer-title">Column 2</header>
          {Column_2.map((column) => (
            <a className="link link-hover">{column}</a>
          ))}
        </nav>
        <nav className="gap-5">
          <header className="footer-title">Follow Us</header>
          {Social.map((social, index) => (
            <div className="flex gap-3">
              {React.cloneElement(socialIcons[index], { size: 22 })}
              <a className="link link-hover">{social}</a>
            </div>
          ))}
        </nav>
      </footer>
      <div className="divider"></div>
      <footer className="footer flex justify-between flex-col md:flex-row gap-5 flex-col-reverse ">
        <p>@ {year} Relume. All rights reserved.</p>
        <div className="flex gap-4 flex-col md:flex-row">
          {policy.map((policy) => (
            <a className="link underline">{policy}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Footer1;
