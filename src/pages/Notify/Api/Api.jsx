import axios from 'axios'

const baseUrl = "http://localhost:8080/api/v1";

const api = axios.create({
  headers : {
    'Authorization' : localStorage.getItem('token'),
  }
})

export const getNotifications = async (currentPage,categoryCode) =>{
    let url = `${baseUrl}/notification?page=${currentPage}`;
    if(categoryCode && categoryCode !== "전체"){
      url += `&categoryCode=${categoryCode}`;
    }
    const response = await api.get(url)
    .catch(error=>console.error('Error getNotifications data:' + error));
    return response;
}
// async function(currentPage,categoryCode) {} 두가지 경우가 있음

export const getCategories = async () =>{
  const response = await api.get(`${baseUrl}/category`)
  .catch(err => console.error('Error categories data:' + err));
  return response;
}