import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

const Home = () => (
  <div className="grid h-screen grid-rows-[2rem_1fr_2rem] gap-4 overflow-hidden p-4">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Home;
