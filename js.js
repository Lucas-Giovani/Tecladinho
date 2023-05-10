document.onkeydown = Pega_Tecla;

function Pega_Tecla(e) 
{	
    e = e || window.event;
    tecla = e.keyCode;
    TirarCores();
    document.getElementById(tecla).style.backgroundColor = "yellow"
}

function TirarCores()
{
    for (x=1;x<=300;x++)
    {
        try
        {
            document.getElementById(x).style.backgroundColor = "lightblue"
        }
        catch(erro)
        {   }
    }
}