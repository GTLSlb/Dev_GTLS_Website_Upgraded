"use client";
import { NavbarApiResponse } from "@/lib/types/navigation";
import Container from "../../Containers/container";
import SectionContainer from "../../Containers/sectionContainer";
import NavigationMenuBar from "./NavigationMenuBar";

type HeaderNavigationProps = {
  navbarData: NavbarApiResponse;
};

const HeaderNavigation = ({ navbarData }: HeaderNavigationProps) => {
  return (
    <div className="fixed top-0 z-50 h-24 bg-white w-full">
      <Container>
        <SectionContainer className="!pt-0 !pb-0">
          <div className="flex items-center h-full">
            <NavigationMenuBar data={navbarData?.data?.Content} />
          </div>
        </SectionContainer>
      </Container>
    </div>
  );
};
export default HeaderNavigation;
