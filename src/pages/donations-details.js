import React from "react";
import DonationDetails from "@/components/DonationDetails/DonationDetails";

import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";



const page = () => {
    return (
        <Layout PageTitle="Donation Details">
            <PageHeader title='Donations details' list='Donations' />
            <DonationDetails />
        </Layout>
    );
};

export default page;
