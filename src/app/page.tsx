
import Hero from "@/components/Hero";
import CreateBest from "@/components/createbest";
import FoodCategories from "@/components/FoodCategories";
import ExtraordinaryTaste from "@/components/ExtraordinaryTaste";
import Statistics from "@/components/Statistics";
import Menu from "@/components/Menu";
import Chefs from "@/components/Chefs";
import Testimonials from "@/components/Testimonials";
import BlogPosts from "@/components/BlogPosts";
import MainMenu from "@/components/ourMenu/mainMenu";
import SignUp from "./signUp/page";
import SignIn from "./signIn/page";
import Error from "./errorPage/page";
import OurChefs from "@/components/ourChef";
import ShopDetail from "./shop/[shopDetail]/page";





export default function Home() {
  return (
   <>
   <div className="">
    <Hero />
      <CreateBest/>
               <FoodCategories />
               <ExtraordinaryTaste />
      <Statistics />
      <Menu />
               <Chefs />
               <Testimonials />
               <BlogPosts />
     <MainMenu />
        
<ShopDetail />
<SignUp />
<SignIn />
<Error /> 
<OurChefs />

      </div>






   </>
  );
}
