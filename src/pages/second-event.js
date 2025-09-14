import React from "react";
import EventDetailsPage from "@/components/EventsDetailsPage/EventDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import eventDetailsPage from "@/data/en/EventDetailsPage";

const page = () => {
  return (
    <Layout PageTitle="Event Details">
      <PageHeader title="Events Details" list="Events" />
      <EventDetailsPage {...eventDetailsPage} />
      // TODO above doesn't work - we should send data.js filename to the
      EventDetailsPage // to enable events to have different texts
    </Layout>
  );
};

export default page;
