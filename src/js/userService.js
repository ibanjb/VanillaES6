export default class UserService {

    constructor() {
        //
        // we are using json-server to load mock data (simulates an API call)
        //
        this.serviceUrl = 'http://localhost:3000/data';
    }

    getUsers() {        
        const myPromise = new Promise((resolve, reject) => {
        fetch(this.serviceUrl,{ method: 'GET'})
            .then((resp) => resp.json())
            .then(function(data) {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });      
        return myPromise;
    }

    getMockData() {
        const mock = [ 
          {
            email: "user1@google.com",
            first_name:"User",
            gender: "Female",
            id: 1,
            ip_address: "127.0.0.0",
            last_name: "One"
          }, {
            email: "user2@google.com",
            first_name:"User",
            gender: "Male",
            id: 2,
            ip_address: "127.0.0.1",
            last_name: "Two"
          }, {
            email: "user1@google.com",
            first_name:"User",
            gender: "Female",
            id: 3,
            ip_address: "127.0.0.2",
            last_name: "Three"
          }
        ];
        return mock;
      }
  }
  