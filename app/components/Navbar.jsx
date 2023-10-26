import Image from "next/image";
import GITHUB from "./github.svg";
import GMAIL from "./gmail.svg";
import PHONE from "./icons8-phone-50.png";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-8">
      <h2>Portfolio</h2>

      <a
        href="https://github.com/huzaifawaqar77"
        className="ml-auto font-semibold items-center flex gap-2"
        target="_blank"
      >
        <span>
          <Image
            src={GITHUB}
            alt="github"
            height={28}
            width={28}
            quality={100}
          />
        </span>
        Github
      </a>
      <span className="flex items-center gap-2 font-bold max-xl:hidden ">
        <Image src={PHONE} alt="github" height={28} width={28} quality={100} />
        +92 3139779027
      </span>
      <a
        href="mailto:huzaifawaqar77@gmail.com"
        className="flex gap-2 items-center font-semibold"
      >
        <span>
          <Image src={GMAIL} alt="gmail" height={28} width={28} quality={100} />
        </span>
        Gmail
      </a>
    </nav>
  );
};

export default Navbar;
