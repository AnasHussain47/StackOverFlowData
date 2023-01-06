import React,{useEffect,useState} from 'react';

const Users = () => {

  const [state, setstate] = useState()
        let url='https://jsonplaceholder.typicode.com/posts';
      // const getAllStactOverFlowUsers= fetch(url)
      // .then((response) => response.json())
      // .then((actualData) =>{
      //     setstate(actualData)
      //     console.log('console',actualData)
      //     console.log('state',state)


      // }
      
      // )

      // .catch((err) => {
      //  console.log(err.message);
      // });

     const getAllStactOverFlowUsers= fetch(url)
      .then(response => response.json())
      .then(data =>
        {
          console.log('console',data)
       
          console.log('state',state)

    
    } )
      

useEffect(() => {

  getAllStactOverFlowUsers();
}, [])



  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default Users
