import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
      <div className="flex flex-col md:flex-row p-5 border border-color-[#6e6f7a] rounded-3xl gap-4">
        <Input
          placeholder="Your Name"
          className="bg-creamy rounded-full w-full h-11"
          icon={<Search className="text-dark-gold size-4" />}
        />
        <Select>
          <SelectTrigger className="bg-creamy rounded-full w-full md:w-9/12 !h-11">
            <SelectValue placeholder="Article Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-dark-gold rounded-full h-11 md:w-2/12">
          <Search className="text-creamy size-4" /> Search Article
        </Button>
      </div>
  );
};

export default SearchBar;
