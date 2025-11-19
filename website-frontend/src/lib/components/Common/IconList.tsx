import { IconListProps } from "@/lib/types";
import React from "react";// optional, if you use react-icons



const IconList: React.FC<IconListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          {/* Icon */}
          <span className="text-xl text-gold">{item.icon}</span>
          {/* Description */}
          <span className="text-sm">{item.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default IconList;
