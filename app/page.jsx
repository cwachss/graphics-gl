"use client";
import Image from "next/image";
import ImageLayout from "./imageLayout.tsx";
import { useState } from "react";
import galleryData from "./imageData.json";
import Link from "next/link.js";

export default function Home() {
  const [galleryTab, setGalleryTab] = useState("cookbooks");
  const [devMode, setDevMode] = useState(false);

  const tabs = Object.keys(galleryData);

  return (
    <main
      className={`${
        devMode ? "dark " : ""
      } wrapper relative text-balance h-[100vh] w-full overflow-y-auto overflow-x-hidden scroll-smooth mb-6`}
    >
      <div className=" fixed -z-10 dark:[background:radial-gradient(47.39%_47.39%_at_50%_50%,_rgba(18,_8,_83,_1)_0%,_rgba(18,_8,_83,_1.00)_100%);] h-[100vh] background-2 w-[100vw]">
        <img
          layout="fill"
          objectFit="cover"
          className="w-[100vw]"
          src={
            devMode
              ? "/images/backgrounds/dark.svg"
              : "/images/backgrounds/light.svg"
          }
          alt="Yes. I know I should be using a css gradient. But I designed this in Figma and I don't have time yet."
        />
        {/* <div className="-top-24 -right-24 absolute size-[40vw] [background:radial-gradient(47.39%_47.39%_at_50%_50%,_rgba(234,_108,_236,_0.85)_0%,_rgba(40,_27,_76,_0.00)_100%);]"></div>
        <div className="-top-[200px] -left-[250px] absolute size-[70vw] [background:radial-gradient(47.39%_47.39%_at_50%_50%,_rgba(101,_68,_193,_0.73)_0%,_rgba(40,_27,_76,_0.00)_100%);]"></div>
        <div className="top-[45vh] left-[25vw] absolute size-[50vw] [background:radial-gradient(47.39%_47.39%_at_50%_50%,_rgba(173,_123,_255,_0.85)_0%,_rgba(40,_27,_76,_0.00)_100%);]"></div> */}
      </div>
      <header
        id="home"
        className="h-[100vh] relative dark:bg-transparent dark:text-white grid p-6 place-content-center text-center gap-7"
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
            <a href="#about">About</a>
          </li>
        </ul>
        <Link
          href="#gallery"
          className="grid place-content-center pt-28 after:bg-transparent"
        >
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
        </Link>
      </header>

      {/* <section
        id="parent"
        className="h-[100vh] snap-start px-6 md:px-12 lg:px-24 py-12 "
      >
        <div></div>
      </section> */}
      <section
        id="gallery"
        className="/h-[100vh] snap-start px-6 md:px-14 lg:px-24 py-12 pb-24 dark:bg-transparent dark:text-white"
      >
        <div className=" ">
          <div className="flex flex-wrap gap-8 align-baseline pb-10 items-baseline">
            <h2 className="text-5xl">Gallery</h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-base uppercase items-baseline">
              {tabs.map((tab) => (
                <li
                  onClick={() => setGalleryTab(tab)}
                  className={
                    " capitalize animate-underline whitespace-nowrap dark:*:after:opacity-100 "
                  }
                  key={tab}
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
      <section
        id="about"
        className="/h-[100vh] snap-start mx-24 px-6 md:px-14 lg:px-24 py-12 dark:bg-transparent dark:text-white"
      >
        <div className="grid gap-8 align-baseline pb-10 items-baseline">
          <h2 className="text-5xl">About</h2>
          <div className="flex gap-6 my-6">
            <div className="h-[200px] w-[176px] relative place-self-end">
              {" "}
              <Image
                src="/images/me/IMG_8871.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h1 className="text-2xl lg:text-4xl text-balance my-6">
                Hi, I'm Chani Wachsstock;
              </h1>
              <p className="text-balance">
                Software developer, project manager, and freelance graphic
                designer. <br />
                Bachelor's in Computer Science from Thomas Edison University.{" "}
                <br />
                Certified in graphic design through{" "}
                <a
                  href="https://www.psdesignschool.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline"
                >
                  PS Design School.
                </a>
              </p>
            </div>
          </div>

          <p>
            {
              "I deliver beautiful, professional designs for any project. My favorite project was a cookbook/travel guide for a cooking tour - take a look at "
            }
            <a className="inline" href="#gallery">
              my work!
            </a>
          </p>
          <div>
            <h5>
              LinkedIn:{" "}
              <a
                className="inline"
                href="https://www.linkedin.com/in/chani-wachsstock/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/chani-wachsstock/
              </a>
            </h5>
            <h5>
              GitHub:{" "}
              <a
                className="inline"
                href="https://github.com/cwachss/"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/cwachss/
              </a>
            </h5>
            <h5>
              Resume:{" "}
              <a
                className="inline"
                href="https://drive.google.com/file/d/1huYVmn-_WdlSI1cYiEs2TPhJjtQh4jbL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Chani_Wachsstock.pdf
              </a>
            </h5>
          </div>
          <p>
            In my free time, I'm usually hiking, painting, dancing, teaching, or
            tutoring in computer science (you can never have too many hobbies).
          </p>
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
        <div className="/flex gap-8 align-baseline">
          Contact me at:{" "}
          <a href="mailto:chaniwachsstock@gmail.com" className="inline">
            chaniwachsstock@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
