import React from "react";
import EventDetailsPage from "@/components/EventsDetailsPage/EventDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import eventDetailsPage from "@/data/EventDetailsPage";

const page = () => {
  return (
    <Layout PageTitle="Event Details">
      <PageHeader title="Events Details" list="Events" />
      <EventDetailsPage {...eventDetailsPage} />
    </Layout>
  );
};

export default page;
