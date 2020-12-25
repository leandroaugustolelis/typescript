import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//string, number, boolean, object, array
//interfaces ( conjunto de tipagens)


export function helloWorld(request: Request, response: Response) {

  const user = createUser({
    email: 'leandroaugustolelis@gmail.com',
    password: 'Kompak100',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native', 
    { title: 'Javascript', experience: 100 },
  ],
  });

  return response.json({ message: 'Hello World' });
}
