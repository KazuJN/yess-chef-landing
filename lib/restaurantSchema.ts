import { PHONE_URL, SITE_URL } from "@/lib/constants";

const telephone = PHONE_URL.replace(/^tel:/, "");

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Yess Chef",
  telephone,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Pixel 2, Studio Apartments, Unit No.05, 4th Floor Raja Capital, Babboor Giddanna Rd, Ashwath Nagar, Sampangi Rama Nagara",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560027",
    addressCountry: "IN",
  },
};
