import { LandingNavs } from "~/components/layout/landing-navs";
import { InitSection } from "~/components/sections/init-section";

const HomePage = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <InitSection />
      </main>
      <LandingNavs />
    </>
  );
};

export default HomePage;
