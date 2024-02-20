function temperatura(a){
   if ( (a > 20) && (a < 30)) {
      console.log ("El dia esta templado")
   }
   else if ((a < 21) && (a > 10)) {
      console.log ("El dia esta frio")
   }
   else if (a < 10) {
      console.log("El dia esta demaciado frio")
   }
   else if (a > 29){
      console.log("hace calor lpm")
   }
}
temperatura(32)