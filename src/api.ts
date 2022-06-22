export default class Api {

    private url = 'https://my-json-server.typicode.com/kamachado/fake-api/plants'

    async getList(){
        
        return fetch(this.url).then((res)=>res.json())
    }
}