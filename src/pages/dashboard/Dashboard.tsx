import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

    return(
        <LayoutBaseDePagina titulo="Página inicial" barraDeFerramentas={<>Barra de Ferramentas</>}>
            childrenDashboard
        </LayoutBaseDePagina>
    );
};