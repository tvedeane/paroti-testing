import React from "react";
import AboutOne from "@/components/AboutOne/AboutOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Sponsors from "@/components/Sponsors/Sponsors";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import Volunteers from "@/components/Volunteers/Volunteers";



const AboutPage = () => {
    return (
        <Layout PageTitle="About Page">
            <PageHeader title='About Us' />
            <AboutOne />
            <Sponsors />
            <CtaOne page={true} />
            <FunFactOne />
            <Volunteers />
            <TestimonialOne page={true} />
        </Layout>
    );
};

export default AboutPage;
