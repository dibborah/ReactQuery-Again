import { useQuery } from "@tanstack/react-query";

const MyComponent = () => {
  // Define a unique key for the query
  const queryKey = "todos"; // It should be unique// It acts as an unique identifier for the query
  // It helps React Query manage the cache and refetching the  specific query

  // Define a data-fetching function (e.g. fetchTodos)
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // We are using here fetch to get data from API endpoint
    // You may also use (Axios, graphQL, etc.) any method 
    const data = response.json();
    return data;
  };

  // use the useQuery hook to fetch data and manage the state

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // const { data , isLoading, error } = useQuery(queryKey, fetchTodos);

  if (isLoading) {// isLoading hold a boolean value
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default MyComponent;
