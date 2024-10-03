import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[70px] text-primary font-extrabold py-10">
            Craft Your Verse in Minutes
          </h2>
          <p className="text-2xl text-primary font-light">
            Unleash creativity with AI-powered poetry, effortlessly crafting
            unique verses that inspire in just moments. Let your words flow!
          </p>
          <Link href="/create-verse">
            <Button
              size="lg"
              color="primary"
              className="mt-5 font-bold text-2xl p-8"
            >
              Create Verse
            </Button>
          </Link>
        </div>
        <div>
          <Image src="/hero.webp" alt="logo" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
