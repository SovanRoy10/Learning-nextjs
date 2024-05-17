"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <Link href="/courses">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Our Courses"
          ></MenuItem>
        </Link>

        <Link href="/mission">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Mission"
          ></MenuItem>
        </Link>

        {/* <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Galleria"
          ></MenuItem>
        </Link> */}

        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
