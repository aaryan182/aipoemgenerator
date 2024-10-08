"use client";
import React, { useState } from "react";
import VerseSubjectInput from "./_components/VerseSubjectInput";
import VerseType from "./_components/VerseType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";
import { chatSession } from "@/config/GeminiAi";
import { db } from "@/config/db";
import { VerseData } from "@/config/schema";
// @ts-ignore
import uuid4 from "uuid4";
import CustomLoader from "./_components/CustomLoader";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

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
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const notify = (message: string) => toast("Verse Created", { type: "success" });
  const notifyError = (message: string) => toast(message, { type: "error" });
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
  };

  const GenerateStory = async () => {
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      "{verseSubject}",
      formData?.verseSubject ?? ""
    )
      .replace("{verseType}", formData?.verseType ?? "")
      .replace("{ageGroup}", formData?.ageGroup ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "");
    try {
      const result = await chatSession.send(FINAL_PROMPT);
      const verse = JSON.parse(result?.response.text());
      const imageResponse = await axios.post("/api/generate-image", {
        prompt:
          "Add text with title:" +
          verse?.verse_cover?.title +
          "in bold text for verse cover," +
          verse?.verse_cover?.image_prompt,
      });
      const AiImageUrl = imageResponse?.data?.imageUrl;
      const imageResult = await axios.post("/api/save-image", {
        url: AiImageUrl,
      });

      const FirebaseStorageImageUrl = imageResult?.data?.imageUrl;

      const response = await SaveInDB(
        result?.response.text(),
        FirebaseStorageImageUrl
      );
      console.log(response);
      notify("Verse Created");
      setLoading(false);
    } catch (error) {
      console.log(error);
      notifyError("server error , try again!");
      setLoading(false);
    }
  };

  const SaveInDB = async (output: string, imageUrl: string) => {
    const recordId = uuid4();
    setLoading(true);
    try {
      const result = await db
        .insert(VerseData)
        .values({
          verseId: recordId,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          verseSubject: formData?.verseSubject,
          verseType: formData?.verseType,
          output: JSON.parse(output),
          coverImage: imageUrl,
          userEmail: user?.primaryEmailAddress?.emailAddress,
          userImage: user?.imageUrl,
          userName: user?.fullName,
        })
        .returning({ verseId: VerseData?.verseId });
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
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
        <VerseSubjectInput userSelection={onHandleUserSelection} />
        <VerseType userSelection={onHandleUserSelection} />
        <AgeGroup userSelection={onHandleUserSelection} />
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="flex justify-end my-10">
        <Button
          color="primary"
          className="p-10 text-2xl"
          onClick={GenerateStory}
          disabled={loading}
        >
          Generate Verse
        </Button>
      </div>
      <CustomLoader isLoading={loading} />
    </div>
  );
}

export default CreateVerse;
