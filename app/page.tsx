import Image from "next/image";
import HomeCarousel from "./Components/HomeCarousel";
import Hero from "./Components/Typewriter";
import About from "./Components/About";
import Info from "./Components/Info";
import Business from "./Components/Business";
export default function Home() {
  return (
<div>
<HomeCarousel />
 <Hero />
<About />
<Info />
<Business />
</div>
  );
}
