/*
 * Copyright (c) 2022, Nadun De Silva. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Link, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Head from "next/head";
import React from "react";
import { grey } from "@mui/material/colors";
import Image from "next/image";

import Layout, { LayoutContent } from "@/components/Layout";

const gsoc = "/assets/experience/gsoc.svg";
const gsocWhite = "/assets/experience/gsoc-white.svg";
const wso2 = "/assets/experience/wso2.svg";
const wso2White = "/assets/experience/wso2-white.svg";

const Section = styled(Box)(({ theme }) => ({
    margin: 0,
    paddingTop: 5
}));

interface TypographyRestyledProps {
    children: React.ReactNode,
}

const SectionHeading = ({ children }: TypographyRestyledProps) => (
    <Typography variant="h6" component="h2" sx={{ pt: 2 }}>
        {children}
    </Typography>
);

const Timespan = ({ children }: TypographyRestyledProps ): React.ReactElement => (
    <Typography variant={"body1"} sx={{ pt: 1, pb: 1, color: grey[700] }}>
        <FontAwesomeIcon icon={faCalendarAlt}/>&nbsp;{children}
    </Typography>
);

const Paragraph = ({ children }: TypographyRestyledProps) => (
    <Typography
        variant="body1"
        gutterBottom
        sx={{ m: 0, pt: 2, textAlign: "justify" }}
    >
        {children}
    </Typography>  
);

const Experience = (): React.ReactElement => {
    const theme = useTheme();

    const Siddhi = <Link target={"_blank"} href={"https://siddhi.io/"}>Siddhi</Link>;
    const React = <Link target={"_blank"} href={"https://reactjs.org/"}>React</Link>;
    const Cellery = <Link target={"_blank"} href={"https://cellery.io/"}>Cellery</Link>;
    const Ballerina = <Link target={"_blank"} href={"https://ballerina.io/"}>Ballerina</Link>;
    const Choreo = <Link target={"_blank"} href={"https://wso2.com/choreo/"}>Choreo</Link>;

    const Wso2Logo = (
        <Box sx={{ position: "relative", height: "2em" }}>
            <Image alt={"WSO2"} layout="fill" objectFit="fill"
                src={theme?.palette?.mode === "light" ? wso2 : wso2White}/>
        </Box>
    );
    const GsocLogo = (
        <Box sx={{ position: "relative", height: "2em" }}>
            <Image alt={"Google Summer of Code"} layout="fill" objectFit="fill"
                src={theme?.palette?.mode === "light" ? gsoc : gsocWhite}/>
        </Box>
    );

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Head>
                <title>Experience of Nadun De Silva</title>
            </Head>
            <Layout>
                <LayoutContent>
                    <Section>
                        <SectionHeading>Software Engineering Trainee</SectionHeading>
                        <Timespan>July 2016 to December 2016</Timespan>
                        {Wso2Logo}
                        <Paragraph>
                            I worked as a Software Engineering intern at WSO2 as a required internship of the
                            B.Sc. (Hons.) in Engineering (Computer Science and Engineering) degree. I started
                            working as a member of the Data Analytics Server (DAS) product team building a
                            Notebook prototype application for analysing data collected by the DAS. However,
                            the project was aborted and was not added to the DAS product when the company
                            decided to discontinue the DAS product.
                        </Paragraph>
                        <Paragraph>
                            Afterwards, as part of the Complex Event Processor product team, I implemented
                            several stream processing extension
                            for  under the extrema
                            namespace for calculating maximum and minimum values in data streams. Afterwards,
                            I worked on a prototype for generating suggestions in the editor component of
                            the {Siddhi} IDE using data annotated into the {Siddhi} extensions using Java custom
                            annotations. Moreover, I designed some of the initial wireframes of
                            the {Siddhi} IDE as well.
                        </Paragraph>
                    </Section>
                    <Section>
                        <SectionHeading>Google Summer of Code Intern</SectionHeading>
                        <Timespan>May 2017 to Sep 2017</Timespan>
                        {GsocLogo}
                        <Paragraph>
                            During my last year at the University, I worked as a Google Summer of Code intern
                            in my spare time. I worked for WSO2 during this period as well and developed a
                            maven plugin for automatically generating documentation for {Siddhi} extensions.
                            The was data annotated into extensions using a custom Java annotation and the
                            collected data was converted to documentation
                            using <Link target={"_blank"} href={"https://www.mkdocs.org/"}>MkDocs</Link>.
                            This was used by {Siddhi} for generating their documentation till it was decommissioned
                            several years later.
                        </Paragraph>
                    </Section>
                    <Section>
                        <SectionHeading>Software Engineer</SectionHeading>
                        <Timespan>Jan 2018 to July 2019</Timespan>
                        {Wso2Logo}
                        <Paragraph>
                            I was head hunted by WSO2 before the end of my degree and I was offered to start
                            working as a Software Engineer at WSO2. At the start of my employment, I worked in
                            multiple teams as part of the probation period and implemented a password policy
                            authenticator which is an authentication extension for
                            the <Link href={"https://wso2.com/identity-server/"}>WSO2 Identity Server</Link> which
                            would validate and enforce password policies as part of the Rapid Response Team.
                        </Paragraph>
                        <Paragraph>
                            After completing this feature, I worked on a Customer Success Enablement proejct
                            by analyzing customer data to provide insights for the support teams to better work
                            towards improving the customer experience and ensure that proper support is provided
                            to them. While I cannot disclose a lot of information on this task, I worked on
                            generating several reports on demand by querying data from multiple sources and
                            analyzing them. I also revamped the portal which was built to request a report and
                            rewrote the portal using {React} which was quite new for me at that time as well.
                        </Paragraph>
                        <Paragraph>
                            After getting instated as a permanent employee, I joined the Cloud Team at WSO2 and
                            worked on WSO2 Serverless Platform which was a new product being developed by WSO2.
                            I worked on the Observability aspects of the platform and while this was a new area
                            for me at that time, I managed to learn the observability space in a short time and
                            implement a considerable amount of it along with another engineer, as well as
                            contribute with ideas for the platform in general as well. The serverless platform was
                            based on <Link href={"https://openwhisk.apache.org/"}>Apache OpenWhisk</Link> and it
                            allowed running any docker image in serverless mode which was a new concept at that
                            time as well. However, almost at the time when we completed a basic but complete version of
                            the platform, <Link href={"https://knative.dev/docs/"}>Knative</Link> was announced.
                            As a result, the serverless platform was not offered as part of the product line of
                            WSO2 and it was discontinued.
                        </Paragraph>
                        <Paragraph>
                            Afterwards, I spent few more weeks within the Cloud team including a month of
                            customer support rotation, which helped me gain valuable experience in handling customer
                            requests and also gain insights into other aspects of the business apart from the
                            technical side of it.
                        </Paragraph>
                        <Paragraph>
                            After Serverless Platform was discontinued, WSO2 started another project named
                            VICK (later named as {Cellery}) which was aimed towards making deployments in
                            Kubernetes easier. I was selected to be part of the initial research team to
                            implement the product. I worked on this project for some time and it evolved
                            and along with the Cell based architecture later became project {Cellery}.
                            I mainly worked on the Observability aspects of the platform, but I contributed
                            to almost all the other areas of the product with thoughts and ideas. While working
                            on project {Cellery}, I was able to gain in depth knowledge on Kubernetes as well and
                            this helped me immensely in my role as a software engineer and a leader.
                        </Paragraph>
                    </Section>
                    <Section>
                        <SectionHeading>Senior Software Engineer</SectionHeading>
                        <Timespan>July 2019 to June 2021</Timespan>
                        {Wso2Logo}
                        <Paragraph>
                            Later, I completely owned the Observability area and mentored few interns as well
                            as other junior engineers as well. I have also implemented parts of the CLI,
                            VS Code Extension and other tooling of {Cellery} which involved a different new
                            concepts and technologies which I learned within short periods of time.
                            Later when project {Choreo} was started, {Cellery} was adopted by it as well
                            until later the product {Choreo} was rebooted and the {Cellery} was discontinued.
                        </Paragraph>
                        <Paragraph>
                            When {Choreo} project initially started (rebooted from the very first implementation),
                            I was again selected to the small team of engineers who were tasked to making it a reality.
                            Two more engineers were also added to the subteam of {Choreo} Observability and I was tasked
                            with leading the implementation of {Choreo} Observability. I designed the core architecture
                            of {Choreo} Observability and also worked on improving {Ballerina} Observability to
                            support {Choreo} Observability better as well. While generally this level of responsibilities
                            are not given to a Senior Software Engineer, I handled these responsibilities quite well and
                            Observability later became one of the most stable areas and one of the main features
                            of {Choreo}.
                        </Paragraph>
                        <Paragraph>
                            The source code of {Ballerina} Observability was not actively maintained when I took over
                            as the lead of {Choreo} Observability Team. Therefore, I took over the responsibility of
                            going through the code base and revamping the Observability instrumentation.
                            The {Ballerina} compiler level instrumentation was previously performed at the lowest level
                            of the compiler while writing the Java bytecode into the class files. However, this
                            approach had its limitations as these instructions were not aware of scheduler level
                            operations at this level. This resulted in some of the instructions getting executed twice
                            due to the way Ballerina scheduler handled IO bound operations. To solve this issue, I
                            worked on completely rewriting the Observability instrumentation at {Ballerina} compiler
                            backend level by transforming the Ballerina Intermediate Representation (BIR). While this
                            task was quite challenging due to the technologies it involved and the fact that almost
                            no-one knew the source code well, I managed to complete this on time and with good quality.
                        </Paragraph>
                        <Paragraph>
                            After the initial PoC was complete, the Choreo product also evolved and the Observability
                            Team also gained new members and evolved as well. I was entrusted with continuing to lead
                            the Observability Team and I guided the team into implementing most of the core features
                            of {Choreo} Observability. I helped and encouraged the engineers in my team to grow and
                            improve themselves as well.
                        </Paragraph>
                    </Section>
                    <Section>
                        <SectionHeading>Associate Technical Lead</SectionHeading>
                        <Timespan>June 2021 to Now</Timespan>
                        {Wso2Logo}
                        <Paragraph>
                            Even before being promoted to an Associate Technical Lead, I was performing well at this level
                            and I continued to improve and grow within my new role as an Associate Technical Lead. I continued
                            to lead the Observability team and it was considered one of the most stable areas in the platform
                            during that time. Moreover, I guided multiple engineers and helped them improve for the better as well.
                            Apart from that I also contributed to other areas such as growth hacking, UX, SRE and other aspects
                            of the {Choreo} platform.
                        </Paragraph>
                        <Paragraph>
                            Apart from the Observability Area, I also led the effort on the Choreo Online VS Code Editor as well
                            as implemented a significant portion of it. This feature also was finished on time and in good quality
                            as well. This involved implementing a secure environment for users to edit their code.
                        </Paragraph>
                        <Paragraph>
                            Throughout all this work, I always made myself available for other team members who approached me
                            seeking for technical guidance or any information about the platform. I also contributed to many
                            other technical and architectural decision of the platform as well. Through all these, I still tried
                            to work at the level of other engineers and kept up with the technical aspects as well.
                        </Paragraph>
                    </Section>
                </LayoutContent>
            </Layout>
        </Container>
    );
};

export default Experience;