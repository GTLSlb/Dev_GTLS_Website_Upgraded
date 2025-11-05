import Container from "../../Containers/container";
import SectionContainer from "../../Containers/sectionContainer";
import NavigationMenuBar from "./NavigationMenuBar";

const HeaderNavigation = ({}) => {
  return (
    <div className="fixed top-0 z-50 h-24 bg-white w-full">
      <Container>
        <SectionContainer className="!pt-0 !pb-0">
          <div className="flex items-center h-full">
            <NavigationMenuBar />
          </div>
        </SectionContainer>
      </Container>
    </div>
  );
};
export default HeaderNavigation;
