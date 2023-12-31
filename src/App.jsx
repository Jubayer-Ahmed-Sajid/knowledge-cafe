import Blogs from "./components/Blogs/Blogs"
import Header from "./components/Header/Header"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import { useState } from "react"
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)


  }

  return (
    <>

      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">

        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>



    </>
  )
}

export default App
