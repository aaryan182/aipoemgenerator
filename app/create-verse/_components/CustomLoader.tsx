import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";

function CustomLoader({isLoading}: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <div>
        {isLoading &&
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-10 w-full flex items-center justify-center">
                <Image
                  src={"/loader.gif"}
                  alt="loader"
                  width={300}
                  height={300}
                  className="h-[200px] w-[200px]"
                />
                <h1 className="font-bold text-2xl text-center text-primary">
                  Please Wait... Your creative verse is being creating
                </h1>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>}
    </div>
  );
}

export default CustomLoader;
