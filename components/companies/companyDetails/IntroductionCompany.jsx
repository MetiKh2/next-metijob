import { companyBanner } from "../../../constants";
import {CompanyDetailsImage} from '../../';
// import mammam from '../../../public/map.png'
const IntroductionCompany = ({
  workCulture,
  banner: {
    thirdBannerImage,
    thirdBannerDescription,
    fourthBannerImage,
    fourthBannerDescription,
  },
  location,
  jobBenefits
}) => {
  return (
    <section className="py-5">
      <div className="flex lg:flex-row flex-col px-5 mb-6">
        <div className="lg:max-w-sm bg-white border lg:ml-4 rounded-md p-4 leading-7 opacity-75">
          <p dangerouslySetInnerHTML={{ __html: workCulture }}></p>
        </div>
        <CompanyDetailsImage
          description={location}
          image={'/map.png'}
        />
      </div>
      <div className="flex lg:flex-row flex-col px-5 my-5">
        <CompanyDetailsImage
          description={thirdBannerDescription}
          image={`${companyBanner}${thirdBannerImage}`}
        />
      </div>
      <div className="flex lg:flex-row flex-col px-5 mb-6">
        <div className="lg:max-w-sm bg-white border lg:ml-4 rounded-md p-4 leading-7 opacity-75">
          <p dangerouslySetInnerHTML={{ __html: jobBenefits }}></p>
        </div>
        <CompanyDetailsImage
          description={fourthBannerDescription}
          image={`${companyBanner}${fourthBannerImage}`}

        />
      </div>
    </section>
  );
};

export default IntroductionCompany;
