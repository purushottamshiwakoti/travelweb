import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { LogoutButton } from "./custom/LogoutButton";
import Link from "next/link";
import { items } from "@/lib/navitem";
import { DialogClose } from "@radix-ui/react-dialog";

export const MobileNav = ({ user }: { user: any }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-white p-10">
        <ul className="   ">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <DialogClose asChild>
                  <Button variant={"ghost"} size={"lg"} asChild>
                    <Link href={item.link}>{item.name}</Link>
                  </Button>
                </DialogClose>
              </li>
            );
          })}
        </ul>
        <div className="">
          {!user.ok ? (
            <DialogClose asChild>
              <Button variant={"secondary"} size={"lg"} asChild>
                <Link href={"/signin"}>Login</Link>
              </Button>
            </DialogClose>
          ) : (
            <DialogClose asChild>
              <LogoutButton />
            </DialogClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
