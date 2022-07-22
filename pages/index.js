import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

import View from "../components/View/View";
import { getUserInfoData } from "./api/userInfo.js";

import styles from "./index.module.css";

export default function Index(apiData) {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <Particles options={particlesOptions} init={particlesInit} />
      <View className={styles.main_view} userData={apiData} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await getUserInfoData();
  return { props: { apiData: { data } } };
}
