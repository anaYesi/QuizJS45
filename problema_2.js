function indices(array)
{
	for(var i = 0; i < array.length; i++)
	{
		if(i % 2 == 0  )
		{
		    var par = i;
		}
		else
		{
			var impar = i;
		}
	}
return console.log("es par " +par);
return console.log("es impar " +impar);
}
indices([1,2,3,4]);