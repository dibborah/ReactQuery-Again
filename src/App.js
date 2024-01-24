import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyComponent from "./MyComponent";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MyComponent />
    </QueryClientProvider>
  );
};

export default App;

// Query => Getting
// Mutation => Change

// Query is getting data from somewhere
// Mutation is changing that data

// QueryClient => queryClient
// QueryClientProvider => client
// useQuery
// useMutation
// usePaginatedQuery

// Features of React Query :

// 1. Data Fetching: Provide some Hooks to fetch data
// Hooks : 1. useQuery (GET) 2. useMutation (POST, DELETE, PUT) 3. usePagination (paginated data fetching)

// 2. Caching : caching data memory main stored hota hain to same response ke liye same api bar bar HIT karne ki jarurat nahi parti

// 3. Backgroung Data Update : Background main data ko update kar deta hain . Hum ek fix interval v set kr skte h ki kab kab kitne time baad data update hona hain

// 4. Optimistic Update : Api response receive karne se pehle hi ye UI ko automatically update kar deta hain
// Example : Instagram Liking in a post. Before the like in done at the backend it b/4 a second show the the heart icon being reflected in the UI before taking information or clearance from the backend

// 5. Error handling

// 6. Query Invalidation => Data jab v aaye fresh h aaye

// 7. Integration w/ Dev tools
