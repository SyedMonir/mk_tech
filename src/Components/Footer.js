import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="font-semibold text-xl text-secondary">
            We are social
          </span>
          <p className="text-lg uppercase">Follow Us</p>
          <p className="my-3 flex gap-5">
            <SiInstagram className="text-yellow-300" size={35} />
            <BsFacebook className="text-blue-700" size={35} />
            <AiFillYoutube className="text-red-600" size={35} />
          </p>
          <button className="btn btn-ghost px-0 text-3xl font-bold">
            MK Tech.
          </button>
        </div>

        <div className="font-semibold">
          <span className=" text-xl text-secondary">Links</span>
          <Link to="/" className="link link-hover">
            ADVERTISERS
          </Link>
          <Link to="/" className="link link-hover">
            PUBLISHERS
          </Link>
          <Link to="/" className="link link-hover">
            INFLUENCERS
          </Link>
          <Link to="/" className="link link-hover">
            AD FORMATS
          </Link>
        </div>

        <div className="font-semibold">
          <span className="text-xl text-secondary">Documentation</span>
          <Link to="/" className="link link-hover">
            TERMS & CONDITIONS
          </Link>
          <Link to="/" className="link link-hover">
            PRIVACY POLICY
          </Link>
          <Link to="/" className="link link-hover">
            CANCELLATION POLICY
          </Link>
          <Link to="/" className="link link-hover">
            BLOG
          </Link>
        </div>
        <div className="font-semibold">
          <span className="text-xl text-secondary">Legal</span>
          <Link to="/" className="link link-hover">
            FAQ
          </Link>

          <Link to="/" className="link link-hover">
            MEDIA KIT
          </Link>
          <Link to="/" className="link link-hover">
            CONTACT US
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
