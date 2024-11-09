import Script from 'next/script'

const SchemaOrg = () => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Ashim Rudra Paul",
    "jobTitle": "Software Engineer",
    "url": "https://codewithashim.netlify.app",
    "sameAs": [
      "https://github.com/codewithashim",
      "https://linkedin.com/in/codewithashim",
      "https://twitter.com/codewithashim",
      "https://facebook.com/codewithashim",
      "https://instagram.com/codewithashim",
      "https://www.youtube.com/@codewithashim5907",
      "https://medium.com/@codewithashim",
      "https://dev.to/codewithashim",
      "https://codewithashim.hashnode.dev",
      "https://stackoverflow.com/users/19279506/ashim-rudra-paul",
      "https://www.hackerrank.com/codewithashim",
      "https://www.leetcode.com/codewithashim",
      "https://www.codewars.com/users/codewithashim",
      "https://codeforces.com/profile/codewithashim"
    ]
  };

  return (
    <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(schemaOrgJSONLD)}
    </Script>
  );
};

export default SchemaOrg;