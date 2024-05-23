import Image from "next/image";
import Link from "next/link";
import React from "react";
import header from "@/public/assets/images/header.jpg"

const Header = () => {
  return (
    <div className=" p-3 m-3 rounded-md">
      {/* Desktop Navigation */}
      <div>
        <div className="max-sm:hidden flex p-3 m-3 gap-3">
          <Image
            src={header}
            width={100}
            height={100}
            alt="header"
            className="w-full rounded-md"
          />
          <h1 className="border w-1/2 text-center flex items-center rounded-md p-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            quisquam, ducimus consectetur expedita, laborum eius molestias
            consequuntur reiciendis assumenda ipsam, atque iure nulla accusamus
            adipisci ab? Dolore aperiam veritatis cum totam error velit
            molestiae magnam expedita delectus, animi minus et?
          </h1>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <Image
          src={header}
          width={100}
          height={100}
          alt="header"
          className="w-full rounded-md"
        />
        <h1 className="border text-center flex items-center rounded-md mt-3 p-3 m-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          quisquam, ducimus consectetur expedita, laborum eius molestias
          {/* consequuntur reiciendis assumenda ipsam, atque iure nulla accusamus
          adipisci ab? Dolore aperiam veritatis cum totam error velit molestiae
          magnam expedita delectus, animi minus et? */}
        </h1>
      </div>
    </div>
  );
};

export default Header;
