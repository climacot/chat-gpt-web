"use client";

import { addMessage } from "@/services/actions";
import { Button, Input } from "@nextui-org/react";

function ChatPage({ params }) {
  const { id } = params;

  return (
    <section className="container mx-auto grid grid-rows-chat pt-4 pr-4 pb-4">
      <section className="flex justify-center items-center">
        <h1 className="font-bold">Chat GPT web</h1>
      </section>
      <form className="flex gap-2 p-2" autoComplete="off" action={addMessage}>
        <Input
          variant="bordered"
          color="primary"
          name="message"
          type="text"
          placeholder="Envía un mensaje"
        />
        <Button color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </section>
  );
}

export default ChatPage;
