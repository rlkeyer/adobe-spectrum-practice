import { Button } from "@adobe/react-spectrum";
import React from "react";
import './Sandbox.scss'

export const Sandbox = () => {
  return (
    <div className="Sandbox">
      <Button href="/hello" variant="cta" elementType='a'>
        Hello
      </Button>
    </div>
  );
};
