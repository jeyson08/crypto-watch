import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const storedCoinList = window.localStorage.getItem("coinList");
    if (storedCoinList) {
      const favList = storedCoinList.split(",");
      setLike(favList.includes(coinId));
    }
  }, [coinId]);

  const idChecker = (id) => {
    const storedCoinList = window.localStorage.getItem("coinList");
    let favList = storedCoinList ? storedCoinList.split(",") : [];

    if (favList.includes(id)) {
      // Remove coin from favorites
      favList = favList.filter((coin) => coin !== id);
      setLike(false);
    } else {
      // Add coin to favorites
      favList.push(id);
      setLike(true);
    }

    // Update localStorage with the modified list
    window.localStorage.setItem("coinList", favList.join(","));
  };

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;
