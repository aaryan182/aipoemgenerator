"use client";
import React, { useState } from "react";
import VerseSubjectInput from "./_components/VerseSubjectInput";
import VerseType from "./_components/VerseType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";

export interface fieldData {
  fieldValue: string;
  fieldName: string;
}

export interface formDataType {
  verseSubject: string;
  verseType: string;
  ageGroup: string;
  imageStyle: string;
}

function CreateVerse() {
  const [formData, setFormData] = useState<formDataType>();
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue
    }))
    console.log(formData)
  }
  return (
    <div className="p-10 md:p-20 lg:p-40">
      <h2 className="font-extrabold text-[70px] text-primary text-center">
        Create Your Own Verse
      </h2>
      <p className="text-2xl text-primary text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        officiis velit beatae porro illum amet?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-1">
        <VerseSubjectInput userSelection={onHandleUserSelection}/>
        <VerseType userSelection={onHandleUserSelection}/>
        <AgeGroup userSelection={onHandleUserSelection}/>
        <ImageStyle userSelection={onHandleUserSelection}/>
      </div>
      <div className="flex justify-end my-10">
        <Button color="primary" className="p-10 text-2xl ">Generate Verse</Button>
      </div>
    </div>
  );
}

export default CreateVerse;
