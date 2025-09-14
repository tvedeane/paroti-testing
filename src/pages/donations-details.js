import React from "react";
import DonationDetails from "@/components/DonationDetails/DonationDetails";

import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import { graphql } from "gatsby";

const page = () => {
  return (
    <Layout PageTitle="Donation Details">
      <PageHeader title="Donations details" list="Donations" />
      <DonationDetails />
    </Layout>
  );
};

export default page;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
