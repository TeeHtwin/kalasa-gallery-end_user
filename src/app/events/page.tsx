import React from "react";
import Layout from "../components/common/Layout";
import SectionHeader from "../components/common/SectionHeader";

import ExhibitionCard from "../components/cards/ExhibitionCard";
import Pagination from "../components/pagination/Pagination";
import HeroSearch from "../components/HeroSearch/HeroSearch";
import { Event } from "@/types";
import EventList from "../components/event/EventList";
// import Pagination from "../components/common/pagination";

export default function page() {
  return (
    <Layout>
      <HeroSearch name="Our Events" placeholder="Search Event..." />
      <EventList />
    </Layout>
  );
}
