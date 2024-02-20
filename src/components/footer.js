import fb from"./images/facebook.png";
import insta from"./images/instagram.png";
import tw from"./images/twitter-sign.png";
import gi from"./images/github.png";

export default function Footer(){

  return(
    <div className="flex justify-around  ">
      <img src={tw} width="40px"/>
      <img src={fb} width="40px"/>
      <img src={insta} width="40px"/>
      <img src={gi} width="40px"/>
    </div>
  )
}