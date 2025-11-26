import Container from "@/lib/components/Containers/container";
import { getNewsPageData } from "@/lib/services/api";


const Page = async () => {
    const news_page_data = await getNewsPageData();
    console.log("News Page Data:", news_page_data);
  return (
    <Container>
      <div>test</div>
    </Container>
  );
};

export default Page;
