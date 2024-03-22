//const language: String = 'es';

//const hello = () => {
const hello = (lang:string) => {
  switch (lang) {
    case 'fi':      
      console.log("Hei maailma!");
      break;
    case 'en':      
      console.log("Hello world!");
      break;
    case 'es':      
      console.log("Hola mundo!");
      break;  
    default:
      break;
  }
};

//hello()
hello("fi");
hello("en");
hello("es");