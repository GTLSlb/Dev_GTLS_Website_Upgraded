import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full h-full ">
      {children}
    </div>
  );
};

export default Container;
