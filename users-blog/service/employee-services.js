class EmployeeServices {
  constructor(){

  }

  getEmployee(){
      return fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then((data) => {
          return data;
        })
        .catch(console.log)
      } 
}