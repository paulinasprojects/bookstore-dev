import {useState} from 'react';
import Tabs from '@/components/tabs';
import BookContent from '@/components/book-content';
import AllBooks from './all-books';
import "@/styles/book-tabs.scss";

const BookTabs = () => {
  const [toggle, setToggle] = useState(1);

  const getContent = () => {
    switch (toggle) {
      case 1:
        return <AllBooks/>;
      case 2:
        return <AllBooks/>;
      case 3:
        return <AllBooks/>;
      case 4:
        return <AllBooks/>;
      case 5:
        return <AllBooks/>;
      case 6:
        return <AllBooks/>;
      case 7:
        return <AllBooks/>;
      case 8:
        return <AllBooks/>;
      default:
        return null;
    }
  }

  return (
    <>   
      <div className='book-tabs-container'>
        <Tabs
          categoryName='All Books'
          isActive={toggle === 1}
          onClick={() => setToggle(1)}
        />
        <Tabs
          categoryName='Fiction'
          isActive={toggle === 2}
          onClick={() => setToggle(2)}
        />
        <Tabs
          categoryName='Literature'
          isActive={toggle === 3}
          onClick={() => setToggle(3)}
        />
        <Tabs
          categoryName='Non Fiction'
          isActive={toggle === 4}
          onClick={() => setToggle(4)}
        />
        <Tabs
          categoryName='Realism'
          isActive={toggle === 5}
          onClick={() => setToggle(5)}
        />
        <Tabs
          categoryName='School'
          isActive={toggle === 6}
          onClick={() => setToggle(6)}
        />
        <Tabs
          categoryName='Magazine'
          isActive={toggle === 7}
          onClick={() => setToggle(7)}
        />
        <Tabs
          categoryName='Ebook'
          isActive={toggle === 8}
          onClick={() => setToggle(8)}
        />
      </div>
      <div>
        <BookContent content={getContent()}/>
      </div>
    </>
  )
}

export default BookTabs