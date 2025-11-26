import SectionContainer from "@/lib/components/Containers/sectionContainer";

const Cards = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {serviceData.map((service) => (
          <GridCard key={service.id} {...service} />
        ))} */}
      </div>
    </SectionContainer>
  );
};
export default Cards;
