import { useEffect, useState } from "react";

export default function useHasMounted() {
  const [hasmounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasmounted;
}
