import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { Container } from "../container";
const FaqPage = () => {
  return (
    <>
    <Container>
    <div>
     
      <div className=" flex justify-center items-center ">
        <h1 className="font-semibold text-3xl md:text-5xl">Questions Looks Here</h1>
      </div>
      <p className="flex justify-center items-center ml-5 md:ml-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam
        aperiam quisquam ducimus reiciendis.
      </p>
     
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="h-[150px] md:h-[130px] w-[350px] mb-6 rounded-md bg-[#FAF7F2]">
          <h1 className="flex justify-between items-center mt-3 font-semibold ml-3">
            <span>How we serve food?</span>
            <FaPlus className="md:mr-5" />
          </h1>
          <br />

          {/* <h1 className=" mt-3 font-semibold ml-3">How we serve food? <FaPlus /></h1><br /> */}
          <p className="ml-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam <br />
            amet debitis libero veritatis enim repellat optio natus eum delectus
            deserunt,
            <br />
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>
        <div className="h-[150px] md:h-[130px] w-[350px] mb-6 md:w-[500px] rounded-md bg-[#FAF7F2]">
          <h1 className="flex justify-between items-center mt-3 font-semibold ml-3">
            <span>How we serve food?</span>
            <FiMinus  className="mr-5" />
          </h1>
          <br />
          <p className="ml-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam <br />
            amet debitis libero veritatis enim repellat optio natus eum delectus
            deserunt,
            <br />
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="h-[150px] md:h-[130px] w-[350px] mb-6 rounded-md bg-[#FAF7F2]">
          <h1 className="flex justify-between items-center mt-3 font-semibold ml-3">
            <span>How we serve food?</span>
            <FaPlus className="mr-5" />
          </h1>
          
          <p className="ml-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam <br />
            amet debitis libero veritatis enim repellat optio natus eum delectus
            deserunt,
            <br />
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>
        <div className="h-[150px] md:h-[130px] w-[350px] mb-6 rounded-md bg-[#FAF7F2]">
          <h1 className="flex justify-between items-center mt-3 font-semibold ml-3">
            <span>How we serve food?</span>
            <FaPlus className="mr-5" />
          </h1>
          <br />
          <p className="ml-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam <br />
            amet debitis libero veritatis enim repellat optio natus eum delectus
            deserunt,
            <br />
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>
      </div>
     
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="h-[150px] md:h-[130px] w-[350px] mb-6 rounded-md bg-[#FAF7F2]">
          <h1 className="flex justify-between items-center mt-3 font-semibold ml-3">
            <span>How we serve food?</span>
            <FaPlus className="mr-5" />
          </h1>
          <br />
          <p className="ml-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam <br />
            amet debitis libero veritatis enim repellat optio natus eum delectus
            deserunt,
            <br />
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>
        <div className="h-[150px] md:h-[130px] w-[350px] mb-6 rounded-md bg-[#FAF7F2]">
          <h1 className="flex justify-between items-center mt-3 font-semibold ml-3">
            <span>How we serve food?</span>
            <FaPlus className="mr-5" />
          </h1>
          <br />
          <p className="ml-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam <br />
            amet debitis libero veritatis enim repellat optio natus eum delectus
            deserunt,
            <br />
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>
      </div>

    </div>
    </Container>
    </>
  );
};

export default FaqPage;
