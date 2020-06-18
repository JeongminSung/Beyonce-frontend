import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  //fetch이 되는지를 감시하는 state
  const [isFetching, setIsFetching] = useState(false);

  //매 순간 스크롤 이벤트를 받아오는 함수
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //fetch의 상태를 감시하는 useEffect
  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);
  //<- 두번째 인자에 isFetching을 넣어 감시하면 바뀔때마다 매번 불림

  //Window 객체의 내부 높이와 Document 객체의 scrollTop이
  //Document의 offsetHeight와 같은지 확인하는 함수
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
