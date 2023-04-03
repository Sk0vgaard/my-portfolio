import React, { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('./components/navbar'));
const Home = lazy(() => import('./components/home/home'));
const About = lazy(() => import('./components/about'));
const Timeline = lazy(() => import('./components/timeline/timeline'));
const Skills = lazy(() => import('./components/skills'));
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/footer'));

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Home />
                <About />
                <Timeline />
                <Skills />
                <Contact />
                <Footer />
            </Suspense>
        </>
    );
}

export default App;
