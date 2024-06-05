import Heading from "./Heading"
const abc = [1, 2, 3, 4, 5, 6]

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 pb-6">
      <Heading title="Choose A Service" />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 xl:gap-4 sm:px-4 px-2">
        {abc.map((_) => (

          <article className="w-full h-28 bg-gradient-to-r from-blue-900 via-blue-900 to-purple-900
          flex sm:justify-center ">
            <h1 className="my-auto min-w-12 pr-4 p-4">ICON</h1>
            <div className="pl-3 pl-6">
              <h2 className="pb-1 pb-2 pt-2 pt-4">GARDEN FENCE</h2>
              <p >Lorem ipsum dolor sit amet, </p>
            </div>
          </article>
        ))}

      </div>
    </div>
  )
}

export default Services
