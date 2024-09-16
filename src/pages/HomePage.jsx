import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="bg-neutral-200 text-black grid gap-4 grid-cols-3 grid-rows-3">
        {/* Left-Bar */}
        <div className="flex flex-col">
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Home
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            DEV ++
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Reading List
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Podcast
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Videos
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Tags
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            DEV Help
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Forem Shop
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Advertise on DEV
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            DEV Challenges
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            DEV Showcase
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            About
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Contact
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Guides
          </a>
          <a className="hover:text-blue-600 decoration-slice p-2" href="">
            Software comparisons
          </a>
          {/* 'Other' */}
          <div>
            <p className="font-bold p-3">Other</p>
          </div>
          {/* Menu 'Other' */}
          <div className="flex flex-col">
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              Code of Conduct
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              Privacy Policy
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              Terms of use
            </a>
          </div>
          {/* Lista de Social Icons */}
          <div className="flex flex-col">...Aqui van los iconos...</div>
          {/* My Tags */}
          <p className="font-bold p-3">My Tags</p>
          {/* Lista de Tags */}
          <div className="flex flex-col">
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #webdev
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #javascript
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #react
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #python
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #devops
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #opensource
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #css
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #aws
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #career
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #typescript
            </a>
          </div>
          <div className="border p-2">
            <div className="bg-white rounded border border-stone-300 p-2">
              <p className="text-sm">💎DEV Diamond Sponsor</p>
              <a href="">...</a>
              <div>
                <p className="font-bold">
                  Thank you to our Diamond <br /> Sponsor Neon
                </p>
              </div>
              <div>
                <img
                  className="rounded"
                  src="src/images/Screenshot20atE2AFPM.png"
                  alt=""
                />
              </div>
              <p className="font-medium">
                Neon is the official database <br />
                partner of DEV
              </p>
              <p>Happy coding ❤</p>
            </div>
          </div>
          <div className="border p-2">
            <div className="bg-white rounded border border-stone-300 p-2">
              <p>DEV Community</p>
              <a href="">...</a>
              <div>
                <img
                  className="rounded"
                  src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_2tlkmy55xik6gfbcah9f.avif"
                  alt=""
                />
              </div>
              <p className="font-bold text-lg">
                Want to stay ahead <br /> of the game in the <br /> world of
                coding?
              </p>
              <p>
                Join our newsletter community <br />
                and never miss a beat
              </p>
            </div>
            <div className="pt-3">
              <p className="text-sm text-stone-500">
                <a className="font-bold text-blue-600" href="">
                  DEV Community
                </a>{" "}
                A constructive and <br /> inclusive social network for software{" "}
                <br /> developers. With you every step of your <br /> journey.
              </p>
              <div className="pt-3">
                <p className="text-sm text-stone-500">
                  Built on{" "}
                  <a className="font-bold text-blue-600" href="">
                    Forem
                  </a>{" "}
                  — the open source <br /> software that powers DEV and other{" "}
                  <br /> inclusive communities.
                </p>
                <div className="pt-3">
                  <p className="text-sm text-stone-500">
                    Made with love and{" "}
                    <a className="text-blue-600" href="">
                      Ruby on Rails.
                    </a>{" "}
                    DEV <br /> Community © 2016 - 2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Bar */}
        <div className="pt-3">
          <div className="flex flex-row text-start space-x-6">
            <a className="font-bold" href="">
              Relevant
            </a>
            <a href="">Latest</a>
            <a href="">Top</a>
          </div>

          {/* Card principal */}
          <div className="bg-white rounded border border-stone-300 p-2 space-x-6">
            <p className="text-sm">👋DEV Challenges</p>
            <div className="flex flex-row">
              <p>...</p>
              <p>X</p>
            </div>
            <div className="p-5">
              <img
                className="rounded"
                src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_00s8uctceo8kh9mndajn.avif"
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">New thing</h2>
            <div className="border border-stone-300 p-2 rounded grid grid-flow-col">
              <div className="col-span-1">
                <img
                  className="size-7 rounded"
                  src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_organization_profile_image_1_d908a186-5651-4a5a-9f76-15200bc6801f.avif"
                  alt=""
                />
              </div>
              <div className="col-span-2">
                <p className="font-bold text-lg">Introducing DEV ++</p>
                <p className="text-sm">Ben Halpern for The DEV Team -Aug 29</p>
                <div className="">
                  <a href="">#meta</a>
                  <a href="">#news</a>
                  <a href="">#productivity</a>
                  <a href="">#career</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-stone-300">
            <img
              className="rounded-tl round-tr"
              src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_5ov27va8loank4fl1plk.avif"
              alt=""
            />
            <div className="pt-2 flex flex-row">
              <div className="col-span-1">
                <img
                  className="size-7 rounded"
                  src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_organization_profile_image_9423_69191449-e29c-406b-ba64-3dcdf3b4026a.avif"
                  alt=""
                />
              </div>
              <div className="flex-col">
                <p className="text-sm">
                  <a className="font-bold" href="">
                    Anmol Baranwal
                  </a>{" "}
                  for{" "}
                  <a className="font-bold" href="">
                    Requestly
                  </a>
                </p>
                <p className="text-sm">Sep 5 3 days ago</p>
              </div>
            </div>
            <div className="text-xl font-bold">
              <h1>How to Build Frontend Apps 10x Faster</h1>
            </div>
            <div className="flex">
              <a href="">#opensource</a>
              <a href="">#javascript</a>
              <a href="">#programming</a>
              <a href="">#webdev</a>
            </div>
            <div>
              <a href="">116 Reactions</a>
              <a href="">15 Comments</a>
              <a className="text-sm" href="">
                10 min read
              </a>
            </div>
            <div className="flex">
              <img
                className="size-7 rounded-full border border-stone-600"
                src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_user_profile_image_184195_98783497-31d4-4020-9e54-32ee9ff9cfcc.avif"
                alt=""
              />
            </div>
            <div className="bg-neutral-200 border text-md p-2 m-2 rounded">
              <div className="p-2 m-2">
                <p className="font-bold">
                  {" "}
                  <a href="">Rambevha Dakalo</a> 20 hours ago{" "}
                </p>
                <p>Thanks for Sharing this!</p>
              </div>
            </div>
            <div>
              <img
                className="size-7 rounded-full border border-stone-600"
                src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_user_profile_image_230458_232a5025-4b8f-4b77-ae0b-f67f444b3dee.avif"
                alt=""
              />
            </div>
            <div className="bg-neutral-200 border text-md p-2 m-2 rounded">
              <div className="p-2 m-2">
                <p className="">
                  <a className="font-bold" href="">
                    Roman
                  </a>{" "}
                  1 day ago
                </p>
                <p>Nice, and amazing post</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
