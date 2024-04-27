// import React, { useState } from "react";
// import ArtistList from "./ArtistList";
// import Loading from "../common/Loading";
// import { fetchApi } from "@/fetchers/api";
// import Layout from "../common/Layout";
// import HeroSearch from "../HeroSearch/HeroSearch";

// const ArtistPage = () => {
//   const [keyword, setKeyword] = useState("");

//   return (
//     <Layout>
//      <HeroSearch
// name="Our Artists"
// placeholder="Search Artist..."
// setKeyword={setKeyword}
// page="artist"
// />
//       {keyword ? (
//         searchData?.data ? (
//           <div>
//             Showing {searchData?.data?.total} results for{" "}
//             <strong>{keyword}</strong>
//           </div>
//         ) : (
//           <div>
//             Showing 0 result for <strong>{keyword}</strong>
//           </div>
//         )
//       ) : null}
//       {keyword && !searchFetching ? (
//         <ArtistList data={searchData?.data?.data} />
//       ) : (
//         <ArtistList data={artists} />
//       )}
//     </Layout>
//   );
// };

// export default ArtistPage;

