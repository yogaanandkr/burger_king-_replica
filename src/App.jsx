import React from "react";
import obj from "./arr";
import { Git } from "./Git";

function App() {
  return (
    <div className="appdiv">
      <h1 className="apph1">hello im from App component</h1>
    </div>
  );
}
function App1() {
  return (
    <div className="appdiv">
      <h1 className="apph1">hello im from App component two</h1>
    </div>
  );
}

function Send() {
  let arr = ["shirts", "pants", "Shoes"];
  let ans = [];
  arr.forEach(a => {
    ans.push(React.createElement("li", {}, `${a}`));
  });
  let ol = React.createElement("ol", {}, ans);
  return ol;
}

let Table = () => {
  console.log("into Table Fucntion");
  console.log(obj.length);
  console.log("this", Object.keys(obj[0]));
  return (
    <>
      {/* <Git></Git> */}
      <table rules="all" border="2px" cellPadding="30px">
        <tr>
          {Object.keys(obj[0]).map(a => {
            return <th>{a}</th>;
          })}
        </tr>
        {obj.map(a => {
          return (
            <tr>
              <td>{a.name}</td>
              <td>{a.age}</td>
              <td>
                {a.skills.map(a => {
                  return <li>{a}</li>;
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export { App, App1, Send, Table };
