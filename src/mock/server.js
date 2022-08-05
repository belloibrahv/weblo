import { createServer } from 'miragejs'
import { Navigate } from 'react-router-dom';

const redirect = Navigate

const server = async ( environment = {}) => {
  
  const app = createServer({
    environment,
    models: {
      users: Model
    },
    seeds(server, token='userm') {
      server.create({
        username: 'developerbello',
        email: 'developerbello@gmail.com',
        password: 'londonboy',
        responseToken: token
      })
    },
    routes() {
      this.namespace = '/';
      this.post('/register', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
      this.patch('/login', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let user = schema.users.find(id);
        if (user) {

        }

        redirect('/dashbord')
      });
    },
  });     
}