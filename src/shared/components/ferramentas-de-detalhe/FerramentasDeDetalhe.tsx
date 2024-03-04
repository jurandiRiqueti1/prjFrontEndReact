import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material"

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoApagarCarregando?: boolean
    mostrarBotaoNovoCarregando?: boolean
    mostrarBotaoSalvarCarregando?: boolean
    mostrarBotaoSalvarEFecharCarregando?: boolean,
    mostrarBotaoVoltarCarregando?: boolean

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
};

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoApagar = true,
    mostrarBotaoNovo = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,
    mostrarBotaoVoltar = true,

    mostrarBotaoApagarCarregando = false,
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,
    mostrarBotaoVoltarCarregando = false,

    aoClicarEmApagar,
    aoClicarEmNovo,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
    aoClicarEmVoltar
}) => {

    const theme = useTheme();
    
    const smDown =  useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown =  useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display={"flex"}
            gap={1}
            alignItems={"center"}
            component={Paper}
            elevation={5}
        >
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (<Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={aoClicarEmSalvar}
                startIcon={<Icon>save</Icon>}
            >
                <Typography
                    variant="button"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    color=""
                >
                    Salvar
                </Typography>
            </Button>)}
            {mostrarBotaoSalvarCarregando && (<Skeleton
                width={"108px"}
                height={"60px"}
            />)}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmSalvarEFechar}
                startIcon={<Icon>save</Icon>}
            >
                <Typography
                    variant="button"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    color={"primary"}
                >
                    Salvar e voltar
                </Typography>
            </Button>)}
            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton
                width={"108px"}
                height={"60px"}
            />)}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmApagar}
                startIcon={<Icon>delete</Icon>}
            >
                <Typography
                    variant="button"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    color={"primary"}
                >
                    Apagar
                </Typography>
            </Button>)}
            {mostrarBotaoApagarCarregando && (<Skeleton
                width={"108px"}
                height={"60px"}
            />)}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmNovo}
                startIcon={<Icon>add</Icon>}
            >
                <Typography
                    variant="button"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    color={"primary"}
                >
                    {textoBotaoNovo}
                </Typography>
            </Button>)}
            {(mostrarBotaoNovoCarregando && !smDown) && (<Skeleton
                width={"108px"}
                height={"60px"}
            />)}

            {(mostrarBotaoVoltar && 
            (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
            ) && (<Divider
                variant="middle"
                orientation="vertical"

            />)}

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmVoltar}
                startIcon={<Icon>arrow_back</Icon>}
            >
                <Typography
                    variant="button"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    color={"primary"}
                >
                    Voltar
                </Typography>
            </Button>)}
            {mostrarBotaoVoltarCarregando && (<Skeleton
                width={"108px"}
                height={"60px"}
            />)}
        </Box>
    )
}