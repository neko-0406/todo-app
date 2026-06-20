import { useEffect, useState } from "react";

export function useSideMenubarHook() {
  const [sideMenubarWidth, setSideMenubarWidth] = useState<number>(0);

  // サイドメニューバーの幅を初期化
  useEffect(() => {}, []);

  return {
    sideMenubarWidth,
    setSideMenubarWidth,
  };
}
