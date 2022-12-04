import myFetch from "@/services/myFetch";
import router from "@/router";
import { reactive, watch } from "vue";
import session, { login, logout } from '../stores/session' 
import { api } from "./session";

export class workouData {
    public user: string | undefined
    public title: string | undefined;
    public date: string | undefined;
    public duration: string | undefined;
    public location: string | undefined
    public picture: string | undefined
    public type: string | undefined
}

// {{session.user.firstName}} {{session.user.lastName}} 


// const workout = reactive( [
//         { user:'Jimmy Mcgill',title: '10 mile run', date: 'jan 10 2020', duration: '30 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Run' },
//         { user:'Kim Wexler', title: '20 mile run', date: 'jan 10 2020', duration: '40 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Bike' },
//         {  user:'Chuck Mcgill',title: '30 mile run', date: 'jan 10 2020', duration: '50 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'walk' },
//         { user:'Nacho Varga', title: '40 mile run', date: 'jan 10 2020', duration: '60 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Cardio' },
//         { user:'Jimmy Mcgill', title: '50 mile run', date: 'jan 10 2020', duration: '70 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Sregnth' }

//     ] as workouData[]
// );

export function getWorkout() {
   return api<workouData[]>('posts');
}

export function getSpecificWorkout(title: string) {
    return api<workouData>(`posts/${title}`);
}

let workout = reactive([] as workouData[]);

export function load () {
    myFetch('/api/v1/posts')
    .then((data) => {
        workout.splice(0, workout.length, ...data as workouData[]);

    })
}

export function addWorkouts (post: workouData) {
    myFetch('/api/v1/posts', post, 'POST')
    .then((data) => {
        workout.push(data as workouData);
    })
}

//TODO LATER
// export function deleteWorkouts (index: number) {
//     myFetch('/api/v1/people/' + id, {
//         method: 'DELETE'
//     })
//     .then(() => {
//         load();
//     })
// }

export function addWorkout(user: string,title: string, date: string, duration: string, location: string, picture: string, type: string): void {
    // workout.workouData = {
    //     Title,date,duration,location,picture,type

    // };
    workout.unshift({ user,title, date, duration, location, picture, type });
    router.push('/workout')

}

export function deleteWorkout(index: number) {
    
        workout.splice(index, 1); // 2nd parameter means remove one item only
}

export function editWorkout(index: number,user: string,title: string, date: string, duration: string, location: string, picture: string, type: string){
    //very rough draft just deletes and replaces new post simultainiusly
    workout.splice(index, 1);
    workout.unshift({ user,title, date, duration, location, picture, type });
    router.push('/workout')


}

export interface workout {
    workout: workouData[];
    addWorkout: (user: string,title: string, date: string, duration: string, location: string, picture: string, type: string) => void;
    deleteWorkout: (index: number) => void;
    editWorkout: (index: number,user: string,title: string, date: string, duration: string, location: string, picture: string, type: string) => void;
    load: () => void;
}   

export interface workoutData {
    user: string,
    title: string,
    date: string,
    duration: string,
    location: string,
    picture: string,
    type: string 
}   


export default workout;