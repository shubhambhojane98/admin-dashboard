import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-blue-600">
      <div className="bg-white p-24 sm:p-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-width-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-sm font-bold tracking-tight text-gray-900 sm:text-2xl">
              Your Data, Simplified – Drive Decisions with Clarity
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Empower your decisions with a streamlined dashboard designed for
              clarity and control. Access essential user insights, track
              activity trends, and manage user accounts seamlessly.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App Screenshots"
              src="/dashboard.png"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
