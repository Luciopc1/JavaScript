function hora(hora){
    if (hora < 6 && hora >= 0){
        return "madrugada"
    }
    else if(hora < 12 && hora >= 6){
        return "mañana"
    }
    else if(hora < 18 && hora >= 12){
        return "tarde"
    }
    else if(hora < 24 && hora >= 18){
        return "noche"
    }
    else {
        return "WTF"
    }
}
loll = 0
hola = hora(loll)

    console.log (hola)