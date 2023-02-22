import { tmdbLogo } from "../assets";

const Footer = () => {
  return (
    <div className="py-6 grid place-items-center gap-2">
      <p className="text-lightBlue text-sm">Powered by</p>
      <img src={tmdbLogo} alt="the movie db logo" className="w-36" />
    </div>
  );
};

export default Footer;
