import { Service } from "@/config/types";
import { X } from "lucide-react";
import { Button } from "../ui/button";

interface ModalProps {
  service: Service;
  closeModal: () => void;
}

export const Modal = ({ service, closeModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex  items-center justify-center z-50">
      <div className="bg-white relative rounded-3xl shadow-lg max-w-lg w-full">
        <div
          className="w-full h-[200px] bg-cover flex items-center justify-center bg-no-repeat rounded-t-2xl "
          style={{ backgroundImage: "url('/moda.png')" }}
        >
          <h2 className="text-xl font-bold text-white">{service.title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={closeModal}
            className="text-trip-blue bg-white rounded-full h-10 w-10 flex items-center justify-center  absolute top-5  right-3 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mx-10 my-4 space-y-4">
          <p className="text-trip-blue-secondary text-xs md:text-sm">
            {service.description}
          </p>
          <Button className="text-white bg-trip-blue hover:text-trip-blue  border border-trip-blue rounded-xl">
            How it Works
          </Button>
          <p className="text-trip-blue-secondary text-xs md:text-sm leading-relaxed">
            {service.details}
          </p>
        </div>
      </div>
    </div>
  );
};
