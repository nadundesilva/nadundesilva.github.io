import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Head from "next/head";
import React, { useRef } from "react";

import Heading from "@/components/Heading";
import { AboutMe, Achievements, ContributedProjects, Certifications, Experience, Profiles, Skills, WelcomeBanner } from "@/components/Home";
import Layout, { LayoutContent } from "@/components/Layout";

const SectionContainer = styled(Container)(({ theme }) => ({
    margin: 0
}));

interface Section {
    name: string,
    ref: React.RefObject<HTMLDivElement>,
    Component: () => React.ReactElement,
}

const Home = (): React.ReactElement => {
    const pageSections: Section[] = [
        {
            name: "Experience",
            ref: useRef<HTMLDivElement>(null),
            Component: Experience
        },
        {
            name: "Achievements",
            ref: useRef<HTMLDivElement>(null),
            Component: Achievements
        },
        {
            name: "Skills",
            ref: useRef<HTMLDivElement>(null),
            Component: Skills
        },
        {
            name: "Certifications",
            ref: useRef<HTMLDivElement>(null),
            Component: Certifications
        },
        {
            name: "Profiles",
            ref: useRef<HTMLDivElement>(null),
            Component: Profiles
        },
        {
            name: "Contributed Projects",
            ref: useRef<HTMLDivElement>(null),
            Component: ContributedProjects
        }
    ];

    const generateGoToSectionHandler = (sectionRef: React.RefObject<HTMLDivElement>) => () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const generateSection = (title: string, section: React.ReactElement): React.ReactElement => (
        <React.Fragment>
            <Heading>{title}</Heading>
            <Container maxWidth={false} disableGutters={true} sx={{ padding: 3 }}>
                {section}
            </Container>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Head>
                <title>Nadun De Silva | An aspiring Software Engineer and ML Enthusiast</title>
            </Head>
            <Layout appBarItems={
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    {
                        pageSections.map((section: Section) => (
                            <Button key={section.name} variant="text" color="primary" disableElevation
                                onClick={generateGoToSectionHandler(section.ref)}>
                                {section.name}
                            </Button>
                        ))
                    }
                </Box>
            }>
                <WelcomeBanner/>
                <LayoutContent>
                    <SectionContainer maxWidth={false} disableGutters={true}>
                        {generateSection("About Me", <AboutMe/>)}
                    </SectionContainer>
                    <React.Fragment>
                        {
                            pageSections.map((section: Section) => (
                                <SectionContainer maxWidth={false} disableGutters={true} ref={section.ref}
                                    key={section.name}
                                >
                                    {generateSection(section.name, <section.Component/>)}
                                </SectionContainer>
                            ))
                        }
                    </React.Fragment>
                </LayoutContent>
            </Layout>
        </React.Fragment>
    );
};

export default Home;
