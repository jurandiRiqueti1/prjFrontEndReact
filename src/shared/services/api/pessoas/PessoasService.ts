import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

interface IDetalhePessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

type TPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {

    try {

        //const urlRelativa = `/pessoas?_page=${page}&_per_page=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

        const urlRelativa = `/pessoas?page=${page}&limit=${Environment.LIMITE_DE_LINHAS}&filter=${filter}`

        const { data, headers } = await Api.get(urlRelativa);
        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        };

        return new Error('Erro ao listar os registros.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    };
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try {

        const urlRelativa = `/pessoas/${id}`;

        const { data } = await Api.get(urlRelativa);

        if (data) {
            return data;
        };

        return new Error('Erro ao listar os registros.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    };
};

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
    try {

        const { data } = await Api.post<IDetalhePessoa>('/pessoas', dados);

        if (data) {
            return data.id;
        };

        return new Error('Erro ao criar o registro.');

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
    };
};

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try {

        const urlRelativa = `/pessoas/${id}`;

        await Api.post(urlRelativa, dados);

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message || 'Erro ao alterar o registro.');
    };
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {

        const urlRelativa = `/pessoas/${id}`;

        await Api.delete(urlRelativa);

    } catch (error) {

        console.error(error);

        return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
    };
};

export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}