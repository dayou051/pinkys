export const TypeButton = {
  PRIMARY: "bg-pink-600 text-orange-100 hover:bg-pink-700 px-4 py-2",
  SECUNDARY: "border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-orange-100 px-4 py-2",
};

export default function Button({ type = TypeButton.PRIMARY, children, selfStart = false }) {
  return (
    <button className={`${type} ${selfStart ? "self-start" : ""}`}>
      {children}
    </button>
  );
}
