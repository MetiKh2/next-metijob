import Image from "next/image";
import { companyLogo } from "../../constants";
const HomeCompanyCard = ({ logo, name, link }) => {
  return (
    <div className="border px-4 py-2">
      <div className="flex">
        <a href={link}>
          <Image src={`${companyLogo}${logo}`}  width={60} height={60}/>
          <p className="text-sm sm:text-md">{name}</p>
        </a>
      </div>
    </div>
  );
};

export default HomeCompanyCard;
