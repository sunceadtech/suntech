// src/pages/PortfolioPage.jsx
import React from "react";
import { Award, Globe, Search, Users, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";
import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    images: [
      "/portfolio/alpinestar8.webp",
      "/portfolio/alpinestar7.webp",
      "/portfolio/alpinestar6.webp",
      "/portfolio/alpinestar5.webp",
      "/portfolio/alpinestar3.webp",
      "/portfolio/alpinestar1.webp",
    ],
  },
  {
    images: [
      "/portfolio/omnell.webp",
      "/portfolio/omnell1.webp",
      "/portfolio/omnell2.webp",
      "/portfolio/omnell3.webp",
      "/portfolio/omnell4.webp",
      "/portfolio/omnell7.webp",
    ],
  },
  {
    images: [
      "/portfolio/pool1.webp",
      "/portfolio/pool2.webp",
      "/portfolio/pool3.webp",
      "/portfolio/pool4.webp",
      "/portfolio/pool5.webp",
    ],
  },
  {
    images: [
      "/portfolio/navchitra1.webp",
      "/portfolio/navchitra2.webp",
      "/portfolio/navchitra3.webp",
      "/portfolio/navchitra4.webp",
      "/portfolio/navchitra5.webp",
      "/portfolio/navchitra6.webp",
      "/portfolio/navchitra7.webp",
      "/portfolio/navchitra8.webp",
    ],
  },
  {
    images: [
      "/portfolio/volume1.webp",
      "/portfolio/volume6.webp",
      "/portfolio/volume3.webp",
      "/portfolio/volume4.webp",
      "/portfolio/volume5.webp",
      "/portfolio/volume2.webp",
    ],
  },
  {
    images: [
      "/portfolio/knight2.webp",
      "/portfolio/knigh3.webp",
      "/portfolio/knight4.webp",
      "/portfolio/knight5.webp",
      "/portfolio/knight7.webp",
      "/portfolio/knight8.webp",
      "/portfolio/knight9.webp",
    ],
  },
  {
    images: [
      "/random/jrpc.webp",
      "/random/jrpc1.webp",
      "/random/jrpc2.webp",
      "/random/jrpc3.webp",
      "/random/jrpc6.webp",
      "/random/jrpc7.webp",
      "/random/jrpc8.webp",
    ],
  },
  {
    images: [
      "/random/daisy.webp",
      "/random/daisy2.webp",
      "/random/daisy3.webp",
      "/random/daisy4.webp",
      "/random/daisy5.webp",
      "/random/daisy6.webp",
      "/random/daisy1.webp",
    ],
  },
  {
    images: [
      "/random/cmg1.webp",
      "/random/cmg2.webp",
      "/random/cmg3.webp",
      "/random/cmg4.webp",
      "/random/cmg5.webp",
    ],
  },
  {
    images: [
      "/random/bigboss.webp",
      "/random/biggboss3.webp",
      "/random/biggboss4.webp",
      "/random/biggboss5.webp",
      "/random/biggboss6.webp",
      "/random/biggboss7.webp",
    ],
  },
  {
    images: [
      "/random/mittal1.webp",
      "/random/mittal2.webp",
      "/random/mittal3.webp",
      "/random/mittal5.webp",
      "/random/mittal4.webp",
    ],
  },
  {
    images: [
      "/random/beauty1.webp",
      "/random/beauty2.webp",
      "/random/beauty3.webp",
      "/random/beauty4.webp",
      "/random/beauty5.webp",
      "/random/beauty7.webp",
    ],
  },
  {
    images: [
      "/random/law1.webp",
      "/random/law2.webp",
      "/random/law4.webp",
      "/random/law5.webp",
      "/random/law6.webp",
      "/random/law7.webp",
    ],
  },
  {
    images: [
      "/random/fys1.webp",
      "/random/fys2.webp",
      "/random/fys3.webp",
      "/random/fys4.webp",
      "/random/fys5.webp",
      "/random/fys6.webp",
    ],
  },
  {
    images: [
      "/random/sd.webp",
      "/random/sd2.webp",
      "/random/sd3.webp",
      "/random/sd4.webp",
    ],
  },
  {
    images: [
      "/random/merrage.webp",
      "/random/merrage2.webp",
      "/random/merrage3.webp",
      "/random/merrage4.webp",
    ],
  },
  {
    images: [
      "/random/groomify.webp",
      "/random/groomify2.webp",
      "/random/groomify3.webp",
      "/random/groomify4.webp",
    ],
  },
];

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Sunceadtech</title>
        <meta
          name="description"
          content="See our work in SEO, social media, design, and development."
        />
        <meta
          name="keywords"
          content="SEO, social media, branding, UI/UX, web design, PPC, development"
        />
          <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" /> 
      </Helmet>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#fefefe] to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mt-6 bg-[aliceblue]/20 rounded-full border border-[orange]/30 mb-8 backdrop-blur-sm">
            <Award className="w-5 h-5 mr-2 text-[orange]" />
            <h1 className="text-[orange] font-medium">
              Award-Winning Campaigns
            </h1>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-900">Success Stories</span>
            <br />
            <span className="bg-gradient-to-r from-[orange] to-[red] bg-clip-text text-transparent">
              That Inspire
            </span>
          </h2>
          <p className="text-xl text-[darkblue] mb-8 max-w-3xl mx-auto">
            Discover how SunceADTECH helped brands grow digitally with SEO, paid
            ads, and creative marketing campaigns.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: <TrendingUp />,
                number: "500%",
                label: "Avg Growth Rate",
              },
              { icon: <Users />, number: "200+", label: "Success Stories" },
              { icon: <Globe />, number: "15M+", label: "Leads Generated" },
              { icon: <Search />, number: "98%", label: "Client Retention" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-1 text-[orange]">
                  {item.icon}
                </div>
                <div className="text-xl font-bold text-[orange]">
                  {item.number}
                </div>
                <div className="text-sm text-[darkblue]">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-2">
            {projects.map((project, idx) => (
              <PortfolioCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
