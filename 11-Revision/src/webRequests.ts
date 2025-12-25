//Axios
import axios from 'axios';
import type { AxiosResponse } from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    console.log('TODO', response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log('Axios Error:', error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};

//Fetch

const fetchData1 = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const data: Todo = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Fetch failed:', error.message);
    } else {
      console.error('Unknown error occurred');
    }
  }
};
