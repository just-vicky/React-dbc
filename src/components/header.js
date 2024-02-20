import Pic from "./images/images.jpeg";
export default function Header() {
  return (
    <div >
      <img src={Pic} width="385px" className="rounded-t-lg" />
      <center className="text-white pt-4 font-bold text-3xl">
        <h1>Laura Smith</h1>
      </center>
      <center className="font-medium text-orange-400/80 ">
        <h4>Frontend Developer</h4>
      </center>
      <center className="py-2 text-sm text-white font-extralight">
        <h6>laurasmith.website</h6>
      </center>
      <div className="flex justify-around">
        <button className="bg-gray-200/90 w-36 py-1.5 rounded-lg font-medium">Email</button>
        <button className="bg-blue-400/70 w-36 py-1.5 rounded-lg font-medium text-white">LinkedIn</button>
      </div>
    </div>
  );
}
