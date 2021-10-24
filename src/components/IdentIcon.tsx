import React, { FC, ReactElement, useEffect, useRef } from "react";
import jazzicon from "jazzicon-ts";
import CSS from "csstype";

interface PropsIdentIcon {
  account: string | null | undefined;
}
const IdentIcon: FC<PropsIdentIcon> = ({ account }): ReactElement => {


  const style: CSS.Properties = {
    paddingLeft: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  };

  const ref = useRef<HTMLDivElement>();
  useEffect(() => {

    if (account && ref.current ) {
      const icon= jazzicon(18, parseInt(account.slice(2, 10), 16));
      ref.current.innerHTML = "";
      ref.current.appendChild(icon);
    }
  }, [account]);


  return (
    <div ref={ref as any} style={style}>
    </div>

  );
};

export default IdentIcon;