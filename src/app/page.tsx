import { Tag } from "lucide-react";

import Hero from "@/components/Hero";
import CreateBest from "@/components/createbest";
import FoodCategories from "@/components/FoodCategories";
import ExtraordinaryTaste from "@/components/ExtraordinaryTaste";
import Statistics from "@/components/Statistics";
import Menu from "@/components/Menu";
import Chefs from "@/components/Chefs";
import Testimonials from "@/components/Testimonials";
import BlogPosts from "@/components/BlogPosts";
import F2 from "@/components/f2";


export default function Home() {
  return (
   <>
   <div className="bg-[#0D0D0D]">
    <Hero />
      <CreateBest/>
               {/* <FoodCategories /> */}
               {/* <ExtraordinaryTaste /> */}
      <Statistics />
      <Menu />
      {/* <Chefs /> */}
      {/* <Testimonials /> */}
      {/* <BlogPosts /> */}
      {/* <F2 /> */}
      </div>






   </>
  );
}
