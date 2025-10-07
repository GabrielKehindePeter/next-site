import Image from "next/image";

export default function Business() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 pt-20 bg-gray-800 pb-20"  id="info">
      <div className="p-4 rounded-2xl text-amber-100">
        <h2 className="text-3xl text-amber-500 font-bold mt-20">Business</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eum voluptatum aliquam est beatae, consectetur ratione earum itaque deleniti aut corrupti fugiat molestiae nemo dolorum facilis odio nisi optio ea?
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eum voluptatum aliquam est beatae, consectetur ratione earum itaque deleniti aut corrupti fugiat molestiae nemo dolorum facilis odio nisi optio ea?
            </p>
          </div>

      <div className="p-4 rounded-2xl">
        <Image src="/imgs/market.jpg" width={700} height={500} alt="User" className="rounded-2xl" />
        
      </div>
    </div>
  );
}
