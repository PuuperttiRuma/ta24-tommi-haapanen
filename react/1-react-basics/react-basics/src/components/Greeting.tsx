// import React from "react";
interface GreetProps {
  fullName: string;
  age: number;
}

const Greeting = ({fullName, age}: GreetProps) =>{
  return <div>
    My name is {fullName} and I am {age} years old!
  </div>
}

export default Greeting;