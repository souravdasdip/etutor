import MainNav from "./MainNav";
import TopNav from "./TopNav";

function Header() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
        zIndex: "999",
      }}
    >
      <TopNav />
      <MainNav />
    </div>
  );
}

export default Header;
