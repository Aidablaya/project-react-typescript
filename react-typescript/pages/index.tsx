import { useState } from "react";
import type { NextPage } from "next";
import type { MouseEventHandler } from "react";
import Head from "next/head"; 
import { RandomFox } from "../components/RandomFox";

//generate a random function between 1 and 123
const random = (): number => Math.floor(Math.random()*123)+1

//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9)

type ImageItem = { id: string; url: string }; 

const Home: NextPage = () => {
  const [images, setImages] = useState <Array<ImageItem>>([]);

const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();

  const target = event.target;

  const newImageItem: ImageItem = {
    id: generateId(),
    url: `https://randomfox.ca/images/${random()}.jpg`,
  };

    setImages([...images,newImageItem])
  };

  return (
    <div>
      <Head>
        <title>Platzi</title>
        <meta name="description" content="Generate by Platzi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={addNewFox}>Add new fox</button>
        {images.map((image) => (
          <div key={image.id} className="p-4">
            <RandomFox image={image.url} />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
