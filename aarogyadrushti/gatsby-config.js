require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided. Received: " +
      JSON.stringify(contentfulConfig)
  );
}

// starter config
module.exports = {
  siteMetadata: {
    title: "Aarogya Drushti - Trusted and reliable physiotherapy treatment in Ahmedabad, Gujarat",
    description:
      "Dr. Drushti Sheth (PT), a Consultant Physiotherapist (PT) offering exceptional patient-service skills which include body pain and sports injuries with a demonstrated history of clinical excellence. credentials include Kinesio Taping (module-basic), Cupping Therapy, Dry needling, Instrument Assisted Soft Tissue Mobilization (IASTM), Mulligan Technique certifications; and a Post Gradudate Degree in Musculoskeletal Disorders and Sports Science (Masters PT - Ortho) from Sardar Patel University. Experienced working with pediatric, adolescent, adult and geriatric patients. Registered with the Gujarat State Council of Physiotherapy (GSCPT: GPC-7443) and Indian Association Physiotherapists (IAP: L-41820). Services include - Arthritis treatment, Back pain, Balance exercise therapy, Foot and ankle pain, Heat therapy, Hip pain, Knee pain, Neurological physiotherapy, Physical therapy, Post-surgical rehabilitation, Shoulder pain, Spinal injuries, Therapeutic exercise, Vestibular rehabilitation.",
  },
  plugins: [
    {
      resolve: `gatsby-theme-landing-page`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aarogyadrushti`,
        short_name: `aarogyadrushti`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#88CEC9`,
        display: `browser`,
        icon: `src/assets/AD-Symbol-Main-WhiteBG.png`,
      },
    },
  ],
};
