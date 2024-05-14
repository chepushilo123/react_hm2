

export default function Modal(props: any) {
  let guest = "none";

  const getGuest = () => {
    if (guest === "user") {
      props.setGuest("user");
    } else if (guest === "admin") {
      props.setGuest("admin");
    }
  };

  return (
    <>
      <div className="modal_window">
        <div>
          <h1>Кто вы?</h1>
          <button onClick={() => {guest = "admin";}}>Admin</button>
          <button onClick={() => {guest = "user";}}>User</button>
          <div>
            <button onClick={getGuest}>Accept</button>
          </div>
        </div>
      </div>
    </>
  );
}
