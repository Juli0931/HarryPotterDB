import { NavBar, Carousel, Filter, Footer } from '../../components'

export function DashboardPage () {
  return (
    <>
      <NavBar />
      <div>
        <Carousel />
        <Filter />
        <Footer />
      </div>
    </>
  )
}
