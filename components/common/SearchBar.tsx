"use client";

import { Search, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({ placeholder = "Search..." }: SearchBarProps) {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 dark:text-gray-400 w-5 h-5" />
      <Input
        placeholder={placeholder}
        className="pl-10 pr-12 rounded-xl bg-blue-800/40 dark:bg-gray-800/40 text-white dark:text-gray-100 placeholder:text-blue-300 dark:placeholder:text-gray-400 border border-blue-700/40 dark:border-gray-700/40 shadow-inner focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500"
      />
      <Button
        size="sm"
        variant="ghost"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-blue-700/50 dark:hover:bg-gray-700/50 rounded-lg transition"
      >
        <Mic className="w-5 h-5 text-blue-300 dark:text-gray-400" />
      </Button>
    </div>
  );
}


