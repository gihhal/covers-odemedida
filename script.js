let metros = window.prompt ("Valor em metros:")
console.log (metros)

let escolha = window.prompt ("Escolha qual unidade de medida você deseja: \n[1] - mm\n[2] - cm  \n[3]- dm \n[4] - dam \n[5] - hm\n[6] - km")

switch (escolha) {
    case "1":
        window.alert("Valor final é de: "+metros*1000)
        break;
    case "2":
        window.alert("Valor final é de: "+metros*100)
        break
    case "3":
        window.alert("Valor final é de: "+metros*10)
         
        break
    case "4":
        window.alert("Valor final é de: "+metros/10)
        break
    case "5":
        window.alert("Valor final é de: "+metros/100)
        break
    case "6":
        window.alert("Valor final é de: "+metros/1000)
        break
    default:
    
        break;
    
}
