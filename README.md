## Default Values

```
staleTime: 0 secs - Shows the cached data up to set time, and after that refetch data and update cache and ui both
cacheTime: 5 secs -  Caches the data

refetchOnMount: true - On Component Mount the query will be executed, you may stop it too, If it's set to false, it will always be showing stale data
refetchOnWindowFocus: true - By Default its true, every time our tab loose focus and gets focus again, query- background refetch is initiated

refetchInterval: false, - Runs query after every set interval of time (in secs time interval is given).
refetchIntervalInBackground: true

enabled: true - Helps u to stop calling query on component mounting.

onSuccess
onError

select - use to transform the data coming from api. select: (data) => {} - data - is the response coming from api's

keepPreviousData: true

```

# What we get from destructuring of useQuery()

```
data, isLoading, isError, error, isFetching, refetch, refetch - To Manually Trigger the query
```

## Pooling

Process of fetching data at regular intervals.
refetchInterval: false, - Runs query after every set interval of time (in secs time interval is given).
Paused as the window loses the focus - to over come it
refetchIntervalInBackground: true,
