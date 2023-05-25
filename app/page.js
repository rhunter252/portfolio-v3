"use client";

import WhoWeAre from "@/components/WhoWeAre";
import Concepts from "@/components/Concepts";
import SwiperSliderComponent from "@/components/SwiperComponent";
import Publications from "@/components/Publications";
import Awards from "@/components/Awards";
import Office from "@/components/Office";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SwiperSliderComponent />
      <WhoWeAre />
      <Concepts />
      <Publications />
      <Awards />
      <Office />
    </main>
  );
}
