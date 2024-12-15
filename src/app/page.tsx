
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



import SignUp from "./signUp/page";
import SignIn from "./signIn/page";
import Error from "./errorPage/page";
import BlogList from "@/components/blogPage/blog1";
import AboutUs from "@/components/aboutUs/aboutUs";
import FaqPage from "@/components/faq/faq";

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



                        

<SignUp />
<SignIn />
<Error /> 
<AboutUs />
<BlogList />
<FaqPage />



      </div>

   </>
  );
}
