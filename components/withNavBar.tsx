import type { FC } from "react";

import NavBar from "@/components/Containers/NavBar";
import { createClient } from "@/lib/supabase/server";

const WithNavBar: FC = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <NavBar user={user} />;
};

export default WithNavBar;
