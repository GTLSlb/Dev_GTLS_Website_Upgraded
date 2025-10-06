import TextWrapper from "@/lib/components/Common/TextWrapper";
import { CoreValue } from "@/lib/types";

const ValueCard: React.FC<{ value: CoreValue; index: number }> = ({
  value,
  index,
}) => {
  // Default icon

  // The key styling part:
  // We check if it's the 4th item (index 3 in a 0-indexed array)
  // If it is, we apply 'row-span-2' to make it span two grid rows.
  const rowSpanClass = index === 3 ? "md:row-span-2" : "";

  return (
    <div
      className={`p-6 bg-white border border-gray-100 rounded-4xl shadow-lg gap-4 transition duration-300 hover:shadow-xl ${rowSpanClass} flex flex-col`}
    >
      <div className="text-gold">
        {value.icon}
      </div>
      <TextWrapper
        text={value.title}
        fontFamily="funnel"
        styleType="title4"
        className="text-gold"
      />

      <p className="text-gray-600 flex-grow">{value.description}</p>
    </div>
  );
};
export default ValueCard;
