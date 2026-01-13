"use client";
import { useNavbarData } from "@/lib/hooks/use-strapi-data";
import Container from "../../Containers/container";
import SectionContainer from "../../Containers/sectionContainer";
import NavigationMenuBar from "./NavigationMenuBar";

const HeaderNavigation = ({}) => {
  const { data: navbar_data, loading } = useNavbarData();

  return (
    <div className="fixed top-0 z-50 h-24 bg-white w-full">
      <Container>
        <SectionContainer className="!pt-0 !pb-0">
          <div className="flex items-center h-full">
            {!loading && navbar_data?.data?.Content && (
              <NavigationMenuBar data={navbar_data.data.Content} />
            )}
          </div>
        </SectionContainer>
      </Container>
    </div>
  );
};
export default HeaderNavigation;
