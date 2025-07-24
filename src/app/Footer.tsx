import Link from "next/link";

type FooterItemProps = {
  text: string;
  link: string;
};

const FooterItem = ({ text, link }: FooterItemProps) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const footerItems: FooterItemProps[] = [
  {
    text: "Home",
    link: "/home",
  },
  {
    text: "Features",
    link: "/features",
  },
  {
    text: "Contact Us",
    link: "/contactus",
  },
  {
    text: "About Us",
    link: "/aboutus",
  },
];

const FooterBlock = () => {
  return (
    <footer className="text-gray-700 dark:text-gray-300 px-5 py-2">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-3 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-14 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl">
        <div className="md:flex-1">
          <Link href="#">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-indigo-400 font-bold text-2xl">
              U
            </span>
            Unify-Ui
          </Link>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerItems.map((item, index) => (
              <FooterItem key={index} {...item} />
            ))}
          </ul>
        </nav>
        <div className="md:flex-1 flex justify-center md:justify-end gap-3">
          {/* social icons */}
          {/* (Same SVG block) */}
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
