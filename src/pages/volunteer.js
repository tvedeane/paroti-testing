import React from "react";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Volunteers from "@/components/Volunteers/Volunteers";


const VolunteerPage = () => {
    return (
        <Layout PageTitle="Volunteers">
            <PageHeader title='Volunteers' />
            <Volunteers page={true} />
        </Layout>
    );
};

export default VolunteerPage;
