import logo from "/logo.png";
import { SocialIcon } from "react-social-icons";

export default function FooterComp() {
  return (
    <footer className="w-full pt-10 pb-40 bg-gray-50 flex flex-col items-center">
      <div className="w-full h-32 object-cover flex justify-center mb-16">
        <img src={logo} className="object-cover h-40 w-40"></img>
      </div>
      <p className="mb-4 text-gray-900 poppins font-medium">
        The innovative platform for education
      </p>
      <p className="mb-10 text-gray-900 poppins font-medium">
        © TheVokabulary 2023
      </p>
      <p className="mb-4 text-gray-900 poppins font-medium">
        Development by{" "}
        <a
          href="https://github.com/antoniogrosu/"
          target="_blank"
          className="text-myPurple font-bold"
        >
          Antonio Grosu
        </a>
      </p>
      <div className="flex justify-around w-2/4 mt-4 md:w-1/4">
        <SocialIcon url="https://github.com/antoniogrosu/" />
        <SocialIcon url="https://www.instagram.com/antoniokrt19/" />
        <SocialIcon url="https://www.linkedin.com/in/antonio-grosu-787110246/" />
      </div>
    </footer>
  );
}
