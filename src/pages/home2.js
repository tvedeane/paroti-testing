import React from 'react';
import Layout from '@/components/Layout/Layout';

import SliderThree from '@/components/SliderThree/SliderThree';
import AboutFive from '@/components/AboutFive/AboutFive';
import DonationHomeThree from '@/components/DonationHomeThree/DonationHomeThree';
import FaqOne from '@/components/FaqOne/FaqOne';
import EventHomeTwo from '@/components/EventHomeTwo/EventHomeTwo';
import AboutSix from '@/components/AboutSix/AboutSix';
import FunFactOne from '@/components/FunFactOne/FunFactOne';
import Volunteers from '@/components/Volunteers/Volunteers';
import CtaFour from '@/components/CtaFour/CtaFour';
import TesTimonialsTwo from '@/components/TestimonialsTwo/TesTimonialsTwo';
import Sponsors from '@/components/Sponsors/Sponsors';
import BlogTwo from '@/components/BlogTwo/BlogTwo';
import CtaThree from '@/components/CtaThree/CtaThree';

const HomeTwo = () => {
    return (
        <Layout PageTitle="Home Two">
            <SliderThree />
            <AboutFive />
            <DonationHomeThree />
            <FaqOne />
            <EventHomeTwo />
            <AboutSix />
            <FunFactOne />
            <Volunteers />
            <CtaFour />
            <TesTimonialsTwo />
            <Sponsors title='homeTwo' />
            <BlogTwo />
            <CtaThree />
        </Layout>
    );
};

export default HomeTwo;