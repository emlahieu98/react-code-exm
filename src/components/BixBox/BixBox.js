import React , {useState} from 'react'

function changeColor() {
  const arrColor = ["red", "purple", "yellow", "blue","green", "gray"];
  const item = arrColor[Math.floor(Math.random() * arrColor.length)];
  return item;
}
export default function BixBox() {
  const colorDefault = "red";
  const [color, setColor] = useState(colorDefault);
  function handleBoxClick() {
    localStorage.setItem("color", color);
    const newColor = changeColor();
    setColor(newColor);
  }
  function handleBoxClickChange() {
    localStorage.removeItem("color");
    setColor(colorDefault);
  }
  return (
    <div>
      <h2 onClick={handleBoxClick} style={{ cursor: "pointer" , color: color}}>
        Click here to change color
      </h2>
      <div
        class=""
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          margin: " 0 auto",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      ></div>
      <h2 onClick={handleBoxClickChange} style={{ cursor: "pointer" }}>
        Click here to default color
      </h2>
      <hr />
    </div>
  );
}
