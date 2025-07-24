import React from "react";
import DonationPage from "@/components/DonationPage/DonationPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";

const DonationsPage = () => {
    return (
        <Layout PageTitle="Donations">
            <PageHeader title='Donations' />
            <DonationPage />
        </Layout>
    );
};

export default DonationsPage;
