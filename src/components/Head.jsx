import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  const seo = {
    title: "Gabriele Stefani developer portfolio",
    description:
      "I'm Gabriele Stefani a software developer with a Bachelor Degree in Software Engineering and some years of working experience. I love coding."
  };
  const titleTemplate = "%s";

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "en"
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /> */}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />} */}
    </Helmet>
  );
};

export default Head;
