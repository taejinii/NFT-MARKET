interface DividerType {
  direction: "vertical" | "horizontal";
}

export default function Divider({ direction }: DividerType) {
  if (direction === "vertical") {
    return (
      <div className="inline-block min-h-[1rem] w-0.5 self-stretch bg-neutral-100 bg-opacity-50"></div>
    );
  } else {
    return (
      <hr className="my-2 h-0.5 w-full border-t-0 bg-neutral-100  bg-opacity-50" />
    );
  }
}
