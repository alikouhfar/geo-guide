import classes from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className="flex-1 items-center flex">
      <span className={`${classes.loader}`}></span>
    </div>
  );
}
