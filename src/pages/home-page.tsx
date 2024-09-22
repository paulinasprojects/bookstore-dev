import NewBooks from "@/components/new-book"
import Hero from "@/components/hero"
import BookOfTheWeek from "@/components/book-of-the-week"
import Recommendation from "@/components/recommendation"

const HomePage = () => {
  return (
    <>
    <Hero/>
    <NewBooks/>
    <BookOfTheWeek/>
    <Recommendation/>
    </>
  )
}

export default HomePage