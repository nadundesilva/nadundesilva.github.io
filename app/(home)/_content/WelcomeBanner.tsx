/*
 * Nadun De Silva - All Rights Reserved
 *
 * This source code and its associated files are the
 * confidential and proprietary information of Nadun De Silva.
 * Unauthorized reproduction, distribution, or disclosure
 * in any form, in whole or in part, is strictly prohibited
 * except as explicitly provided under a separate license
 * agreement with Nadun De Silva.
 *
 * Website: https://nadundesilva.com
 *
 * © 2023 Nadun De Silva. All rights reserved.
 */
import { KeyboardArrowDown } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    styled,
    type Theme,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import { Images } from "@/constants/images";
import { WEBSITE_PUBLIC_URL } from "@/constants/metadata";

const BannerImage = styled(Image)({
    zIndex: 1,
});

const WelcomeBanner = (): React.ReactElement => {
    const theme = useTheme();

    const isLarge = useMediaQuery(theme.breakpoints.up("xl"));
    const isMedium = useMediaQuery(theme.breakpoints.up("md"));
    const downloadButtonSize = isLarge
        ? "large"
        : isMedium
          ? "medium"
          : "small";

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{ position: "relative" }}
        >
            <Grid
                container
                sx={{
                    color: "#ffffff",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    position: "absolute",
                    textAlign: "center",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    pt: 17,
                    px: 3,
                    zIndex: 2,
                }}
            >
                <Grid size={12}>
                    <Typography
                        component="p"
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 50,
                        }}
                    >
                        Hi, I am
                        <br />
                        Nadun
                        <br />
                        De Silva
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <Typography
                        component="div"
                        sx={{
                            color: "white",
                            fontSize: 30,
                        }}
                    >
                        Senior Software Engineer &amp; Cloud Computing
                        Enthusiast
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <Link
                        href={`${WEBSITE_PUBLIC_URL}/nadundesilva-cv.pdf`}
                        target="_blank"
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            size={downloadButtonSize}
                        >
                            View CV
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    position: "relative",
                    height: (theme: Theme) =>
                        `calc(100vh - ${
                            theme.mixins.toolbar.minHeight ?? 0
                        }px)`,
                }}
            >
                <BannerImage
                    src={Images.WelcomeBanner.src}
                    alt={Images.WelcomeBanner.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={true}
                    placeholder="blur"
                    blurDataURL={Images.WelcomeBanner.blurDataURL}
                />
            </Container>
            <Box
                role="presentation"
                sx={{
                    position: "absolute",
                    bottom: 24,
                    right: 24,
                    zIndex: 3,
                    color: "white",
                }}
            >
                <Typography
                    sx={{ display: "inline", pr: 1, fontSize: "1.5vh" }}
                >
                    Scroll down to learn more
                </Typography>
                <KeyboardArrowDown />
            </Box>
        </Container>
    );
};

export default WelcomeBanner;
