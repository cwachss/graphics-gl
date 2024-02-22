"use client";
import Image from "next/image";
import ImageLayout from "./imageLayout.tsx";
import { useState } from "react";
import galleryData from "./imageData.json";

export default function Home() {
  const [galleryTab, setGalleryTab] = useState("cookbooks");

  const tabs = Object.keys(galleryData);

  return (
    <main className=" wrapper relative h-[100vh] w-full overflow-y-auto overflow-x-hidden scroll-smooth mb-6">
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
      {/* <section
        id="parent"
        className="h-[100vh] snap-start px-6 md:px-12 lg:px-24 py-12 "
      >
        <div></div>
      </section> */}
      <section
        id="gallery"
        className="h-[100vh] snap-start px-6 md:px-14 lg:px-24 py-12 "
      >
        <div className=" ">
          <div className="flex flex-wrap gap-8 align-baseline pb-10 items-baseline">
            <h2 className="text-5xl">Gallery</h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-base uppercase items-baseline">
              {tabs.map((tab) => (
                <li
                  onClick={() => setGalleryTab(tab)}
                  className={" capitalize animate-underline whitespace-nowrap"}
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
      <footer className="grid place-content-center py-6 px-4">
        <span>
          Contact me at:{" "}
          <a href="mailto:chaniwachsstock@gmail.com">
            chaniwachsstock@gmail.com
          </a>
        </span>
      </footer>
    </main>
  );
}
