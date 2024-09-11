'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12  cursor-pointer items-center gap-12">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="PBI logo"
            className="size-[23px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">PBI</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", {'bg-bank-gradient':isActive})}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
