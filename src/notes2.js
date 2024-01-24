// set Refetch Defaults

// QueryClient.defaultOptions = {
//     queries: {
//         refetchOnWindowFocus: false, // Disable refetching when the window regains focus
//         refetchOnReconnect: false, // Disable refetching when the network connection is restored
//         retry: 3, // Number of times to retry a failed request
//         staleTime: 60000, // Data will be considered stale after 60 seconds (1 minutes)
//     }
// }

// using Axios

// const fetchTodos = async () => {
//     const response = await axios.get("https://www.website.com")
//     return response.data;
// }