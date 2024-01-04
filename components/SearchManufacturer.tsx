"use client";
import { SearchManufactureProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufactureProps) {
  const [query, setQuery] = useState("");
  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-100"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufactures.map((item) => (
                <Combobox.Option
                  value={item}
                  key={item}
                  className={({ active }) => `
                  relative search-manufacturer__option 
                  ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                >
                  {({ active, selected }) => (
                    <span
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {item}
                    </span>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
