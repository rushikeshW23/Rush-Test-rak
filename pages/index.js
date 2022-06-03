import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import FeaturesContent from '../components/HomeOne/FeaturesContent';
import AboutContent from '../components/HomeOne/AboutContent';
import ServicesContent from '../components/Common/ServicesContent';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import TabsContent from '../components/HomeOne/TabsContent';
import ProjectsStyleOne from '../components/Projects/ProjectsStyleOne';
import TeamCard from '../components/Common/TeamCard';
import TestimonialSection from '../components/HomeOne/TestimonialSection';
import AnalysisFormContent from '../components/HomeOne/AnalysisFormContent';
import BlogCardSection from '../components/Common/BlogCardSection';
import PartnerLogos from '../components/HomeOne/PartnerLogos';
import OurClients from '../components/HomeOne/OurClients';
import OurAwards from '../components/HomeOne/OurAwards';
import SubscribeStyleOne from '../components/Common/SubscribeStyleOne';
import Footer from '../components/Layouts/Footer';
import Support from '../components/Support/Support';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <FeaturesContent />

                <div className="pb-100">
                    <PartnerLogos name="Partners" />
                </div>
                
                <div className="pb-100">
                    <AboutContent />
                </div>

                <div className="pb-100">
                    <PartnerLogos name="Awards" />
                </div>

                <ServicesContent />
                
                <div className="pb-100">
                    <PartnerLogos name="Clients"/>
                </div>
                
                <Support />

                <TabsContent />
                
                <TestimonialSection />

                <BlogCardSection />


                {/* <ProjectsStyleOne /> 
                
                <WhyChooseUs />

                <TeamCard />

                <AnalysisFormContent />

                <div className="pb-100">
                    <PartnerLogos />
                </div> */}

                <SubscribeStyleOne />
                
                <Footer />
            </>
        );
    }
}

export default Index;