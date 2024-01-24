import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MyComponent = () => {
  const [state, setState] = useState(0);

  const handleAdd = () => {
    setState((prevState) => prevState + 1);
  };
  const handleMinus = () => {
    setState((prevState) => prevState - 1);
  };

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

  // Other inbuilt parameter of useQuery => isError, isSuccess, status

  // Total till now we got 6 in-built parameter of useQuery

  // data , error , status && isLoading, isError, isSuccess (T-6)

  const { data, isLoading, error } = useQuery({// Setting stateTime and cacheTime INTERNALLY
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * (60 * 1000),// 5 minutes
    cacheTime: 15 * (60 * 1000),// 10 minutes
  });

  // const { data , isLoading, error } = useQuery(queryKey, fetchTodos);

  if (isLoading) {
    // isLoading hold a boolean value
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      {state}
      <button onClick={handleAdd}>+</button>
      <ul>
        {data.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default MyComponent;

// React Query Dev Tools
// 1. Browser Extension
// 2. Provides helpful interface => Inspecting & Debugging Query
// 3. Status of queries, view query details, inspect the cache, etc

// Features of React Query

// 1. Inspect Queries
// 2. Query Details
// 3. Cache Exploration
// 4. Manual Query Refetching => Manually fetch data
// 5. Filter Queries
// 6. Resetting Queries


// Stale => Meaning unFresh
// stateTime => Time till the data will remain fresh
// Till that time no refetching or api hit will take place but data will be taken from the cache as that data will be considered fresh

// By default after a data is fetched it is considered stale or unfresh so at the very moment refetching of data happens
// since bydefault the stateTime is taken as Zero(0)

// cacheTime : Duration at which cache data(inactive queries) is removed (when it is considered as stale)
// byDefault cacheTime is 5minutes
// Meaning every after 5min cache data or inactive queries is considered stale and so is removed.

// StateTime vs CacheTime 

// StateTime => Query is considered stale so refetched
// CacheTime => Cache is considered stale so removed // empty cache



