import { useEffect, useState } from "react";
import { fetchWrapper } from "../../lib/fetch";
import Content from "../content/Content";

export function CenterPostList() {
  const [contentState, setState] = useState([]);

  useEffect(() => {
    fetchWrapper("posts").then((response) => {
      setState(response);
    });
  }, []);

  return (
    <div>
      {contentState.length ? (
        contentState.map(({ name, src, location }, i) => (
          <Content name={name} src={src} location={location} key={i} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
