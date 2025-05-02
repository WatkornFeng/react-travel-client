import GuestList from "./GuestList";

function GuestLists() {
  return (
    <>
      <GuestList list="room" />
      <GuestList list="adult" />
      <GuestList list="child" />
    </>
  );
}

export default GuestLists;
