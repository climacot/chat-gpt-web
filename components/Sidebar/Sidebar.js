"use client";

import { Button } from "@nextui-org/react";
import { ChatIcon } from "@/components/icons";
import Link from "next/link";

function Sidebar() {
  return (
    <section className="bg-black/90 flex">
      <aside className="p-4 ">
        <Button
          as={Link}
          href="/chat/1"
          className="text-white"
          color="primary"
          variant="bordered"
          startContent={<ChatIcon />}
        >
          Entrar a un chat
        </Button>
      </aside>
      <div className="bg-gray-100 w-4 rounded-tl-xl rounded-bl-xl" />
    </section>
  );
}

export default Sidebar;
