import { FaDev } from "react-icons/fa";
import Buttons from "../components/Buttons";

export default function SignUp() {
  return (
    <body className="bg-white text-black">
      <main className="box-content">        
        <div className="flex flex-row justify-center">
          <FaDev style={{ fontSize: "3rem" }} />
        </div>
        <div className="flex justify-center">
          <h1 className="font-sans font-bold text-2xl">
            Join the DEV Community
          </h1>
        </div>
        <div className="flex justify-center">
          <h3 className="text-sm font-light">
            DEV Community is a community of 2,035,460 amazing developers
          </h3>
        </div>

        <Buttons/>
        <div className="flex flex-row justify-center pt-5 pb-5">
          <div className="w-96">
            <div className="pb-5">
              <p className="text-xs font-light">
                By signing up, you are agreeing to our{" "}
                <a className="text-blue-600" href="">
                  privacy policy, terms of use
                </a>{" "}
                <br /> and{" "}
                <a className="text-blue-600" href="">
                  code of conduct.
                </a>
              </p>
            </div>
            <div className="flex justify-center pt-5 border-t border-neutral-300 w-auto">
              <p className="">
                Already have account?{" "}
                <a className="text-blue-600" href="">
                  Log in.
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}