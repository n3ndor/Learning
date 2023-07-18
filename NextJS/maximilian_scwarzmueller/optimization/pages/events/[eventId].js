import React from "react";
import Head from "next/head";

const EventIdPage = (event) => {
  return (
    <div>
      <Head>
        {/* We can inject the event title dynamically for every event page */}
        <title>{event.title} Page</title>{" "}
        <meta name="description" content={event.description} />
      </Head>
      <h2>Welcome on The Event Page</h2>
    </div>
  );
};

export default EventIdPage;
