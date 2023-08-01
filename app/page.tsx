import Link from "next/link";
import { Carousel } from "../components/Carousel";
import { Icon } from "../components/JetProtocolIcon";

export const metadata = {
  title: "Jet Protocol",
  description:
    "Jet Protocol is a decentralized lending and borrowing protocol built on Solana. It is efficient, reliable and trusted by users because of its transparency.",
  openGraph: {
    type: "website",
    url: "https://assignment-kunal00000.vercel.app",
    title: "Jet Protocol",
    description:
      "Jet Protocol is a decentralized lending and borrowing protocol built on Solana. It is efficient, reliable and trusted by users because of its transparency.",
    images: [
      {
        url: "https://jetprotocol.io/assets/images/Jetwhitelogo.png",
        width: 800,
        height: 600,
        alt: "Jet Protocol"
      }
    ]
  }
};

export default function Index() {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-black h-[100vh]">
        <nav className="w-full flex flex-row justify-evenly items-center border-y-2 border-gray-800 my-[1vw] h-16 bg-black z-10">
          <div className="flex flex-row text-white text-xl">
            <Icon />
            <strong>jet</strong>
            <span className="font-extralight">protocol</span>
          </div>

          <div className="flex flex-row gap-10 xs:hidden sm:hidden md:inline-flex cursor-pointer text-white font-mono">
            <p className="hover:underline underline-offset-8">products</p>
            <p className="hover:underline underline-offset-8">dao</p>
            <p className="hover:underline underline-offset-8">build</p>
            <p className="hover:underline underline-offset-8">docs</p>
          </div>

          <div className="rounded-full h-10 p-[0.07rem] bg-gradient-to-b from-white to-gray-600 font-mono">
            <Link href="/login">
              <button className="w-full h-full px-[1vw] hover:underline underline-offset-4 rounded-full bg-teal-500 shadow-[inset_0px_-1px_3px_rgba(0,0,0,0.6),inset_0px_2px_3px_rgba(256,256,256,0.6)]">
                launch app
              </button>
            </Link>
          </div>
        </nav>

        <div className="animate-in flex flex-col gap-y-8 opacity-0 px-3 py-16 lg:py-24">
          <div className="flex flex-col items-center">
            <div className="w-[50%] rounded-b-full shadow-[0px_30px_200px_100px] shadow-teal-600" />
            <div className="text-teal-300 mt-8 xs:text-xs lg:text-sm">
              JET PROTOCOL
            </div>
            <div className="font-sans xs:text-4xl lg:text-6xl mx-auto text-white text-center">
              <span className="">the next generation of</span>
              <br />
              <i className="font-serif xs:text-3xl lg:text-5xl">
                defi governance
              </i>
            </div>
          </div>

          <div className="mx-auto text-gray-400 text-center">
            <p className="xs:text-sm lg:text-lg">
              experience open source, transparent and efficient borrowing and{" "}
              <br />
              lending on solana.
            </p>
          </div>

          <div className="flex flex-row justify-center gap-10 h-11 my-5 font-mono">
            <div className="rounded-full p-[0.07rem] w-[27%] bg-gradient-to-b from-white to-gray-600">
              <Link href="/movie">
                <button className="w-full h-full p-[4%] hover:underline underline-offset-4 rounded-full bg-teal-500 shadow-[inset_0px_-1px_3px_rgba(0,0,0,0.6),inset_0px_2px_3px_rgba(256,256,256,0.6)]">
                  read docs
                </button>
              </Link>
            </div>
            <div className="rounded-full p-[0.07rem] w-[27%] bg-gradient-to-b from-white to-gray-600">
              <button className="bg-black hover:underline underline-offset-4 text-white w-full h-full p-[4%] rounded-full shadow-[inset_0px_-3px_3px_rgba(0,0,0,0.6),inset_0px_2px_3px_rgba(256,256,256,0.6)]">
                how it works
              </button>{" "}
            </div>
          </div>
        </div>

        <div>
          <Carousel />
        </div>
      </div>
    </>
  );
}
