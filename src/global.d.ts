import { HTMLAttributes } from "react";

declare global{
  namespace JSX {
    interface IntrinsicElements {
      "page-module": HTMLAttributes<unknown>;
      "observed-module": HTMLAttributes<unknown>;
    }
  }
}
