import Head from "next/head";

const SEO = ({ pageTitle }) => {

  const metadescription = `Empowering project success and enhancing business efficiency, our team excels in project management and business analysis. With a wealth of expertise and a dedication to delivering excellence, we thrive in dynamic settings that prioritize strategic innovation and impactful solutions.`;

  const analyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GT7WNNYR9P');
  `;

  return (
  <>
    <Head>
      <title>
        {pageTitle ? `${pageTitle} - Leader's Guide Portfolio` : "Leader's Guide Portfolio"}
      </title>
      <meta http-equiv='content-language' content='en-gb'/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={metadescription} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Other head elements */}
      <link rel="canonical" href="https://rasandilikshana.me" />

      {/* Schema.org */}
      <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Leader's Guide",
              "jobTitle": "Project Management and Business Analysis",
              "url": "https://rasandilikshana.me/",
              "sameAs": [
                "https://twitter.com/Rasan17516802",
                "https://www.linkedin.com/in/rasan-dilikshana",
                "https://github.com/rasandilikshana"
              ]
            }
          `}
        </script>

      {/* Open Graph meta tags for better social sharing */}
      <meta property="og:title" content={pageTitle || "Leader's Guide Portfolio"} />
      <meta property="og:description" content={metadescription} />
      <meta property="og:image" content="/assets/img/hero/dark.jpg" />
      <meta property="og:url" content="https://rasandilikshana.me" />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags for better Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle || "Leader's Guide Portfolio"} />
      <meta name="twitter:description" content={metadescription} />
      <meta name="twitter:image" content="/assets/img/hero/dark.jpg" />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GT7WNNYR9P"></script>
      <script dangerouslySetInnerHTML={{ __html: analyticsScript }} />
    </Head>
  </>
);}

export default SEO;
