

export default function ModalButton(props: any) {
  const getModal = () => {
    props.setGuest("none");
  };

  return (
    <div className="button_user">
      <button onClick={getModal}>C</button>
    </div>
  );
}
