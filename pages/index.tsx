import React, { useRef } from "react";
import Layout, { LayoutContent } from "@/components/Layout";
import Heading from "@/components/Heading";
import { AboutMe, Achievements, ContributedProjects, Certifications, Experience, Profiles, Skills, WelcomeBanner } from "@/components/Home";
import { Button, Hidden, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Head from "next/head";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        section: {
            padding: theme.spacing(1),
            margin: theme.spacing(5)
        },
        sectionContent: {
            padding: theme.spacing(3)
        }
    })
);

interface Section {
    name: string,
    ref: React.RefObject<HTMLDivElement>,
    Component: () => React.ReactElement,
};

const Home = (): React.ReactElement => {
    const classes = useStyles();

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
            <div className={classes.sectionContent}>{section}</div>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Head>
                <title>Nadun De Silva | An aspiring Software Engineer and ML Enthusiast</title>
            </Head>
            <Layout appBarItems={
                <Hidden mdDown>
                    {
                        pageSections.map((section: Section) => (
                            <Button key={section.name} variant={"contained"} color="primary" disableElevation
                                onClick={generateGoToSectionHandler(section.ref)}>
                                {section.name}
                            </Button>
                        ))
                    }
                </Hidden>
            }>
                <WelcomeBanner/>
                <LayoutContent>
                    <div className={classes.section}>
                        {generateSection("About Me", <AboutMe/>)}
                    </div>
                    <React.Fragment>
                        {
                            pageSections.map((section: Section) => (
                                <div ref={section.ref} className={classes.section} key={section.name}>
                                    {generateSection(section.name, <section.Component/>)}
                                </div>
                            ))
                        }
                    </React.Fragment>
                </LayoutContent>
            </Layout>
        </React.Fragment>
    );
};

export default Home;