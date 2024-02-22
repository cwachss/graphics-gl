"use client";
import Image from "next/image";
import ImageLayout from "./imageLayout.tsx";
import { useState } from "react";
import galleryData from "./imageData.json";

export default function Home() {
  const [galleryTab, setGalleryTab] = useState("cookbooks");
  const [devMode, setDevMode] = useState(false);

  const tabs = Object.keys(galleryData);

  return (
    <main
      className={`${
        devMode ? "dark " : ""
      } wrapper relative h-[100vh] w-full overflow-y-auto overflow-x-hidden scroll-smooth mb-6`}
    >
      <div className="fixed -z-10 dark:[background:_linear-gradient(109.6deg,_rgb(36,_45,_57)_11.2%,_rgb(16,_37,_60)_51.2%,_rgb(0,_0,_0)_98.6%);] h-[100vh] w-full"></div>
      <header
        id="home"
        className="h-[100vh] relative dark:opacity-75 bg-white dark:bg-transparent dark:text-white grid p-6 place-content-center text-center gap-7"
      >
        <div className="grid place-content-center">
          <button
            className="text-gray-700 dark:text-white "
            onClick={() => {
              setDevMode((dev) => !dev);
            }}
          >
            {devMode
              ? "It's just like design mode, but darker."
              : "switch to dev mode"}
          </button>
        </div>
        <h1 className=" text-5xl leading-tight ">Design by Chani Wachsstock</h1>
        <h2 className="text-2xl ">Freelance Graphic Design</h2>
        <ul className="flex gap-5 justify-center text-base uppercase">
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
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
              stroke={devMode ? "white" : "black"}
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
      {/* <section
        id="parent"
        className="h-[100vh] snap-start px-6 md:px-12 lg:px-24 py-12 "
      >
        <div></div>
      </section> */}
      <section
        id="gallery"
        className="h-[100vh] snap-start px-6 md:px-14 lg:px-24 py-12 dark:bg-transparent dark:text-white"
      >
        <div className=" ">
          <div className="flex dark:opacity-75 flex-wrap gap-8 align-baseline pb-10 items-baseline">
            <h2 className="text-5xl">Gallery</h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-base uppercase items-baseline">
              {tabs.map((tab) => (
                <li
                  onClick={() => setGalleryTab(tab)}
                  className={
                    " capitalize animate-underline whitespace-nowrap dark:*:after:opacity-100 "
                  }
                >
                  <a href={"#" + tab}>{tab}</a>
                </li>
              ))}
            </ul>
          </div>
          <ImageLayout
            images={galleryData[galleryTab]?.images}
            title={galleryData[galleryTab]?.title}
            description={galleryData[galleryTab]?.description}
          />
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
      <footer className="grid place-content-center py-6 px-4 dark:text-white">
        <div className="flex gap-8">
          Contact me at:{" "}
          <a href="mailto:chaniwachsstock@gmail.com">
            chaniwachsstock@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
