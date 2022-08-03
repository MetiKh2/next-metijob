import { FooterLinks } from "../";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-[#444444] px-20 py-10">
      <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 ">
        <FooterLinks
          title={"کارجویان"}
          links={[
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
          ]}
        />
        <FooterLinks
          title={"میانبر ها"}
          links={[
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
          ]}
        />
        <FooterLinks
          title={"متی جاب"}
          links={[
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
          ]}
        />
        <FooterLinks
          title={"شبکه های اجتماعی"}
          links={[
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
            { key: "آگهی های استخدام", value: "" },
          ]}
        />
      </section>
    </footer>
  );
};

export default Footer;
