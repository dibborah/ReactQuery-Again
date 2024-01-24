// useQuery in clicking a button

// const { data, isLoading, error } = useQuery({// Setting stateTime and cacheTime INTERNALLY
//     queryKey: ["todos"],
//     queryFn: fetchTodos,
//     staleTime: 10 * (60 * 1000),// 5 minutes
//     cacheTime: 15 * (60 * 1000),// 10 minutes
//     enabled: false// Bydefault api call comes true// Now setting it to false
//   });
// 

// Then calling the refetch Method in the button onClick Event after destructing the refetch from useQuery