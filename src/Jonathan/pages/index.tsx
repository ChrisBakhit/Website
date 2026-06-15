import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../Jonathan/components/Layout/Page';
import About from '../Jonathan/components/Sections/About';
import Contact from '../Jonathan/components/Sections/Contact';
import Footer from '../Jonathan/components/Sections/Footer';
import Hero from '../Jonathan/components/Sections/Hero';
import Portfolio from '../Jonathan/components/Sections/Portfolio';
import Resume from '../Jonathan/components/Sections/Resume';
import Testimonials from '../Jonathan/components/Sections/Testimonials';
import {homePageMeta} from '../Jonathan/data/data';
import JonPicture from '../Jonathan/components/JonPicture'; // Assuming the JonPicture component is located in this directory

// eslint-disable-next-line react-memo/require-memo
// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../Jonathan/components/Sections/Header'), {ssr: false});
const Home: FC = memo(() => {
    const {title, description} = homePageMeta;

    return (
        <Page description={description} title={title}>
            <Header />
            <Hero />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
            <Footer />
        </Page>
    );
});

export default Home;

// ...

const Hero: FC = memo(() => (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-8">
        <div className="absolute inset-0 flex items-center justify-center">
            <JonPicture className="rounded-full shadow-lg" />
        </div>
        <div className="relative z-10">
            {/* Rest of the Hero content */}
        </div>
    </section>
));