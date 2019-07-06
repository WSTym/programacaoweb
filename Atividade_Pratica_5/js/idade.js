var idade = prompt("Idade:")
idade = parseInt(idade)
var opt

if(idade >= 0 && idade < 15){
	opt = 1 
}else if(idade >= 15 && idade < 30){
	opt = 2 
}else if(idade >= 30 && idade < 60){
	opt = 3
}else if(idade < 0){
	opt = 4 
}else{
	opt = 5
}
		
switch (opt){
	case 1:
		document.getElementById('idade').value = 'Criança'	
		break
	case 2:
		document.getElementById('idade').value = 'Jovem'	
		break
	case 3:
		document.getElementById('idade').value = 'Adulto'	
		break
	case 4:
		document.getElementById('idade').value = 'Valor Inválido'	
		break
	case 5:
		document.getElementById('idade').value = 'Idoso'	
		break
	default:
		document.getElementById('idade').value = 'Valor Inválido'	
}
