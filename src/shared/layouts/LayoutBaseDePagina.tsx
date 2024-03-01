import { Icon, IconButton, Typography, useTheme } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
    titulo: string;
    barraDeFerramentas: React.ReactNode | undefined;

    children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {

    const theme = useTheme();

    const smDown =  useMediaQuery(theme.breakpoints.down("sm"));

    const { toggleDrawerOpen } = useDrawerContext();

    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
                {smDown && (<IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>)}

                <Typography variant="h5">
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && (<Box>
                {barraDeFerramentas}
            </Box>)}

            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
 };