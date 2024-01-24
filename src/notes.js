// Why cacheTime should be bigger than staleTime ???

// Answer : cacheTime should be bigger to avoid unneccessary request
// If cacheTime is smaller than staleTime than React Query will re-fetch the data from server
// even if the data in the cache is still fresh. 

// For example : If the staleTime is 10minutes and let's say the cacheTime is 5 minutes
// That means the fetch data is fetch for 10 minutes
// But Since the cacheTime is 5min so after 5min the data will be removed from cache 
// So the screen will go to isLoading state or some spinner will be displayed
// As React query will initiate re-fetching

// But wait // Since the stateTime was 10 minutes so the data was fresh for another 5min 
// And so the same data wud have been used for the next 5min but since it was removed in 5min since the cacheTime was set to 5min
// So no data was now left

// Till makes unnecessary network calls and using too many unneccesary resources of the server
// So the cacheTime should be bigger than staleTime

// This can waste Bandwidth and Time

// InActive data
// Data is inActive =>Meaning New Data won't be fetched

// Active Data
// Fresh Data
