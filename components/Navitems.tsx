import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const Navitems = () => {
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {NAV_ITEMS.map({href,label})=>(
            <li key={href}></li>
        )}
    </ul>
  );
};

export default Navitems;
