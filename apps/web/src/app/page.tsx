import { Button } from "@web/components/ui/button";
import {trpc} from "@web/app/trpc"
import ClientSide from "@web/app/clientside"

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  
  return (
    <div>
      Hola santiago!
      <p>I am server side: {greeting}</p>
      <ClientSide />
      <Button>Button</Button>
    </div>
  );
}
