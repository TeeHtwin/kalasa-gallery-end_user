import React from "react";
import Layout from "../components/common/Layout";

import HeroSearch from "../components/HeroSearch/HeroSearch";
import EventList from "../components/event/EventList";

export default function page() {
  return (
    <Layout>
      <HeroSearch name="Our Events" placeholder="Search Event..." />
      <EventList />
    </Layout>
  );
}
