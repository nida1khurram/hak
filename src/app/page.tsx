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
import OurMenu from "@/components/ourMenu/ourMenu1";
import MainMenu from "@/components/ourMenu/mainMenu";
import CodeMenu2 from "@/components/code/app_menu_page2 (1)";



export default function Home() {
  return (
   <>
   <div className="">
    {/* <Hero /> */}
      {/* <CreateBest/> */}
               <FoodCategories />
               {/* <ExtraordinaryTaste /> */}
      <Statistics />
      <Menu />
      {/* <Chefs /> */}
      {/* <Testimonials /> */}
      {/* <BlogPosts /> */}
 <MainMenu />
 {/* <CodeMenu2 /> */}
    <br />
      </div>






   </>
  );
}
