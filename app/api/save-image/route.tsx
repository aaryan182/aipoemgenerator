import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const data = await req.json();
    const {url} = data;

    const base64Image= "data:image/png;base64,"+await convertImage(url);
    const fileName ='/ai-verse/'+ Date.now()+".png";

    const imageRef = ref(storage,fileName)
    await uploadString(imageRef, base64Image, 'base64').then((snapshot) => {
        console.log("File uploaded");
    })

    const downloadedUrl = await getDownloadURL(imageRef);
    console.log(downloadedUrl);

    return NextResponse.json({
        imageUrl:downloadedUrl
    })
}

export const convertImage = async(imageUrl:string)=>{
    try {
        const response = await axios.get(imageUrl,{responseType:'arraybuffer'});
        const base64Image= Buffer.from(response.data).toString('base64');
        return base64Image;
    } catch (error) {
        console.log(error);
    }
}