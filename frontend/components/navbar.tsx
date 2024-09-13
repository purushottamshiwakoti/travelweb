import { items } from "@/lib/navitem";
import { Button } from "./ui/button";
import Link from "next/link";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { LogoutButton } from "./custom/LogoutButton";
import { MobileNav } from "./mobile-nav";

export const Navbar = async () => {
  const user = await getUserMeLoader();
  console.log("user in navbar", user ? "machu" : "ma chaina");
  console.log(user);
  return (
    <nav className="bg-white h-16 border-b lg:px-[10%]   px-[3%] flex items-center   justify-between w-full sticky top-0 z-30 ">
      <Link href={"/"}>
        <h3 className="text-primary lg:text-4xl text-lg md:text-2xl font-bold">
          Travels
          <span>.</span>
        </h3>
      </Link>
      <ul className="lg:flex hidden   ">
        {items.map((item) => {
          return (
            <Button key={item.id} variant={"ghost"} size={"lg"} asChild>
              <Link href={item.link}>{item.name}</Link>
            </Button>
          );
        })}
      </ul>
      <div className="lg:block hidden">
        {!user.ok ? (
          <Button variant={"secondary"} size={"lg"} asChild>
            <Link href={"/signin"}>Login</Link>
          </Button>
        ) : (
          <LogoutButton />
        )}
      </div>
      <div className="block lg:hidden">
        <MobileNav user={user} />
      </div>
    </nav>
  );
};
