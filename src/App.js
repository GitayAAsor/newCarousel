import "./App.css";

import img1 from "./components/graphics/istockphoto2.jpg";
import img2 from "./components/graphics/new_vitruvian_man_dock_icon_by_cmnixon_d4beq5n-fullview.jpg";
import img3 from "./components/graphics/9a3b779797d9f8e434be134e0993809f.jpg";

import Carousel from "./components/Carousel";

function App() {
  return (
    <section className="Landing">
      <Carousel images={[img1, img2, img3]} className="Carousel" />
    </section>
  );
}

export default App;
