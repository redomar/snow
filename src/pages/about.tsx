import {type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const AboutHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Snow - About</title>
      </Head>
      <div className="flex flex-col items-center m-12 justify-center">
        <div className="">
          <div className="flex items-center justify-center ">
            <div className="relative h-48 w-48">
              <Image
                src="/assets/omar.jpg"
                sizes="192rem"
                fill
                className="rounded-full "
                alt="A portrait of me smiling"
                priority={true}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold">About</h1>
          <div className="py-6 flex flex-col gap-2">
            <p>
              Welcome to my website! My name is Mohamed Omar and I am a Software Engineer with a
              passion for creating high-quality, reliable software. I have been working in the
              industry for the past 3 years, most recently as an Integrations Engineer at OGL.
            </p>
            <p>
              In addition to my professional work, I am also a tutor, helping students ranging from
              GCSE to University level in IT/Computing. I believe in the power of education and
              enjoy helping others learn and grow.
            </p>
            <p>
              The goal of this website is to showcase my skills and abilities as a software
              engineer, as well as provide a landing page for my future projects. Thank you for
              visiting and I hope you find the information on this site useful.
            </p>
            <p>
              As part of my work on this website, I will be using cloud infrastructure and devops
              practices to build and deploy the site. This includes using devops to manage the
              development, testing, and deployment process.
            </p>
            <p>
              I will also be using this website as a platform to share my thoughts and experiences
              related to programming, cloud infrastructure and devops through the blog section. Stay
              tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
