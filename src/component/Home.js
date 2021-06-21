import React from "react";
import Character from "./Characters";
import Loading from "./Loading";

const Home = ({ items, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="cards">
      {items.map((item) => (
        <Character key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default Home;
