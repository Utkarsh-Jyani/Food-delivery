import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "r1ta1l9u",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
