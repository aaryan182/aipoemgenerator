"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface OptionField {
  label: string;
  imageUrl: string;
  isFree: boolean;
}

function VerseType({ userSelection }: any) {
  const optionList = [
    {
      label: "Free Verse",
      imageUrl: "/fv.webp",
      isFree: true,
    },
    {
      label: "Ballad",
      imageUrl: "/ballad.webp",
      isFree: true,
    },
    {
      label: "Limerick",
      imageUrl: "/lime.webp",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
        fieldValue: item.label,
        fieldName: "verseType"
    })
  };
  return (
    <div>
      <label className="font-bold text-4xl text-primary">2. Verse Type</label>
      <div className="grid grid-cols-3 gap-5 mt-3 ">
        {optionList.map((item) => (
          <button
            key={item.label}
            tabIndex={0}
            className={`grayscale hover:grayscale-0 cursor-pointer p-1 
          ${
            selectedOption == item.label
              ? "grayscale-0 border-2 rounded-3xl border-primary"
              : "grayscale"
          }`}
            onClick={() => onUserSelect(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedOption(item.label);
              }
            }}
          >
            <h2
              className="absolute bottom-1 text-2xl font-extrabold text-center w-full"
              style={{ color: "#39FF14" }}
            >
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default VerseType;
