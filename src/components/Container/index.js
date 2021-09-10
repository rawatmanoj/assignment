import React from 'react'
import Box from "@material-ui/core/Box";
import useScreen from "../../utils/hooks/useScreenSize"
export default function ContainerComp(props) {
    const screen = useScreen();
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={screen.isMobile ? 0 : 3}>
                    {children}
                </Box>
            )}
        </div>
    );
}
