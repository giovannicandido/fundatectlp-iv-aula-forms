export const DOG_KEY = 'dogs'

export interface Dog {
    name: string
    race: string
    vacines?: Array<string>
}

export interface Produto {
    nome: string
    preco: number
}