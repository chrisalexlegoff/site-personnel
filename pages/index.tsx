/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo, Seperator } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureArticles";

const Home = () => {
  return (
    <PageLayout home>
      <section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200">
        <div className="container text-center px-3">
          <Text title className="text-3xl">
            Bienvenue sur le site personnel de Christophe Le Goff
          </Text>

          <Text p className="mt-3 text-xl">
            Du simple pour dompter le compliqué, je partage mon expérience de
            développeur NodeJs.
          </Text>

          <div className="flex justify-center mt-5 flex-wrap ">
            <LinkTo
              underline={false}
              external
              href="https://github.com/chrisalexlegoff"
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Github</span>
            </LinkTo>
            <LinkTo
              underline={false}
              href="/a-propos"
              passHref
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">A propos</span>
            </LinkTo>
            <LinkTo
              underline={false}
              href="/blog"
              passHref
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Le blog</span>
            </LinkTo>
            <LinkTo
              underline={false}
              href="/tutoriels"
              passHref
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Tutoriels</span>
            </LinkTo>
            <LinkTo
              underline={false}
              external
              href="https://www.buymeacoffee.com/chrisalexlegoff"
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Support</span>
            </LinkTo>
          </div>
        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={"flex flex-wrap"}>
          <FeaturedArticleSection />
          <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-medium">
            Voir les autres articles
          </h1>
          <hr className="border-1 mb-5 w-[98%] mx-auto" />
          <HomeNonFeatureArticles />
          <Seperator />
          {/* TODO: METTRE UN FILTRE !! */}
          <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-medium">
            Voir les autres tutoriels
          </h1>
          <hr className="border-1 mb-5 w-[98%] mx-auto" />
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
