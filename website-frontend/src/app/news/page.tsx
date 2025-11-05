import Container from "@/lib/components/Containers/container";
import CommonHero from "@/lib/components/Common/CommonHero";
import PostsAndNews from "@/lib/pages/news/sections/PostsAndNews";

const Page = () => {
  return (
    <Container>
      <CommonHero
        title="News List"
        subtitle="Stories, Trends & Industry Highlights."
        description="Stay updated with the latest news, industry trends, and behind the scenes stories from Gold Tiger. From expert tips to company milestones — our blog keeps you in the loop."
        imageSrc="/webp/3movers.webp"
        cornerText="Talk with an expert"
      />
      {/* <SearchBar /> */}
      <PostsAndNews />
    </Container>
  );
};

export default Page;
