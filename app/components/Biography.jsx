"use client";
import Image from "next/image";
import NEXTLOGO from "./nextjs-fill-svgrepo-com.svg";
import REACTLOGO from "./reactjs-svgrepo-com.svg";
import SUPABASELOGO from "./supabase-logo-icon.svg";
import profilePic from "../profilepic.jpg";
import AvatarMaker from "../AvatarMaker.png";

const Biography = () => {
  return (
    <>
      <div className="profile flex-col flex gap-2 justify-center">
        <h1 className="mt-12 mb-6">
          <span className="gradient-text">Huzaifa Waqar</span>
        </h1>
      </div>
      <p className="font-medium text-xl mb-10 text-slate-600">
        MERN Stack Developer | Next.js Enthusiast | Supabase Aficionado
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <p className="leading-7 text-xl text-justify">
          Hey there! I'm Huzaifa Waqar, and I'm not your typical developer. I'm
          all about making the web a more exciting and user-friendly place. 😎
          I'm a MERN stack developer, and I've got a couple of websites under my
          belt, thanks to the magic of Next.js and the power of Supabase. But
          it's not just about building websites for me; it's about crafting
          immersive digital experiences. I've got this thing down pat when it
          comes to full authentication. I mean, who wants their data to be
          vulnerable, right? So I've got you covered there. When I'm not typing
          away at my keyboard, you can find me sipping coffee and exploring the
          latest web development trends. I'm all about staying in the loop and
          keeping my skills sharp. I love what I do, and I'm always up for a
          challenge. So, whether it's creating stunning web apps, wrangling
          code, or just enjoying a good cup of coffee, I'm your go-to developer
          for all things MERN, Next.js, and Supabase. Let's make the web a
          better place together! 🚀
        </p>
        <Image
          src={AvatarMaker}
          alt="sapiens"
          height={600}
          width={600}
          quality={100}
          className="rounded-md object-cover"
        />
      </div>
      <h2 className="my-8 ">
        <span className="gradient-text">Technological Expertise</span> ⚡
      </h2>
      <div>
        <ul className="p-4 border-2 border-slate-400 rounded-md ">
          <div className="flex gap-2 my-4">
            <Image
              src={REACTLOGO}
              alt="nextjs logo"
              height={50}
              width={50}
              quality={100}
            />
            <li>MERN Stack</li>
          </div>
          <p>
            My expertise lies in crafting end-to-end web solutions using the
            MERN stack, allowing me to seamlessly integrate databases, backend,
            and frontend for a cohesive user experience.
          </p>
          <div className="flex gap-2 my-4 ">
            <Image
              src={NEXTLOGO}
              alt="nextjs logo"
              height={50}
              width={50}
              quality={100}
            />
            <li>Next.js</li>
          </div>

          <p>
            I have a strong grasp of Next.js, a powerful React framework, to
            create high-performance, SEO-friendly web applications with
            server-side rendering.
          </p>
          <div className="my-4 flex gap-2">
            <Image
              src={SUPABASELOGO}
              alt="nextjs logo"
              height={50}
              width={50}
              quality={100}
            />
            <li>Supabase</li>
          </div>
          <p>
            I'm no stranger to Supabase, an open-source platform for building
            databases with real-time features. Leveraging Supabase's
            capabilities, I've developed dynamic and responsive applications
            with ease.
          </p>
        </ul>
      </div>
    </>
  );
};

export default Biography;
