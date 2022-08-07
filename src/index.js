const { AppProject } =  require('./app');
//import AppProject from "./app";

//async function main()
const main = async () =>{
    await AppProject.app.listen(3000);
    console.log('Server on port 3000');
 }

 main();