export default class Api {

    async getList(){
        
        return fetch("https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw").then((res)=>res.json())
    }
}