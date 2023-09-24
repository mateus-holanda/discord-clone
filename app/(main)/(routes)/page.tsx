import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/modeToggle";

function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  )
}

export default Home;