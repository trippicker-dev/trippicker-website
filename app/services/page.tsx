"use client";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/data";
import { Modal } from "@/components/services/modal";
import { Service } from "@/config/types";

function ServicePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <div
        className=" bg-cover bg-no-repeat w-full h-[400px] py-16 px-6"
        style={{ backgroundImage: "url('/one.png')" }}
      >
        <div className="flex items-center flex-col gap-y-5 justify-center max-w-4xl mx-auto">
          <h1 className="text-white text-center text-lg md:text-xl lg:text-3xl font-bold">
            Unlock a World of Possibilities with Trippicker: Rides, Deliveries,
            and So Much More!
          </h1>
          <h2 className=" text-gray-400 text-center text-base md:text-lg lg:text-lg font-medium">
            With Trippicker, getting around is just the beginning. Whether
            you&apos;re booking a ride, sending a package, discovering new
            hangouts, or even mining cryptocurrency on the go, our app is
            designed to make life easier and more fun. Explore endless
            possibilities and unlock new experiences with every ride!
          </h2>
        </div>
      </div>

      <section className="flex items-center flex-col justify-center py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-0">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white/10 backdrop-blur-lg border-[rgba(188,153,255,1)] shadow-lg rounded-xl border p-6 max-w-sm mx-auto"
            >
              {/* Circular cutout at the top-right corner */}
              <div className="absolute -top-6 -right-6 bg-purple-500 h-20 w-20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {service.id}
              </div>

              {/* Card Content */}
              <div className="relative h-[210px]">
                <h2 className="text-lg font-bold text-trip-blue">
                  {service.title}
                </h2>
                <p className="text-trip-blue-secondary text-sm mt-2 z-10">
                  {service.description}
                </p>
                <p
                  className="text-trip-blue font-medium my-2 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  Read More
                </p>
              </div>

              {/* Bottom image */}
              <div className="mt-6 flex justify-center absolute bottom-0 right-2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={75}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal component */}
      {selectedService && (
        <Modal service={selectedService} closeModal={closeModal} />
      )}
    </div>
  );
}

export default ServicePage;
