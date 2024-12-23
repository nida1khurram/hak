
import Hero from "@/components/landingPage/Hero";
import CreateBest from "@/components/landingPage/createbest";
import FoodCategories from "@/components/landingPage/FoodCategories";
import ExtraordinaryTaste from "@/components/landingPage/ExtraordinaryTaste";
import Statistics from "@/components/landingPage/Statistics";
import Menu from "@/components/landingPage/Menu";
import Chefs from "@/components/landingPage/Chefs";
import Testimonials from "@/components/landingPage/Testimonials";
import ResturantActive from "@/components/landingPage/resturantActive";
import BlogPosts from "@/components/landingPage/BlogPosts";





import AboutUs from "@/components/aboutUs/aboutUs";
import Faq from "./faq/page";
import BlogPage from "./blogPage/page";
import TeamMember from "@/components/aboutUs/teamMember";




export default function Home() {
  return (
   <>
   <div className="">
    {/* landing Page */}
    <Hero />
      <CreateBest/>
      <FoodCategories />
      <ExtraordinaryTaste />
       <Statistics />
    <Menu />
    <Chefs />
  <Testimonials />
 <ResturantActive />
 <BlogPosts />
 {/* landing Page end*/}



                        
{/* <Faq /> */}
{/* <BlogPage /> */}

                                  {/* <AboutUs /> */}
                                  {/* <BlogList /> */}

<TeamMember />

      </div>

   </>
  );
}
