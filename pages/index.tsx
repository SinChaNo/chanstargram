import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Signin from "./Signin/Signin";


const Home: NextPage = () => {
  return (
    <Signin />
  );
};

export default Home;
