import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDePessoas } from "../pages";

export const AppRoutes = () => {

    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                text: 'Página inicial',
                path: '/pagina-inicial',
            },
            {
                icon: 'person',
                text: 'Pessoas',
                path: '/pessoas',
            }
        ]);
    }, []);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="/pessoas" element={<ListagemDePessoas/>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>}/>
        </Routes>
    );
}