import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Buttons() {
  return (
    <>
      <div className="flex justify-center w-auto pt-3">
        <button className="flex w-1/4 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
          <FaApple style={{ fontSize: "20px", marginRight: "150px" }} />
          Sign up with Apple
        </button>
      </div>
      <div className="flex justify-center w-auto pt-2">
        <button className="flex w-1/4 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
          <FaFacebookSquare
            style={{ fontSize: "20px", marginRight: "140px" }}
          />
          Sign up with Facebook
        </button>
      </div>
      <div className="flex justify-center w-auto pt-2">
        <button className="flex w-1/4 indent-3 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
          <img
            className="max-w-4 mr-36"
            src="src/images/forem.png"
            alt="forem"
          />
          Sign up with Forem
        </button>
      </div>
      <div className="flex justify-center w-auto pt-2">
        <button className="flex w-1/4 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
          <FaGithub style={{ fontSize: "20px", marginRight: "150px" }} />
          Sign up with GitHub
        </button>
      </div>
      <div className="flex justify-center w-auto pt-2">
        <button className="flex w-1/4 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
          <FcGoogle style={{ fontSize: "20px", marginRight: "150px" }} />
          Sign up with Google
        </button>
      </div>
      <div className="flex justify-center w-auto pt-2">
        <button className="flex w-1/4 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
          <FaSquareXTwitter
            style={{ fontSize: "20px", marginRight: "145px" }}
          />
          Sign up with Twitter (X)
        </button>
      </div>
      <div className="flex justify-center w-auto pt-2">
        <button className="flex w-1/4 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
          <MdEmail style={{ fontSize: "20px", marginRight: "155px" }} />
          Sign up with Email
        </button>
      </div>
    
    </>
  );
}
