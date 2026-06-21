import { IconType } from "react-icons";
import { FcTodoList } from "react-icons/fc";
import { useSideMenubarHook } from "../hooks/SideMenubarHook";

// cssのインポート
import style from "../styles/SideMenubar.module.css";

// サイドメニューバーに使用するオブジェクト
export interface SideMenuItem {
  id: string; // メニュー項目のid
  name: string; // メニュー項目の名前
  icon: IconType; // メニュー項目のアイコン
  function: () => void; // メニュー項目クリック時の処理
}

// サイドメニューバーの項目
const sideMenubarInfoList: SideMenuItem[] = [
  {
    id: "todo-list",
    name: "Todo List",
    icon: FcTodoList,
    function: () => console.log("todo-list!!!"),
  },
];

// SideMenubarのPropsを定義するinterface
export interface SideMenubarProps {
  children?: React.ReactNode;
}
// サイドメニューバーコンポーネント
export default function SideMenubar({ children }: SideMenubarProps) {
  // サイドメニューバーフックの呼び出し
  const { sideMenubarWidth } = useSideMenubarHook();

  // 仮想domの描画
  return (
    // アプリ全体のdiv要素
    <div className={style.SidemenubarContainer}>
      {/*サイドメニューバー本体の要素*/}
      <div className={style.SidemenubarIndexArea}>
        {sideMenubarInfoList.map((item) => (
          <button className={style.SidemenubarItemButton} key={item.id}>
            <div className={style.SidemenubarItemIcon}>
              <item.icon />
            </div>
            <div className={style.SidemenubarItemLabel}>
              <label>{item.name}</label>
            </div>
          </button>
        ))}
      </div>
      {/*右側に描画されるサイドメニューバーの項目本体*/}
      <div className={style.SidemenubarChildren}>{children}</div>
    </div>
  );
}
