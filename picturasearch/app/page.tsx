import LandingPage from "@/components/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b121f]">
      <main className="flex min-h-screen w-full flex-col items-center ">
        <LandingPage />
      </main>
    </div>
  );
}
