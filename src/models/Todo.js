// Keeping the APi request in the file of their own we can axcess this file in any components as we need by making a call 
//SO this is a best practice

import axios from 'axios';

const endPoint = "https://super-crud.herokuapp.com/todos";

class TodoModel{
    static all = () => {
        let request = axios.get(endPoint);
        return request
    }
}

export default TodoModel;