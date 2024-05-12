// import React, { useState } from "react";

import Add from "./Add";
import ExampleComponent from "./ExampleComponent";
import ListBottom from "./ListBottom";

// const [count, setCount] = useState(1);



const List = ({click}) => {
  return (
    <>
      <div className="w-[409px] h-[100%] p-[24px] flex flex-col justify-between rounded-tr-[16px] rounded-br-[16px] bg-[#1F1D2B]">
        <ExampleComponent />
        <Add click={click}/>
        <ListBottom/>
      </div>
    </>
  );
};

export default List;
