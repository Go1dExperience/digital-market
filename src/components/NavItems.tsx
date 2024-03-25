"use client";

import { useEffect, useRef, useState } from "react";

import { PRODUCT_CATEGORIES } from "@/config";

import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isAnyOpen = activeIndex !== null;

  const nafRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(nafRef, () => setActiveIndex(null));

  return (
    <div
      className="flex gap-4 h-full"
      ref={nafRef}
    >
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () =>
          setActiveIndex(index === activeIndex ? null : index);
        const isOpen = index === activeIndex;
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            key={category.value}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
