import { AISearchClient } from "@/components/ai-search-client";
import { SiteFooter } from "@/components/site-footer";
import { getServerLocale } from "@/lib/server-locale";

export default async function HomePage() {
  const locale = await getServerLocale();
  // Home defaults to rent. Users switch listing type via the AI search
  // UI or by navigating to /comprar.
  //
  // Footer is passed as a slot so AISearchPage can render it only on
  // the unsearched landing — once the user searches the layout becomes
  // a results grid where a footer underneath would feel out of place.
  return (
    <AISearchClient
      listingType="rent"
      locale={locale}
      landingFooter={<SiteFooter />}
    />
  );
}
