import Prismic from "prismic-javascript";

export const apiEndpoint = "https://sortcodertech.cdn.prismic.io/api/v2";

export const accessToken =
  "MC5ZTnlaLVJBQUFDY0FJV0xs.77-9Gu-_vSB6Yu-_vUDvv705Oe-_ve-_ve-_ve-_ve-_ve-_vRLvv71rfXtTGe-_vRfvv73vv73vv73vv73vv73vv70"; // This is where you would add your access token for a Private repository

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "sortcoder_blog") return `/blog/${doc.uid}`;
  return "/blog";
};

// Client method to query documents from the Prismic repo
export const Client = Prismic.client(apiEndpoint, { accessToken });
