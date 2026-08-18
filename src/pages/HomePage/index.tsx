import { MainContent } from "../../components/MainContent";
import { Home } from "../../components/MainContent/home";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import { AnimationBar } from "../../components/ui/animation-bar";
import { AboutMe } from "../../components/About-Me";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <AnimationBar />
      <PageHeader />
      <MainContent>
        <Home/>
        <AboutMe/>
      </MainContent> 
      <Footer />
    </div>
  );
}
