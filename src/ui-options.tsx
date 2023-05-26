import * as React from "react";
import { Tldraw, TldrawApp } from "@tldraw/tldraw";

export default function UIOptions(): JSX.Element {
  const handleChange = React.useCallback((app: TldrawApp) => {
    console.log(app.document);
  }, []);

  return (
    <div className="tldraw">
      <Tldraw onChange={handleChange} showMenu={false} />
    </div>
  );
}
