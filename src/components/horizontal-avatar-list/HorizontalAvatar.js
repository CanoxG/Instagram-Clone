import { useRef, useEffect, useState } from "react";
import { fetchWrapper } from "../../lib/fetch";
import AvatarList from "../avatar-list/AvatarList";
import AvatarProfile from "../avatar-profile/AvatarProfile";



const closure = () => {
  let data = [];

  return {
    getData: (index) => {
      return index || index === 0 ? data[index] : data;
    },
    setData: (item) => {
      data.push(item);
      return data;
    },
    delData: (index, id) => {
      if (id) {
        data = data.filter((i) => i.id !== id);
      }
      delete data[index];
    },
  };
};


export function HorizontalAvatar() {
  const [state, setState] = useState([]);
  const [error, setError] = useState();
  const nameRef = useRef("");
  const closureRef = useRef();

  useEffect(
    () => {
    closureRef.current = closure();
  },
    []
  );

  useEffect(() => {
    fetchWrapper("avatars")
      .then((response) => {
        setState(response);
      })
      .catch((err) => setError(err.message));
  }, []);

  const onSubmit = () => {
    setState([...state, { name: nameRef.current.value }]);
    console.log(closureRef.current.setData({ name: nameRef.current.value }));
    console.log(closureRef.current.getData());
    nameRef.current.value = "";
  };

  const onDelete = () => {
    console.log(closureRef.current.getData());
    closureRef.current.delData(0);
    console.log(closureRef.current.getData());
  };
  console.log("1");
  return (
    <div>
      {error && <span>BOOOMMMMM {error}</span>}

      <AvatarList>
        {state.length ? (
          state.map(({ name, src }, i) => <AvatarProfile name={name} src={src} key={i} />)
        ) : (
          <div>loading...</div>
        )}
      </AvatarList>
      <input type="text" ref={nameRef} />
      <button onClick={onSubmit}>add</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}
