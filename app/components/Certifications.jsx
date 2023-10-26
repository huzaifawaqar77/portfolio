import MONGODBCERT from "./mongodb.png";
import REACTBASICCERT from "./reactbasics.png";
import REACTADVANCEDCERT from "./reactadvance.png";
import REACTBYMOSH from "./reactmosh.png";
import VERSIONCERT from "./versioncontrol.png";
import NEXTJSCERT from "./nextjs.png";

import Image from "next/image";
const Certifications = () => {
  return (
    <div className="my-8">
      <h2 className="my-8 ">
        <span className="gradient-text">My Certifications</span> 📄
      </h2>
      <div className="border-2 rounded-md border-slate-700 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-content-center">
        <Image
          src={REACTBASICCERT}
          alt="react basic certificate"
          height={300}
          width={300}
          quality={100}
        />

        <Image
          src={REACTBYMOSH}
          alt="react by mosh certificate"
          height={300}
          width={300}
          quality={100}
        />

        <Image
          src={REACTADVANCEDCERT}
          alt="react advance certificate"
          height={300}
          width={300}
          quality={100}
        />

        <Image
          src={MONGODBCERT}
          alt="mongodb certificate"
          height={300}
          width={300}
          quality={100}
        />

        <Image
          src={VERSIONCERT}
          alt="version control"
          height={300}
          width={300}
          quality={100}
        />

        <Image
          src={NEXTJSCERT}
          alt="version control"
          height={300}
          width={300}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Certifications;
