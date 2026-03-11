import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="overflow-x-hidden w-full flex flex-col min-h-screen">
      <Navbar />
      <section className="relative flex-grow flex flex-col content-center items-center justify-center px-6 md:px-12 lg:px-20 z-[1] overflow-hidden  min-h-screen">
        {/* Background Gradients */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-y-6 max-w-[800px] text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm shadow-sm mb-4">
            <span className="text-sm font-medium font-inter">404 Error</span>
          </div>

          <h1 className="text-[40px] box-border caret-transparent tracking-[-2.4px] font-inter md:text-[60px] lg:text-[80px] md:tracking-[-4px]">
            Page Not Found
          </h1>

          <p className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6 text-neutral-600 max-w-[500px] font-inter">
            The page you are looking for doesn't exist or has been moved. Let's
            get you back on track to finding the right solution.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-black text-white hover:bg-black/90 md:shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px] transition-all duration-300 rounded-[10px] px-8 py-6 font-medium font-inter"
            >
              <Link href="/">Return to Home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white text-black border border-neutral-200 hover:bg-neutral-50 md:shadow-[rgba(158,158,158,0.69)_0px_0.70659px_0.70659px_-0.58px] transition-all duration-300 rounded-[10px] px-8 py-6 font-medium font-inter"
            >
              <Link href="/#services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
