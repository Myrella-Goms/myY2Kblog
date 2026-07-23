import { PageFooter } from "../../components/PageFooter";
import { PageHeader } from "../../components/PageHeader";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <PageFooter />
    </div>
  );
}
