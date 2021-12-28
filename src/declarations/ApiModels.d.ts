interface State {
    abreviatura: string;
    detalhes: string;
}

interface City {
    id: string;
    cidade: string;
    ondas: string;
}

interface Days {
    dia: string;
    previsoes: Waves[]
}

interface Waves {
    horario: string;
    forca: string;
    altura: {
        distancia: number;
        direcao: string;
    }
    vento: {
        velocidade: number;
        direcao: string;
    }
}

interface User{
    id: string;
    email: string;
    password: string;
}
