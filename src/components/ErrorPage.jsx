import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <p id="zero-state">
      Oops! {error.statusText}
      <br/>
      {error.statusText} {error.message}
    </p>
  )
}
