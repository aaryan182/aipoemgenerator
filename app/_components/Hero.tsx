import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-4 sm:px-10 md:px-28 lg:px-44 mt-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-[70px] text-primary font-extrabold py-5 sm:py-10">
            Craft Your Verse in Minutes
          </h2>
          <p className="text-lg sm:text-2xl text-primary font-light">
            Unleash creativity with AI-powered poetry, effortlessly crafting
            unique verses that inspire in just moments. Let your words flow!
          </p>
          <Link href="/create-verse">
            <Button
              size="lg"
              color="primary"
              className="mt-5 font-bold text-xl sm:text-2xl p-6 sm:p-8"
            >
              Create Verse
            </Button>
          </Link>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="relative w-full pt-[100%]">
              <Image
                src="/hero.webp"
                alt="Hero image"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;