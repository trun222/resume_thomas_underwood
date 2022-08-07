import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
const Home: NextPage = () => {
  return (
    <div className="bg-slate-800 h-screen">
      <Head>
        <title>Thomas Underwood - Resume</title>
        <meta
          name="description"
          content="My Resume website. The professional life of a frontend developer!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Links Bar */}
        {/* <div
          className={`flex flex-row justify-center ${styles.gradient} h-10 p-2`}
        >
          <p className="text-xl font-boldt text-white">Build something great</p>
        </div> */}

        {/* Profile Picture and Basic Job Description */}
        <div className={`h-screen ${styles.geometricBackground}`}>
          <div className={`flex flex-col justify-start p-10`}>
            {/* Social Media */}
            <div className="flex flex-row justify-between">
              <div></div>
              <div className="flex flex-row">
                <a
                  className="mx-2"
                  href="https://github.com/trun222"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithubSquare
                    className={`font-bold hover:text-teal-500`}
                    size={30}
                  />
                </a>

                <a
                  className="mx-2"
                  href="https://www.linkedin.com/in/thomas-underwood-ii/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin
                    className={`font-bold hover:text-teal-500`}
                    size={30}
                  />
                </a>

                <a
                  className="mx-2"
                  href="https://medium.com/@thomasunderwoodii"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaMedium
                    className={`font-bold hover:text-teal-500`}
                    size={30}
                  />
                </a>
              </div>
            </div>
            <div className="ml-20 my-6">
              <h1 className="title-font font-bold text-7xl">
                Thomas Underwood
              </h1>
            </div>
            <div className="flex flex-row ml-20 mt-6">
              <Image
                className="rounded-md"
                src="/me.jpg"
                height="650px"
                width="950px"
              />
              <div
                className={`relative top-[120px] left-[-120px] h-[350px] w-auto bg-gradient-to-r ${styles.bgTertiary} rounded-lg p-10`}
              >
                <h2
                  className={`title-font text-6xl font-black text-white ${styles.colorPrimary}`}
                >
                  Lead Fullstack Developer at{" "}
                  <a
                    className="underline hover:text-white"
                    href="https://www.glossi.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Glossi
                  </a>
                </h2>
                <h2 className={`title-font text-5xl font-medium  my-2`}>
                  <a
                    className="hover:text-white"
                    href="https://medium.com/@thomasunderwoodii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tech Blogger
                  </a>
                </h2>
                <h2 className="title-font text-5xl font-medium  my-2">
                  <a
                    className="hover:text-white"
                    href="https://leetcode.com/trun222/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leet Coder
                  </a>
                </h2>
                <h3 className="title-font text-4xl font-thin mt-2">
                  Frontend, Backend, FullStack, DevOps, Project Management
                </h3>
              </div>
            </div>

            {/* Place Holder */}
            <h1></h1>
          </div>
        </div>

        {/* Work History */}
        <div className={`h-full w-full ${styles.animatedGradient} p-8`}>
          <h1 className={`title-font text-6xl font-bold `}>Work History</h1>

          <div className="flex flex-col items-center gap-8 p-8">
            <div
              className={`h-auto w-[800px] ${styles.bgPrimary} relative right-60 p-10`}
            >
              <h1 className="text-3xl font-bold text-white">
                Lead Developer - Glossi, Los Angeles, CA
              </h1>
              <p className="text-2xl text-white my-2">
                Technical lead of an engineering team that created the
                world&apos;s first photo-realistic video and product shots in a
                web browser with Unreal Engine 5. Planned company technical
                objectives on the executive leadership team and was responsible
                for coding, goal setting, project planning, and execution.
                Architected and implemented the product, supporting services,
                CI/CD, and Cloud infrastructure. Hired, trained, and led my
                engineering team. Worked across multiple supporting teams with
                QA, UI/UX, and the executive leadership team. (
                <span className="font-bold">Next.js</span>,{" "}
                <span className="font-bold">Chakra</span>,{" "}
                <span className="font-bold">GraphQL</span>,{" "}
                <span className="font-bold">WebRTC</span>,{" "}
                <span className="font-bold">Typescript</span>,{" "}
                <span className="font-bold">Auth0</span>,{" "}
                <span className="font-bold">AWS</span>)
              </p>
            </div>

            <div
              className={`h-auto w-[800px] ${styles.bgTertiary} relative left-60  p-10`}
            >
              <h1 className="text-3xl font-bold">
                Sr. UI Engineer - Moonwalk, New York City
              </h1>
              <p className="text-2xl my-2">
                Lead frontend developer on a Next.js project that allowed us to
                sell NFTs. Wrote ~40% of the production code for an NFT release
                that netted the company over 1M dollars in revenue. Responsible
                for multiple web applications and backend services. Implemented
                production-ready code for multiple releases. Planned and
                executed large code migrations for Auth0, Web3 auth, and moving
                from React to Next.js. Actively troubleshot and fixed production
                performance issues and bugs. (
                <span className="font-bold">Next.js</span>,{" "}
                <span className="font-bold">Chakra</span>,{" "}
                <span className="font-bold">GraphQL</span>,{" "}
                <span className="font-bold">Typescript</span>,{" "}
                <span className="font-bold">Auth0</span>,{" "}
                <span className="font-bold">AWS</span>)
              </p>
            </div>

            <div
              className={`h-auto w-[800px] ${styles.bgPrimary} relative right-60 p-10`}
            >
              <h1 className="text-3xl font-bold text-white">
                Sr. Full Stack Developer - Enosix
              </h1>
              <p className="text-2xl text-white my-2">
                Lead front-end developer for our SaaS application. Implemented
                OAuth 2.0 flow for our login process. Standardized and
                refactored our React routing and hooks. Taught other developer’s
                front-end best practices for consistent and performant front-end
                code. Pioneered E2E testing with docker, cypress, and xpra for
                automated testing. Created CI integrations for TestRail and our
                project planning platform ShortCut through a custom PHP plugin
                that I wrote. This resulted in saving our QA 30% of their time
                weekly on bug tracking and made ticket generation standardized
                across our development team. (
                <span className="font-bold">React</span>,{" "}
                <span className="font-bold">SignalR</span>,{" "}
                <span className="font-bold">Typescript</span>,{" "}
                <span className="font-bold">Auth0</span>,{" "}
                <span className="font-bold">AWS</span>)
              </p>
            </div>

            <div
              className={`h-auto w-[800px] ${styles.bgTertiary} relative left-60  p-10`}
            >
              <h1 className="text-3xl font-bold">
                Sr. Full Stack Developer - Fischer Homes
              </h1>
              <p className="text-2xl my-2">
                Architected and designed replacement web solutions for legacy
                software that was slated to be deprecated in 4 months. Lead and
                trained junior developers in front-end industry standards.
                Configured and deployed AWS services for supporting applications
                and services. Implemented modern OAuth 2.0 PKCE standards in
                front-end applications. (
                <span className="font-bold">Vue.js</span>,{" "}
                <span className="font-bold">Vuetify</span>,{" "}
                <span className="font-bold">Fastify</span>,{" "}
                <span className="font-bold">Typescript</span>,{" "}
                <span className="font-bold">OAuth 2.0</span>,{" "}
                <span className="font-bold">AWS</span>)
              </p>
            </div>

            <div
              className={`h-auto w-[800px] ${styles.bgPrimary} relative right-60 p-10`}
            >
              <h1 className="text-3xl font-bold text-white">
                Sr. Software Engineer - ResolvIT
              </h1>
              <p className="text-2xl text-white my-2">
                Presided over a committee that focused on creating well-designed
                reusable components for GE Aviation. Lead the front-end
                development effort for a new notification service that is
                utilized throughout GE Aviation. Helped lead an effort to create
                a new design system for GE Aviation with the head of UI/UX.
                Redesigned a legacy front-end web application for a largely
                adopted service that is used to build, test and deploy code
                throughout GE Aviation. Primarily built high- performing, modern
                web applications for large groups of users. Participated in
                &apos;big room&apos; project planning for establishing features,
                tasks, and various priorities for Agile sprints. Worked
                frequently with back-end engineers and UI/UX teams in an Agile
                environment to deliver excellent software that satisfied the
                given requirements. Interviewed, hired, and trained several
                front-end developers. (<span className="font-bold">Vue.js</span>
                , <span className="font-bold">Vuetify</span>,{" "}
                <span className="font-bold">Axios</span>,{" "}
                <span className="font-bold">WebRTC</span>,{" "}
                <span className="font-bold">Typescript</span>,{" "}
                <span className="font-bold">Web Sockets</span>,{" "}
                <span className="font-bold">AWS</span>)
              </p>
            </div>
          </div>
        </div>

        <footer
          className={`flex flex-row justify-center ${styles.gradient} h-10 p-2`}
        >
          © Thomas Underwood {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
};

export default Home;
