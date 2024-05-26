import { FaCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <div className="hero-content w-full md:w-1/2 flex flex-col items-center">
          <div className="w-4/5 flex flex-col space-y-8">
            <h1 className="text-[#343A40] text-6xl font-semibold leading-tight">
              One stop solution to test your Strategy ideas
            </h1>
            <p className="text-[#6C757D] leading-7 text-lg">
              As we are launching a Beta soon, we are giving away 1 month FREE
              subscription to our early backers. Sign up below to get FREE
              subscription.
            </p>
            <div className="space-y-2">
              <button className="bg-[#0D6EFD] px-4 py-2 rounded text-white">
                Sign Up
              </button>
              <div className="flex gap-6">
                <span className="flex gap-2 items-center">
                  <FaCheck />
                  Free 30-day subscription
                </span>
                <span className="flex gap-2 items-center">
                  <FaCheck />
                  Free 30-day subscription
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co/MZvKB2B/3426526-removebg-preview.png"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
