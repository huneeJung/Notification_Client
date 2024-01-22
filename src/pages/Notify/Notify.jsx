import { useState, useEffect } from 'react';
import Category from './Category/Map/Map'; 
import BoardMap from './Board/Map/Map';
import Paging from './Paging/Paging';
import { getNotifications, getCategories } from './Api/Api';

function Notification() {
    const [notifications, setNotifications] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryCode,setCategoryCode] = useState();
    const [totalPages, setTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(()=>{
      const fetchCategories = async() =>{
        const response = await getCategories();
        setCategories(response.data);
      }
      fetchCategories();
    },[]);
    useEffect(()=>{
        const fetchNotifications = async() =>{
            const response = await getNotifications(currentPage,categoryCode);
            setNotifications(response.data.content);
            setTotalPages(response.data.totalPages);
        };
        fetchNotifications();
    },[currentPage,categoryCode]);

    const handleCategoryChange = async (categoryCode) => {
        setCategoryCode(categoryCode);
        setCurrentPage(1);
    };
    
return (
    <>
      <div className="header">
        <h1>공지사항</h1>
        <div className="category-buttons">
          <div className="category-buttons-container">
            <Category 
              categories={categories}
              selectedCategoryCode = {categoryCode}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
      </div>
      <div className="board">
        <table>
          <thead>
            <tr>
              <th className="header-cell">No</th>
              <th className="header-cell">공지분류</th>
              <th className="header-cell">공지일자</th>
              <th className="header-cell">공지내용</th>
            </tr>
          </thead>
          <BoardMap 
            notifications={notifications} 
            currentPage={currentPage}
          />
        </table>
      </div>
      <Paging 
          totalPages = {totalPages} 
          currentPage = {currentPage} 
          setCurrentPage={setCurrentPage}
      />
      <a href="/example">라우터 테스트</a>
    </>
  )
}

export default Notification;