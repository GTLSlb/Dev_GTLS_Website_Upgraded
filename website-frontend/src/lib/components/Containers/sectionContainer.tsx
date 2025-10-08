import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  parentClassName?: string;
  className?: string; // Add className as an optional prop
};

const SectionContainer = ({ children, className, parentClassName }: Props) => {
  return (
    <div className={clsx("w-full h-full", parentClassName)}>
      <div
        className={clsx(
          "w-full h-full pt-15 px-5 xl:px-0 pb-15 xl:max-w-6xl 2xl:max-w-7xl mx-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
