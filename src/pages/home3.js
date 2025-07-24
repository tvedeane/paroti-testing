import React from 'react';
import Layout from '@/components/Layout/Layout';
import SliderTwo from '@/components/SliderTwo/SliderTwo';
import DonationHomeThree from '@/components/DonationHomeThree/DonationHomeThree';
import CtaOne from '@/components/CtaOne/CtaOne';
import BlogHomeThree from '@/components/BlogHomeThree/BlogHomeThree';
import GalleryOneThree from '@/components/GalleryOneThree/GalleryOneThree';
import Sponsors from '@/components/Sponsors/Sponsors';
import DonationThree from '@/components/DonationThree/DonationThree';
import AboutFour from '@/components/AboutFour/AboutFour';
import AboutThree from '@/components/AboutThree/AboutThree';

const HomeThree = () => {
    return (
        <Layout PageTitle="Home Three">
            <SliderTwo />
            <DonationThree />
            <AboutFour />
            <CtaOne />
            <DonationHomeThree />
            <AboutThree />
            <BlogHomeThree />
            <GalleryOneThree />
            <Sponsors title='homeThree' />
        </Layout>
    );
};

export default HomeThree;