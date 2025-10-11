import Image from "next/image";
import HomeCarousel from "./Components/HomeCarousel";
import Hero from "./Components/Typewriter";
import About from "./Components/About";
import Info from "./Components/Info";
import Business from "./Components/Business";
import SliderDemo from "./Components/Swiper";
export default function Home() {
  return (
<div>
<HomeCarousel />
 <Hero />
 <SliderDemo />
<About />
<Info />
<Business />
</div>
  );
}
