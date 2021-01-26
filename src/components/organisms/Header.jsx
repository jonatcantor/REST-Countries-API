import { useEffect, useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(true);
  const htmlElement = document.querySelector("html");

  useEffect(() => {
    function changeTheme() {
      if(isDark) {
        htmlElement.setAttribute("data-theme", "dark");
      }
  
      else {
        htmlElement.setAttribute("data-theme", "light");
      }
    }

    changeTheme();
  }, [htmlElement, isDark]);

  function handleClick(e) {
    e.preventDefault();
    setIsDark(!isDark);
  }

  return (
    <header className="header">
      <p>Where in the world?</p>
      <button className="back-button" onClick={handleClick}>{isDark ? "Light" : "Dark" } Mode</button>
    </header>
  );
}

export default Header;
