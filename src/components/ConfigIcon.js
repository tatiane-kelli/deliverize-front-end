import { IconContext } from "react-icons";

export default function ConfigIcon({ children }) {
  return (
    <>
      <IconContext.Provider 
        value={{ color: "#ED3237",
          size: "24px",
          top:"17px",
        }}
      >
        {children}
      </IconContext.Provider>
    </>
  );
}