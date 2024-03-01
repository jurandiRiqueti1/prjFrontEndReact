import { Button, Icon } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                text: 'Página inicial',
                path: '/pagina-inicial',
            },
            // {
            //     icon: 'star',
            //     text: 'Cidades',
            //     path: '/cidades',
            // }
        ]);
    });

    return(
        <Routes>
            <Route path="/pagina-inicial" element={
                <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </Button>
            }/>

            <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>}/>
        </Routes>
    );
}