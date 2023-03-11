/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider,
  Accordian,
} from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const About = () => {
  const PAGE_SEO: iSEO = {
    title: "A propos",
    description: `Je suis un développeur freelance web Full Stack passionné ayant une expérience dans la création de sites web et applications avec les framework React.js, Next.js, ExpressJS, le CMS HeadLess Strapi et l'administration de bases de données.`,
    keywords:
      "Christophe Le Goff, contact, contact@christophe-le-goff.com, next js blog",
    author: "Christophe Le Goff",
  };
  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container px-3 md:pb-20 md:pt-10 pt-20">
        <div className="">
          <LinkTo
            underline={false}
            external
            href="https://christophe-le-goff.fr/"
            className="block"
          >
            <img
              src="/images/LinkedIn-cover-profil.png"
              alt="christophe-le-goff.fr"
              className="rounded-lg overflow-hidden"
            />
          </LinkTo>
          <Text title className="mb-5 mt-10 dark:text-sky-400 text-sky-600">
            Bonjour, je suis Christophe.
          </Text>
          <Text
            subtitle
            className="text-xl mb-5 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left"
          >
            Je suis un développeur freelance web Full Stack passionné ayant une
            expérience dans la création de sites web et applications avec les
            framework React.js, Next.js, ExpressJS, le CMS HeadLess Strapi et
            l'administration de bases de données.
          </Text>
          <Text p className="text-lg">
            Mon but est de promouvoir le plaisir de coder. <br />
            J'ai créé ce site pour partager mes connaissances, mon expérience et
            mes découvertes. <br />
            Je ne fais la publicité de rien, je suis complètement objectif dans
            mes approches, je partage uniquement. <br />
            <br />
            N'hésitez pas à me contacter pour participer ou simplement discuter{" "}
            <LinkTo
              underline={false}
              external
              href="mailto:contact@christophe-le-goff.com"
              className="underline font-bold"
            >
              directement
            </LinkTo>
            .
          </Text>
          <Seperator dots />
          <Text subtitle className="text-3xl font-medium">
            Me voici en détails (déplier avec les flèches)
          </Text>
          <br />
          <Accordian title="Préambule:" keepOpen>
            <Text p className="text-lg">
              Depuis toutes ces années passées à 𝙘𝙤𝙙𝙚𝙧, 𝙛𝙤𝙧𝙢𝙚𝙧 il est temps pour
              moi de vous en faire profiter un peu 😎
              <br /> <br />
              Je suis un développeur 𝗳𝘂𝗹𝗹 𝘀𝘁𝗮𝗰𝗸 spécialisé dans la création de
              sites et applications 𝘄𝗲𝗯 en 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁 - 𝘁𝘆𝗽𝗲𝘀𝗰𝗿𝗶𝗽𝘁. Je mets à
              votre disposition mes compétences pour le développement
              d'applications web et mobiles en environnement total 𝗡𝗼𝗱𝗲𝗝𝘀. 😃
            </Text>
          </Accordian>
          <Accordian title="Mes atouts:" keepOpen={false}>
            <List type={ListType.number}>
              <li>
                Je travaille en environnement 𝗹𝗶𝗻𝘂𝘅 (Arch-linux | EndeavourOS)
                <br />
                et je gère mes sites sur un serveur open full en ligne de
                commande 💻
              </li>
              <li>
                Je suis 𝗳𝗼𝗿𝗺𝗮𝘁𝗲𝘂𝗿 de métier et par passion de transmettre depuis
                plus de 20 ans 🏖️
              </li>
            </List>
          </Accordian>{" "}
          <Accordian title="Quelques technos:" keepOpen={false}>
            <Text p className="text-lg">
              𝙑𝙤𝙞𝙘𝙞 𝙦𝙪𝙚𝙡𝙦𝙪𝙚𝙨 𝙩𝙚𝙘𝙝𝙣𝙤𝙡𝙤𝙜𝙞𝙚𝙨 𝙖𝙫𝙚𝙘 𝙡𝙚𝙨𝙦𝙪𝙚𝙡𝙡𝙚𝙨 𝙟'𝙖𝙞 𝙩𝙧𝙖𝙫𝙖𝙞𝙡𝙡𝙚́
              𝙧𝙚́𝙘𝙚𝙢𝙢𝙚𝙣𝙩:
            </Text>
            <div className="flex">
              <List type={ListType.disc}>
                <li>NextJs</li>
                <li>TailwindCSS</li>
                <li>PostgreSQL</li>
              </List>
              <List className="ml-10" type={ListType.disc}>
                <li>Strapi</li>
                <li>TypeScript</li>
                <li>ReactJs</li>{" "}
              </List>{" "}
            </div>
          </Accordian>{" "}
          <Accordian title="Ce que je fais:" keepOpen={false}>
            <Text p className="text-lg">
              Développement front-end :
            </Text>
            <List type={ListType.none}>
              <li> ✔️ Construire des applications web avec 𝗡𝗲𝘅𝘁𝗝𝗦 (𝗥𝗲𝗮𝗰𝘁𝗝𝗦)</li>
              <li>✔️ Construire des sites web responsives avec 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱𝗖𝗦𝗦</li>
              <li>✔️ Mise en place du 𝗦𝗦𝗥 - 𝗦𝗦𝗚 en optimisant le 𝗦𝗘𝗢.</li>
            </List>
            <Text p className="text-lg">
              Développement back-end
            </Text>
            <List type={ListType.none}>
              <li> ✔️ Mise en place d'𝗔𝗣𝗜 RESTful via 𝗦𝘁𝗿𝗮𝗽𝗶 (𝗡𝗼𝗱𝗲𝗝𝘀)</li>
              <li> ✔️ Mise en place d'𝗔𝗣𝗜 via 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗝𝗦 (𝗡𝗼𝗱𝗲𝗝𝘀)</li>
              <li> ✔️ Développement, test via 𝗽𝗼𝘀𝘁𝗺𝗮𝗻 et déploiement.</li>
            </List>
            <Text p className="text-lg">
              Base de données
            </Text>
            <List type={ListType.none}>
              <li> ✔️ Externalisation des données back via 𝗦𝗚𝗕𝗗𝗥</li>
              <li> ✔️ Spécialisé manipulation données via 𝗣𝗼𝘀𝘁𝗴𝗿𝗲𝗦𝗤𝗟</li>
              <li> ✔️ Gestion complète en ligne de commandes (𝗣𝗦𝗤𝗟).</li>
            </List>
          </Accordian>{" "}
          <Accordian title="Un peu plus:" keepOpen={false}>
            <Text p className="text-lg">
              Développement full stack en partenariat avec la designer Sabrina
              Dos Santos:{" "}
              <LinkTo external href="https://sabrina-dossantos.fr">
                https://sabrina-dossantos.fr
              </LinkTo>
              <br />
            </Text>
            <List type={ListType.none}>
              <li>
                🌍 Visitez mon portfolio:{" "}
                <LinkTo external href="https://christophe-le-goff.fr">
                  https://christophe-le-goff.fr
                </LinkTo>
              </li>
              <li>
                💣 Mon 𝗚𝗶𝘁𝗵𝘂𝗯:{" "}
                <LinkTo external href="https://github.com/chrisalexlegoff">
                  https://github.com/chrisalexlegoff
                </LinkTo>
              </li>
            </List>
          </Accordian>
          <Seperator />
          <Text subtitle className="text-3xl font-medium">
            Mot de la fin
          </Text>
          <Text p className="text-lg">
            Curieux et disponible, je pense que l'on va bien s'entendre 🖐️
          </Text>
          <Seperator />
          <Text p className="text-lg">
            Créé par{" "}
            <LinkTo
              href="https://www.linkedin.com/in/CHRISTOPHE-yadav-087bb4112/"
              external
              className="font-semibold"
            >
              Christophe Le Goff
            </LinkTo>{" "}
            avec ♥
          </Text>
          <LinkTo
            underline={false}
            external
            href="https://www.buymeacoffee.com/chrisalexlegoff"
          >
            <img
              src="/images/bmc.png"
              className="ml-0"
              alt="christophe-le-goff.fr"
            />
          </LinkTo>
          <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
            <Text p className="!text-lg leading-relaxed">
              Pour toute question relative à ce site/projet, n'hésitez pas à me
              contacter à l'adresse e-mail indiquée. Vous pouvez également
              poster n'importe quel commentaires sur mon{" "}
              <LinkTo
                underline={false}
                external
                href="https://github.com/chrisalexlegoff/site-personnel/discussions"
                className="underline font-bold"
              >
                fil de discussions github
              </LinkTo>
              .
            </Text>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
