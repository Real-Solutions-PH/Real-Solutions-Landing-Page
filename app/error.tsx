"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="overflow-x-hidden w-full flex flex-col min-h-screen">
      <Navbar />
      <section className="relative flex-grow flex flex-col content-center items-center justify-center px-6 md:px-12 lg:px-20 z-[1] overflow-hidden  min-h-screen">
        {/* Background Gradients */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-y-6 max-w-[800px] text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-red-500/20 bg-red-50 text-red-600 shadow-sm mb-4">
            <span className="text-sm font-medium font-inter">
              Something went wrong
            </span>
          </div>

          <h1 className="text-[40px] box-border caret-transparent tracking-[-2.4px] leading-[48px] font-inter md:text-[60px] lg:text-[80px] md:tracking-[-4px] md:leading-[80px]">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(25deg,rgb(0,0,0)_34%,rgba(0,0,0,0.6)_124%)] box-border caret-transparent inline-block tracking-[-2.4px] md:tracking-[-4px]">
              Connection Lost
            </span>
          </h1>

          <p className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6 text-neutral-600 max-w-[500px] font-inter">
            We've encountered an unexpected issue while trying to load this
            page. Please try again or return to the homepage to continue
            exploring our AI solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button onClick={() => reset()}>Try Again</Button>
            <Button asChild variant="outline">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
