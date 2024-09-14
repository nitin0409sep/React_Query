// Want's to execute queries one after other

import axios from "axios";
import { useQuery } from "react-query";

const DependentQueriesPage = () => {
  const fetchUser = () => {
    return axios.get(`http://localhost:4000/users`);
  };

  const fetchChannels = ({ queryKey }) => {
    console.log(queryKey);
    return axios.get(`http://localhost:4000/channels?id=letsCode`);
  };

  const { data: user } = useQuery("users", fetchUser, {
    select: (data) => {
      return data.data.map((val) => {
        return {
          name: val.id,
          channelId: val.channelId,
        };
      });
    },
  });

  const { data: channels } = useQuery(
    ["channel", user?.[0]?.channelId],
    () => fetchChannels, // Don't wanna call it Immediately
    {
      enabled: !!user?.[0]?.channelId,
      select: (data) => {
        return data.data
          .map((val) => {
            return val.courses;
          })
          .flat();
      },

    }
  );

  return (
    <div>
      DependentQueriesPage
      {channels?.map((course) => {
        return <h1 key={course}>{course}</h1>;
      })}
    </div>
  );
};

export default DependentQueriesPage;
