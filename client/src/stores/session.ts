import router from "@/router";
import myFetch from "@/services/myFetch";
import { reactive } from "vue";

/**
 * Takes in first and last name to make a user object
 */
export class User {
    public firstName: string | undefined;
    public lastName: string | undefined;
    public image: string | undefined;
}


const session = reactive({
    user: null as User | null,
    error: null as string | null

});

/**
 * Makes a user property for session
 * @param id
 * @param firstName 
 * @param lastName 
 * @param image
 */
export function login( firstName: string, lastName: string, image: string): void {
    session.user = {
        // id,
        firstName,
        lastName,
        image


    };
    router.push('/home');

}

export function setError(error: string): void {
    session.error = error;
}

export async function api<T>(url: string, data: any = null, method?: string) {
    try {
        return await myFetch<T>(url, data, method);
    } catch (error) {
        setError(error as string);
        console.log(session.error);
        return {} as T;
    }
}
/**
 * makes user property null and redirects to a view (temp back to home page)
 */
export function logout() {
    session.user = null;
    router.push('/');
    // this is good for now
    // login('Guest', 'User', 'src/assets/images.jpg');
    //TODO make a view AND route for being logged out
    // router.push({name:"has-been-logged-out-view"})
}

export default session;
