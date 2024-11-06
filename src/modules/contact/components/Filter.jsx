import { useEffect } from "react"
import { Form, useLoaderData, useNavigation, useSubmit } from "react-router-dom"

export default function Filter() {
  const { q } = useLoaderData()
  const navigation = useNavigation()
  const submit = useSubmit()

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q")

  useEffect(() => {
    document.getElementById("q").value = q
  }, [q])

  return (
    <Form id="search-form" role="search">
      <input
        id="q"
        className={isSearching ? "loading" : ""}
        aria-label="Search contacts"
        placeholder="Search"
        type="search"
        name="q"
        defaultValue={q}
        onChange={(event) => {
          const isFirstSearch = q == null
          submit(event.currentTarget.form, {
            replace: !isFirstSearch,
          })
        }}
      />
      <div
        id="search-spinner"
        aria-hidden
        hidden={!isSearching}
      />
    </Form>
  )
}
