import { Button } from "@/components/ui/button";

import TypewriteTitle from "@/components/TypewriterTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-indigo-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center ">
          AI {" "}
          <span className="text-green-600 font-bold">
            Note Taking
          </span> {" "}
          Assistant.
        </h1>
        <div className="mt-4">
          <h2 className="font-semibold text-3xl text-center text-slate-700">
            <TypewriteTitle />
          </h2>
        </div>
        <div className="flex justify-center mt-8">
          <Link href={"/dashboard"}>
            <Button className="bg-green-500">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </div>
    </div>

  )
}
