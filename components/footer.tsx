import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#060012]">
      <div className=" w-full py-10 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
          {/* Left section - Logo and social media */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Image src="/logo.svg" height={100} width={100} alt="Logo" />
            <h1 className="mt-4 text-center md:text-left">Follow us on</h1>
            <ul className="flex justify-center md:justify-start gap-x-4 mt-4">
              <li>
                <Image
                  src="/facebook.svg"
                  height={20}
                  width={20}
                  alt="facebook"
                  className="cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src="/instagram.svg"
                  height={20}
                  width={20}
                  alt="instagram"
                  className="cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src="/link.svg"
                  height={20}
                  width={20}
                  alt="linkedin"
                  className="cursor-pointer"
                />
              </li>
            </ul>
          </div>

          {/* Center section - Company Links */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h1 className="text-lg font-bold mb-4">Company</h1>
            <ul className="space-y-2 text-center md:text-left">
              <li className="hover:underline cursor-pointer">About us</li>
              <li className="hover:underline cursor-pointer">
                Become a Driver
              </li>
              <li className="hover:underline cursor-pointer">Countries</li>
              <li className="hover:underline cursor-pointer">Token</li>
              <li className="hover:underline cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Right section - Product Links */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-lg font-bold mb-4">Products</h1>
            <ul className="space-y-2 text-center md:text-left">
              <li className="hover:underline cursor-pointer">Logistics</li>
              <li className="hover:underline cursor-pointer">Cab Hailing</li>
              <li className="hover:underline cursor-pointer">Token Mining</li>
              <li className="hover:underline cursor-pointer">
                Oba Marketplace
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 text-white">
        {/* Copyright Section */}
        <div className="bg-[#120032] py-4 text-center">
          <h1 className="text-sm">&copy; 2024 Trip Picker</h1>
        </div>
      </div>
    </footer>
  );
};
