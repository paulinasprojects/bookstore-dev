import {useState} from 'react';
import Tabs from '@/components/tabs';
import TabContent from '@/components/tab-content';
import AllBooks from './all-books';
import FictionBooks from './fiction-books';
import LiteratureBooks from './literature-books';
import MysteryBooks from './mystery-books';
import FantasyBooks from './fantasy-books';
import HorrorBooks from './horror-books';
import ActionBooks from './action-books';
import ClassicsBooks from './classics-books';

import "@/styles/book-tabs.scss";

const BookTabs = () => {
  const [toggle, setToggle] = useState(1);

  const getContent = () => {
    switch (toggle) {
      case 1:
        return <AllBooks/>;
      case 2:
        return <FictionBooks/>;
      case 3:
        return <LiteratureBooks/>;
      case 4:
        return <MysteryBooks/>;
      case 5:
        return <FantasyBooks/>;
      case 6:
        return <HorrorBooks/>;
      case 7:
        return <ActionBooks/>;
      case 8:
        return <ClassicsBooks/>;
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
          categoryName='Mystery'
          isActive={toggle === 4}
          onClick={() => setToggle(4)}
        />
        <Tabs
          categoryName='Fantasy'
          isActive={toggle === 5}
          onClick={() => setToggle(5)}
        />
        <Tabs
          categoryName='Horror'
          isActive={toggle === 6}
          onClick={() => setToggle(6)}
        />
        <Tabs
          categoryName='Action'
          isActive={toggle === 7}
          onClick={() => setToggle(7)}
        />
        <Tabs
          categoryName='Classics'
          isActive={toggle === 8}
          onClick={() => setToggle(8)}
        />
      </div>
      <div>
        <TabContent content={getContent()}/>
      </div>
    </>
  )
}

export default BookTabs