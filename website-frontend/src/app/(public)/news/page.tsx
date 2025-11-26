import Container from "@/lib/components/Containers/container";
import PostsAndNews from "@/lib/pages/news/sections/PostsAndNews";
import { newsData,postsData } from "@/lib/data";



const Page = () => {
  return (
    <Container>
      {/* <CommonHero
        title={newsHeroData.title}
        subtitle={newsHeroData.subtitle}
        description={newsHeroData.description}
        imageSrc={newsHeroData.imageSrc}
        cornerText={newsHeroData.cornerText}
      /> */}
      {/* <SearchBar /> */}
      <PostsAndNews posts={postsData} news={newsData} />
    </Container>
  );
};

export default Page;
