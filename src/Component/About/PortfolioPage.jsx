// src/pages/PortfolioPage.jsx
import React from "react";
import { Award, Globe, Search, Users, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";
import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    title: "Studioar.co.in",
    category: "E-Commerce SEO",
    url: "https://studioar.co.in/",
    images: [
      "/portfolio/aline.png",
      "/portfolio/aline2.png",
      "/portfolio/aline3.png",
      "/portfolio/aline4.png",
      "/portfolio/aline5.png",
      "/portfolio/aline6.png",
    ],
  },
  {
    title: "BrightEdu.in",
    category: "Social Media Campaign",
    url: "https://example.com",
    images: [
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/man1.avif",
      "/images/laptop.avif",
    ],
  },
  {
    title: "TravelGram",
    category: "Influencer Marketing",
    url: "https://example.com",
    images: [
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/man1.avif",
    ],
  },
  {
    title: "TravelGram",
    category: "Influencer Marketing",
    url: "https://example.com",
    images: [
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/man1.avif",
    ],
  },
  {
    title: "TravelGram",
    category: "Influencer Marketing",
    url: "https://example.com",
    images: [
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/man1.avif",
    ],
  },
  {
    title: "TravelGram",
    category: "Influencer Marketing",
    url: "https://example.com",
    images: [
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/laptop.avif",
      "/images/man1.avif",
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
      </Helmet>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#fefefe] to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mt-6 bg-[aliceblue]/20 rounded-full border border-[orange]/30 mb-8 backdrop-blur-sm">
            <Award className="w-5 h-5 mr-2 text-[orange]" />
            <h1 className="text-[orange] font-medium">
              Award-Winning Campaigns
            </h1>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-900">Success Stories</span>
            <br />
            <span className="bg-gradient-to-r from-[orange] to-[red] bg-clip-text text-transparent">
              That Inspire
            </span>
          </h1>

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
