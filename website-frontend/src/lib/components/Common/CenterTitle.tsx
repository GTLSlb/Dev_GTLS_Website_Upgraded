import React from "react";

// Define the new interface for the component's props
import { CenterTitleProps } from "@/lib/types";
import TextWrapper from "./TextWrapper";
import { Button } from "@/lib/ui/button";

const CenterTitle: React.FC<CenterTitleProps> = ({
  title,
  subtitle,
  className,
  description,
  dark = false,
  buttonText,
  onButtonClick,
  buttonType = "button",
  titleColor = "text-black",
  buttonVariant = "outline",
  placement = "center", // default center
  listItems,
}) => {
  const textColor = dark ? "text-white" : "text-black";

  const buttonTextColor =
    dark || buttonVariant === "default" ? "text-white" : "text-black";
  const borderColor = dark ? "border-white bg-transparent" : "border-black";
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };
  return (
    <div className={`flex flex-col gap-4 my-10 ${alignmentClasses[placement] } ${className}`}>
      <TextWrapper
        text={title}
        fontFamily="funnel"
        styleType="title2"
        className={titleColor}
      />
      {subtitle && (
        <TextWrapper text={subtitle} fontFamily="dmSans" styleType="title4" />
      )}
      {/* Conditionally render the description if it exists */}
      {description && (
        <TextWrapper
          text={description}
          fontFamily="dmSans"
          styleType="body"
          className={`max-w-3xl ${textColor} whitespace-pre-line`}
        />
      )}
      {/* ✅ List with optional icons */}
      {listItems && listItems.length > 0 && (
        <ul className={`space-y-2 ${placement === "center" ? "mx-auto" : ""}`}>
          {listItems.map((item, idx) => (
            <li key={idx} className={`flex items-center gap-4 ${textColor}`}>
              {item.icon && (
                <span className="flex-shrink-0 text-xl">{item.icon}</span>
              )}
              <TextWrapper
                text={item.title}
                fontFamily="dmSans"
                styleType="link"
              />
            </li>
          ))}
        </ul>
      )}
      {/* Conditionally render the button if it exists */}
      {buttonText && (
        <Button
          type={buttonType}
          onClick={onButtonClick}
          className={`rounded-xl !hover:bg-creamy hover:text-black hover:cursor-pointer h-12 w-[250px]  ${borderColor} ${buttonTextColor}`}
          variant={buttonVariant}
        >
          <TextWrapper
            text={buttonText}
            fontFamily="dmSans"
            styleType="bodySmall"
          />
        </Button>
      )}
    </div>
  );
};

export default CenterTitle;
