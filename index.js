const colors=require("colors/safe");
const args=process.argv.slice(2);
const [name="Friend"]=args;
const hour =new Date().getHours();

if (hour >= 6 && hour < 12)
 {
 	console.log(colors.yellow(`Good Morning ${name}`));
 }else if (hour >= 12 && hour < 18) 
 {
 	console.log(colors.green(`Good afternoon ${name}`));
 }else if (hour >= 18 && hour < 23) 
 {
 	console.log(colors.cyan(`Good Evening ${name}`));
 }else {
 	console.log(colors.blue(`Good Night ${name}`));
 }