import Link from "next/link";
import localFont from "next/font/local" 
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src:"../../public/fonts/font.woff2"
})

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className
        )}>
        <div
          className="mb-4 flex items-center border shadow-sm p-4 
        bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="w-6 h-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-neutral-800 text-center mb-6">
          Trello helps team move 
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600
         to-pink-600 text-white px-4 p-2 rounded-md  w-fit">
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks.
        From high rises to the home office, the way your team works is 
        unque - accomplis it all with Trello
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Get Trello for free
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
