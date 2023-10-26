import Image from "next/image";

import CAR from "./car.svg";
import MISSION from "./mission.svg";
const Motivations = () => {
  return (
    <div className="containerBox">
      <h2 className="my-8 ">
        <span className="my-8 gradient-text">What Drives Me?</span> 🚗
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 sm:grid-cols-1">
        <p>
          I'm fueled by the satisfaction of turning complex ideas into
          user-friendly, functional web applications. My dedication to staying
          updated with the latest technologies and industry trends ensures I'm
          always at the forefront of innovation, providing my clients with
          top-tier solutions.
        </p>
        <Image src={CAR} alt="car" height={400} width={400} quality={100} />
      </div>
      <h2 className="my-8 ">
        <span className="my-8 gradient-text">My Mission</span> 💪
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 sm:grid-cols-1">
        <Image
          src={MISSION}
          alt="mission"
          height={400}
          width={400}
          quality={100}
        />
        <p>
          My mission is to continue creating web applications that not only meet
          but exceed the expectations of users and clients alike. By combining
          my skills in MERN development, Next.js, and Supabase, I aim to deliver
          exceptional digital experiences that drive success for businesses and
          leave a lasting impact on users. If you're looking for a developer
          who's committed to delivering high-quality, performance-driven web
          solutions, I'd love to hear from you. Let's collaborate to transform
          your ideas into reality!
        </p>
      </div>
    </div>
  );
};

export default Motivations;
