import logo from "/logo.png";

export default function Header() {
  return (
    <div className="w-full h-32 object-cover flex justify-center bg-gray-900">
      <img src={logo} className="object-cover h-40 w-40"></img>
    </div>
  );
}
