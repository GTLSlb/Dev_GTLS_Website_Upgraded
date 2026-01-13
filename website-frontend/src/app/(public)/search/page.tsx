import { Suspense } from "react";
import Container from "@/lib/components/Containers/container";
import SearchPageLayout from "@/lib/components/WebsiteSearch/Layout";
import AnimatedLoading from "@/lib/components/Loader/AnimatedLoading";

const Page = async () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] h-full w-full">
          <AnimatedLoading />
        </div>
      }
    >
      <Container>
        <SearchPageLayout />
      </Container>
    </Suspense>
  );
};
export default Page;
