export default function NotLogging404() {
  return <h1>404 - Page Not Found</h1>
}

NotLogging404.getLayout = app => {
  return(
    <>
      {app}
    </>
  )
}