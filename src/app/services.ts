import { Injectable } from "@angular/core";
import { DOG_KEY, Dog } from "./models";
import { HttpClient } from "@angular/common/http";

export interface ActionService {
    deleteItem: (item: any) => void;
}

@Injectable({providedIn: 'root'})
export class DogService implements ActionService{

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