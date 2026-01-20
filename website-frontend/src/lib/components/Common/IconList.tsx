import { IconListItem, IconListProps } from "@/lib/types";
import React from "react";// optional, if you use react-icons
import Image from "next/image";
import { StrapiLink } from "@/lib/services/media";

const IconList: React.FC<IconListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item: IconListItem, index: number) => (
        <li key={index} className="flex justify-start items-center gap-2">
          {/* Icon */}
          <Image
                src={StrapiLink(item.icon?.url || "")}
                alt={item.icon?.alternativeText}
                width={24}
                height={24}
              />
          {/* Description */}
          <span className="text-sm">{item.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default IconList;
