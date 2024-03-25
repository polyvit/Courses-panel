import { withLayout } from "../layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/courses/financial-analytics");
  }, [router]);

  return null;
}

export default withLayout(Home);
