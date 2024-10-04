import Image from "next/image";
import React, { useState } from "react";
import { OptionField } from "./VerseType";

function AgeGroup({ userSelection }: any) {
  const optionList = [
    {
      label: "Kids (5-12)",
      imageUrl: "/kid.jpg",
      isFree: true,
    },
    {
      label: "Teens (13-18)",
      imageUrl: "/teen.jpg",
      isFree: true,
    },
    {
      label: "Adults (18+)",
      imageUrl: "/adult.jpg",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
        fieldValue: item.label,
        fieldName: "ageGroup"
    })
  };
  return (
    <div>
      <label className="font-bold text-4xl text-primary">3. Age Group</label>
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

export default AgeGroup;
