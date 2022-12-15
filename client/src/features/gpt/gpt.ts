import { myFetch } from "@/services/myFetch";
//how would i make this secure?

const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;


export function gptApi(url: string, data?: any, method?: string, headers?: HeadersInit){
    headers = {
        "Authorization": "Bearer " + OPEN_AI_KEY,
    }
    return myFetch<GPTResponse>(url, data, method, headers)
}

export async function createDescriptionOfUser(firstName: string, lastName: string){
    // get a description from the gpt rest services
    const result  = await gptApi("https://api.openai.com/v1/completions", {
        "model": "text-davinci-003",
        "prompt": `who is "${firstName} ${lastName}"` ,
        "max_tokens": 100,
        "temperature": 0.18
      })
    return result?.choices[0].text?.trim();
}

interface GPTResponse {
    id: string
    object: string
    created: number
    model: string
    choices: {
        text: string
        index: number
        logprobs: any
        finish_reason: string
      }[]
    usage: {
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
      }
  }