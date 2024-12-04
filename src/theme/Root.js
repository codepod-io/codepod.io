import React from "react";

import "@radix-ui/themes/styles.css";
import { Button, DropdownMenu, Theme } from "@radix-ui/themes";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {/* <Theme> */}
      {/* <div>Hello!</div> */}
      {children}
      {/* </Theme> */}
    </>
  );
}
