import NewBooks from "@/components/new-book"
import Hero from "@/components/hero"
import BookOfTheWeek from "@/components/book-of-the-week"
import Recommendation from "@/components/recommendation"
import Newsletter from "@/components/newsletter"

const HomePage = () => {
  return (
    <>
    <Hero/>
    <NewBooks/>
    <BookOfTheWeek/>
    <Recommendation/>
    <Newsletter/>
    </>
  )
}

export default HomePage