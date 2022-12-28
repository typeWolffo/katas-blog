import { Hero } from "../components/hero";
import { Blog } from "../components/blog";

export default function Home() {
  return (
    <>
      <Hero
        heroHeading="Plaid blog"
        heroBody="New product features, the latest in technology, solutions, and updates."
      />
      <Blog />
    </>
  );
}
