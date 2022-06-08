import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import Mission from '../components/AboutUs/Mission';
import Vision from '../components/AboutUs/Vision';
import AboutAgumentikGroup from '../components/AboutUs/AboutAgumentikGroup';

import FeaturesArea from '../components/HomeTwo/FeaturesArea';
import ServicesContent from '../components/Common/ServicesContent';
import PricingContent from '../components/PricingPlans/PricingContent';
import ProjectsStyleTwo from '../components/Projects/ProjectsStyleTwo';
import TeamCard from '../components/Common/TeamCard';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';
import Products from '../components/Products/Products';
import Media from '../components/MediaEvents/Media';
import BlogCardContentTwo from '../components/Blog/BlogCardContentTwo'

class MediaEvents extends Component {
    render() {
        return(
            <>
                <NavbarTwo />
                <Media />
                <BlogCardContentTwo />
                <Footer />
            </>
        );
    }
}

export default MediaEvents;