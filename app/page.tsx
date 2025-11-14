import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

type HomeProps = {
  searchParams: Promise<{
    q: string;
  }>;
};

export const generateMetadata = async ({ searchParams }: HomeProps) => {
  const { q } = await searchParams;

  if (!q) {
    return {
      title: "npm.bet",
    };
  }

  const packages = q.split(",");

  return {
    title: `${packages.join(" vs ")} - npm.bet`,
  };
};

const Home = async () => (
  <div className="grid h-dvh grid-rows-[2rem_1fr_2rem] gap-4 overflow-hidden p-4">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Home;
