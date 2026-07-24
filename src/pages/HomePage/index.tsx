import { MainContent } from "../../components/MainContent";
import { Home } from "../../components/MainContent/home";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <MainContent>
        <Home/>
      </MainContent> 
      <Footer />
    </div>
  );
}
