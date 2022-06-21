export default class Api{
    private url!: 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw';

    async getList(){
        
        return fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw',{headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }}).then((res)=>res.json())
    }
}