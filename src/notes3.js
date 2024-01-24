// Polling React Query

// Polling =>  technique => regularly fetch data => servers => Fixed Intervals
// Used => Keep Data => Up-To-Date

// To enable Polling in React Query
// Use => refetchInterval options
// refetchInterval :
// 1. Specify the time intervals in milliSeconds to fetch data
//    for how long the query should be automatically refetched

// const PollingComponent = () =>{
//     const { data, error, status, isError, isLoading , isSuccess} = useQuery({
//         ["todos"],
//         fetchTodos,
//         refetchOnWindowFocus,// refetch Default
//         retchOnReconnet,// refetch Default
//         retry,// refetch Default
//         refetchInterval: 2000,// Polling
//         staleTime: 5000,
//         cacheTime: 10000,
//         refetchIntervalInBackground: true,// Polling // Poll even when the tab is in the background
//         refetchOnMount: false,// Polling// Don't refetch the query on component Mount(default true)
//     })

// }

// Polling => Used on Scenerios where data is constantly changed very frequently
// staleTime => Used to determine time till when the data in cache no to be considered stale
// stateTime helps to minimize network calls

// If one needs more control over the polling behaviour:
// Use :
// refetchIntervalInBackground and refetchOnMount