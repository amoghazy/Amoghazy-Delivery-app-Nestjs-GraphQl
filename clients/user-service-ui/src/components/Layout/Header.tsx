import React from "react";
import ProfileDrop from "../ProfileDrop";
import Link from "next/link";
import NavItems from "../NavItems";
import Image from "next/image";
import ThemeController from "../ThemController";

export default function Header() {
  return (
    <header className="w-full header fixed z-[55]">
      <div className="navbar justify-between w-[90%] mx-auto">
        <Link
          href={"/"}
          className=" btn btn-ghost hover:bg-transparent  text-2xl"
        >
          FIMT{" "}
          <Image
            unoptimized
            src={"/stellar-coin_825462.png"}
            alt="logo"
            width={25}
            height={25}
            className="inline-block -ml-2"
          />
        </Link>
        <NavItems />
        <div>
          <ProfileDrop />
          <ThemeController />
        </div>
      </div>
    </header>
  );
}
