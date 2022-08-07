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
        <div
          className={`flex flex-col justify-start  ${styles.geometricBackground} p-10`}
        >
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
            <h1 className="title-font font-bold text-7xl">Thomas Underwood</h1>
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
                Sr. Frontend Developer at{" "}
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

        {/* Work History */}
        <div
          className={`flex flex-row justify-start h-[650px] ${styles.animatedGradient} p-2`}
        >
          <div className="m-8">
            <h1 className="title-font text-6xl font-medium text-white">
              Work History
            </h1>
          </div>
          <div className="flex flex-col justify-center ml-20">
            <h1 className="title-font text-8xl font-medium text-white">
              Thomas Underwood
            </h1>
          </div>
        </div>
      </main>

      <footer
        className={`flex flex-row justify-center ${styles.gradient} h-10 p-2`}
      >
        © Thomas Underwood {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Home;
