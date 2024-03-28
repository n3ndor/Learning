import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <h3>Practice with shadcn/ui in Next.js</h3>
      <p>first test, adding a button with npx shadcn-ui@latest add button</p>
      <Button>Click me</Button>
      
    </div>
  );
}
