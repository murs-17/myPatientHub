import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function SearchInput() {
    return (
        <div className="flex h-10 w-[225px] items-center rounded-md border bg-white">
            <Search className="ml-3 size-4 text-gray-800" />
            <Input
                placeholder="Type here..."
                className="h-full border-0 pl-2 shadow-none focus-visible:ring-0"
            />
        </div>
    );
}

export default SearchInput;