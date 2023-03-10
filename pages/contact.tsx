/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const Contact = () => {
  const PAGE_SEO: iSEO = {
    title: "Contactez-moi",
    description:
      "Pour toute question ou demande de renseignement concernant le site personnel de Christophe Le goff envoyez un mail à contact@christophe-le-goff.com",
    keywords:
      "webexpx, contact us, contact@christophe-le-goff.com, next js blog template",
    author: "Christophe Le Goff",
  };
  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container px-3 pb-10 md:pt-20 pt-[80px]">
        <Text title className="!text-5xl !font-light">
          Contactez-moi
        </Text>

        <div className="flex flex-wrap mt-8 justify-between">
          <div className="md:w-1/2 w-full md:pl-2">
            <Text p className="!text-lg leading-relaxed">
              Pour toute question relative à ce site/projet, n'hésitez pas à me
              contacter à l'adresse e-mail indiquée. Vous pouvez également
              poster n'importe quel commentaires sur mon{" "}
              <LinkTo
                external
                underline={false}
                href="https://github.com/chrisalexlegoff/site-personnel/discussions"
              >
                <u>
                  <i>fil de discussions github</i>
                </u>
              </LinkTo>
              .
            </Text>
          </div>
          <div className="md:w-1/3 w-full">
            <Text p>Mon mail</Text>
            <LinkTo
              className="block"
              href="mailto:contact@christophe-le-goff.com"
            >
              <Text subtitle className="!font-light md:!text-2xl w-fit">
                contact@christophe-le-goff.com
              </Text>
            </LinkTo>
          </div>
        </div>
      </section>

      <section
        className={
          "dark:bg-slate-800 bg-blue-100 mt-10 container py-10 md:px-20 px-5"
        }
      >
        <Text subtitle className="md:!text-5xl text-4xl !font-light">
          Travailler ensemble . . .
        </Text>
        <Text p className="!text-lg leading-relaxed mt-5 px-1">
          Je suis actuellement à la recherche d'un poste à distance, présentiel
          - hybride dans les Hauts de France ou de nouvelles opportunités. Que
          vous ayez un projet à mettre en place ou que vous souhaitiez
          simplement dire bonjour, n'hésitez pas !
        </Text>
      </section>
    </PageLayout>
  );
};

export default Contact;
