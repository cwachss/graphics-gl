// "use client";s
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.scrollY);
  //   // clean up code
  //   document.documentElement.style.setProperty(
  //     "--scrollPosition",
  //     window.scrollY + ""
  //   );
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <main className=" wrapper relative h-[100vh] w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <header
        id="home"
        className="h-[100vh] bg-white grid p-6 place-content-center snap-start text-center gap-7"
      >
        <h1 className=" text-5xl leading-tight">Design by Chani Wachsstock</h1>
        <h2 className="text-2xl">Freelance Graphic Design</h2>
        <div className="flex gap-5 justify-center text-base uppercase">
          <span>
            <a href="#gallery">Gallery</a>
          </span>
          <span>
            <a href="#contact">Contact</a>
          </span>
        </div>
        <div className="grid place-content-center pt-28 ">
          <svg
            width="54"
            height="31"
            viewBox="0 0 54 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66745 1.25537L27.6963 30.2938M26.3421 30.2938L52.371 1.25537"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
      </header>
      {/* <section id="about" className="h-[100vh] snap-start">
        About
        <p>
          Hi, I'm Chani Wachsstock; Software developer, project manager, and
          graphic designer. <br />
          Bachelor's in Computer Science from Thomas Edison University. <br />
          Certified in graphic design through PS Design School.
        </p>
      </section> */}
      <section id="parent" className="h-[100vh] snap-start px-24 py-12 ">
        <div></div>
      </section>
      <section id="gallery" className="h-[100vh] snap-start px-24 py-12 ">
        <div className=" ">
          <div className="flex flex-wrap gap-8 align-baseline pb-10 items-baseline">
            <h2 className="text-5xl">Gallery</h2>
            <div className="flex gap-8 text-base uppercase items-baseline">
              <h3 className="  ">Cookbooks</h3>
              <h3>Logos</h3>
              <h3>Book Covers</h3>
              <h3>Packaging</h3>
              <h3>Brochures</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-3 gap-5 w-full *:rounded-md">
              <div className=" bg-blue-200 relative text-gray-800 col-span-2 h-[250px]">
                <Image
                  src="/samples/date_divider.png"
                  layout="fill"
                  alt="dividers"
                  objectFit="cover"
                ></Image>
              </div>
              <div className=" bg-blue-200 text-gray-800 h-[250px]"></div>
              <div className=" bg-blue-200 text-gray-800 h-[250px]"></div>
              <div className=" bg-blue-200 text-gray-800 col-span-2 h-[250px]"></div>
            </div>
            <div className=" grid gap-5">
              <h4 className=" text-4xl">Layout Design</h4>
              <p className="text-balance text-xl max-w-[300px]">
                Custom cookbooks, brochures, and magazines
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="contact" className="h-[100vh] snap-start px-24 py-12 ">
        <form className="flex flex-col gap-5">
          <h3 className="text-3xl">Contact</h3>
          <input></input>
          <input></input>
          <textarea></textarea>
        </form>
      </section> */}
      <div></div>
    </main>
  );
}
