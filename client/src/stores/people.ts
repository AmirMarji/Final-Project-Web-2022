import myFetch from "@/services/myFetch";
import router from "@/router";
import { reactive, watch  } from "vue";
import session, { login, logout } from '../stores/session' 
import { api } from "./session";


//'Jimmy', 'McGill','src/assets/BCS_S6_Portrait_Jimmy.webp'


export class peopleData {
    public id: string | undefined
    public firstName: string | undefined
    public lastName: string | undefined
    public profilePic: string | undefined

}

export function getPeople()
{
    return api<peopleData[]>('people');
}

export function getPerson(id: string)
{
    return api<peopleData>(`people/${id}`);
}

let peopleArray = reactive([] as peopleData[]);

export function load () {
    myFetch('/api/v1/people')
    .then((data) => {
        peopleArray.splice(0, peopleArray.length, ...data as peopleData[]);

    })
}
watch(()=> session.user, load);

export function addPeople (people: peopleData) {
    myFetch('/api/v1/people', {
        method: 'POST',
        body: JSON.stringify(people)
    })
    .then((data) => {
        peopleArray.push(data as peopleData);
        router.push('/people');
    })
}


export function deletePeople (id: string) {
    myFetch('/api/v1/people/' + id, {
        method: 'DELETE'
    })
    .then(() => {
        load();
    })
}

export interface People {
    people: peopleData[];
    load: () => void;
    addPeople: (people: peopleData) => void;
    deletePeople: (id: string) => void;
}
export interface person {
    id: string ;
    firstName: string ;
    lastName: string ;
    profilePic: string ;
}   