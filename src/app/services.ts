import { Injectable } from "@angular/core";
import { DOG_KEY, Dog, Produto } from "./models";
import { HttpClient } from "@angular/common/http";

export interface ActionService {
    deleteItem: (item: any) => void;
}

@Injectable({ providedIn: 'root' })
export class DogService implements ActionService {

    saveDog(dog: Dog) {
        let dogs = this.listAll()
        dogs.push(dog)
        let dogsJson = JSON.stringify(dogs)
        localStorage.setItem(DOG_KEY, dogsJson)
    }

    listAll(): Array<Dog> {
        let dogJson = localStorage.getItem(DOG_KEY)
        let dogs = JSON.parse(dogJson ? dogJson : "[]") as Array<Dog>
        return dogs
    }

    deleteItem(item: any) {
        console.log('Deleting item: ' + JSON.stringify(item))
    }
}

@Injectable({ providedIn: 'root' })
export class CarrinhoService {

    items: Produto[] = [
        {
            nome: 'Feijão',
            preco: 10
        }, {
            nome: 'Arroz',
            preco: 15
        }
    ]

    adicionarItemRandom() {
        let index = Math.random() * 100
        this.items.push({nome: 'Item ' + index, preco: index })
    }
}