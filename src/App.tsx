import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Mission } from "./components/Mission";
import { Hymnal } from "./components/Hymnal";
import { Studies } from "./components/Studies";
import { Books } from "./components/Books";
import { Support } from "./components/Support";

export default function App() {
  return (
    <Layout>
      <Hero />
      <BentoGrid />
      <Mission />
      <Hymnal />
      <Studies />
      <Books />
      <Support />
    </Layout>
  );
}
