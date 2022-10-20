import router from "@/router";
import { reactive } from "vue";
import session, { login, logout } from '../stores/session' 

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


const workout = reactive( [
        { user:'Jimmy Mcgill',title: '10 mile rum', date: 'jan 10 2020', duration: '30 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Run' },
        { user:'Kim Wexler', title: '20 mile rum', date: 'jan 10 2020', duration: '40 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Bike' },
        {  user:'Chuck Mcgill',title: '30 mile rum', date: 'jan 10 2020', duration: '50 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'walk' },
        { user:'Nacho Varga', title: '40 mile rum', date: 'jan 10 2020', duration: '60 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Cardio' },
        { user:'Jimmy Mcgill', title: '50 mile rum', date: 'jan 10 2020', duration: '70 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Sregnth' }

    ] as workouData[]
);


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

export default workout;