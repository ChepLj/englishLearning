import getDataFromDB from "../api/getDataFromDB"


export function test(){
    const handleData = (result)=>{
        console.log(result)
        eval(result.payload)
        
      }
      getDataFromDB('test/1', handleData )
}
