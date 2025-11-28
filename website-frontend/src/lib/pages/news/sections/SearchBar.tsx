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
import React from "react";
import { XCircleIcon } from "lucide-react";

const SearchBar = ({ data, onSelect, onSearch, onSearchClick} : {data: any, onSelect: any, onSearch: any, onSearchClick: any}) => {
    const NO_CATEGORY_OPTION = {
    label: "All Categories",
    value: "all",
};

  const fallbackData = [
    {
      label: "Politics",
      value: "Politics"
    },
    {
      label: "Business",
      value: "Business"
    },
    {
      label: "Breaking News",
      value: "Breaking News"
    },
    {
      label: "Technology",
      value: "Technology"
    },
    {
      label: "Hard News",
      value: "Hard News"
    },
    {
      label: "Soft News",
      value: "Soft News"
    },
    {
      label: "Feature Stories",
      value: "Feature Stories"
    },
    {
      label: "Human Interest",
      value: "Human Interest"
    },
    {
      label: "Investigative Reporting",
      value: "Investigative Reporting"
    },
  ]

  const [select_Value, set_select_value] = React.useState(NO_CATEGORY_OPTION.value);
  const handleClear = () => {
    set_select_value(NO_CATEGORY_OPTION.value);
    onSelect(NO_CATEGORY_OPTION.value);
  };

  return (
      <div className="flex flex-col md:flex-row p-5 border border-color-[#6e6f7a] rounded-3xl gap-4">
        <Input
          placeholder="Search Articles"
          className="bg-creamy rounded-full w-full h-11"
          icon={<Search className="text-dark-gold size-4" />}
          onInputCapture={onSearch}
        />
        <Select value={select_Value} onValueChange={(e)=>{onSelect(e);set_select_value(e);}}>
          <SelectTrigger className="bg-creamy rounded-full w-full md:w-9/12 !h-11">
            <SelectValue  placeholder="Article Category"  />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={NO_CATEGORY_OPTION.value}>
                {NO_CATEGORY_OPTION.label}
              </SelectItem>
            {
              data?.length > 0
              ? data?.map((item: any) => (
                <SelectItem key={item.label} value={item.value}>{item.label}</SelectItem>
              ))
              : fallbackData?.map((item: any) => (
                <SelectItem key={item.label} value={item.value}>{item.label}</SelectItem>
              ))
            }
          </SelectContent>
        </Select>
        <Button onClick={onSearchClick} className="bg-dark-gold rounded-full h-11 md:w-2/12">
          <Search className="text-creamy size-4" /> Search Article
        </Button>
      </div>
  );
};

export default SearchBar;
