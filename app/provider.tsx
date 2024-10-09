import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Header from "./_components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <NextUIProvider>
        <Header />
        {children}
        <ToastContainer/>
      </NextUIProvider>
    </ClerkProvider>
  );
}

export default Provider;
