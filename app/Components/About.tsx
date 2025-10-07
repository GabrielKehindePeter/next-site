import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 pt-32 bg-gray-800" id="about">
      <div className="p-4 rounded-2xl text-amber-100">
        <h2 className="text-3xl text-amber-500 font-bold mb-3">Vission</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eum voluptatum aliquam est beatae, consectetur ratione earum itaque deleniti aut corrupti fugiat molestiae nemo dolorum facilis odio nisi optio ea?</p>
        <br />
        <h2 className="text-3xl text-amber-500  font-bold mb-3">Mission</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eum voluptatum aliquam est beatae, consectetur ratione earum itaque deleniti aut corrupti fugiat molestiae nemo dolorum facilis odio nisi optio ea?</p><br/>
        <h2 className="text-3xl text-amber-500  font-bold mb-3">Core Value</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eum voluptatum aliquam est beatae, consectetur ratione earum itaque deleniti aut corrupti fugiat molestiae nemo dolorum facilis odio nisi optio ea?</p>
      </div>

      <div className="p-4 rounded-2xl">
        <Image src="/imgs/users.jpg" width={800} height={600} alt="User" className="rounded-2xl" />
        <h2 className="text-xl font-bold mb-3">Right Side</h2>
        <p>Same as Bootstrap’s <code>col-lg-6</code>.</p>
      </div>
    </div>
  );
}
