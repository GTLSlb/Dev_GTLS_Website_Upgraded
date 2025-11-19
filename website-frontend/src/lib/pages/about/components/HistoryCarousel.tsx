import { HistoryData } from "@/lib/data";
import HistorySwiper from "./HistorySwiper";

const HistoryCarousel = () => {
  return (
    <div>
      <HistorySwiper items={HistoryData} />
    </div>
  );
};
export default HistoryCarousel;
