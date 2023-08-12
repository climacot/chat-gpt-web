"use client";

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="container mx-auto pt-4 pr-4 pb-4 flex flex-col gap-2 justify-center items-center">
      <h1 className="font-bold">Chat GPT web</h1>
      <Button color="primary">Nuevo chat</Button>
    </section>
  );
}
