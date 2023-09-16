import React from "react";
import "./CerclesItem.css";

function CerclesItem() {
  const logos = [
    {
      logoChat: "icon-chat.png",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      logoMoney: "icon-money.png",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      logoSecurity: "icon-security.png",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  console.log(logos);

  return (
    <div className="cercles_container">
      {logos.map((logo, index) => (
        <div key={index} className="cercles">
          <img
            src={Object.values(logo)[0]} //récupère la valeur de l'objet (le chemin de l'image)
            alt="infoArgentBank"
          />
          <div className="cercles_text">
            <h3>{logo.title}</h3>
            <p>{logo.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CerclesItem;
