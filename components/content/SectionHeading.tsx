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
import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
    children: React.ReactNode;
}

const SectionHeading = ({
    children,
}: SectionHeadingProps): React.ReactElement => (
    <Box sx={{ p: 0, mt: 4, mb: 0 }}>
        <Typography variant="h3">{children}</Typography>
    </Box>
);

export default SectionHeading;
