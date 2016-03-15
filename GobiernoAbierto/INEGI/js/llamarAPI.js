function llamarAPI(){    
var urlApi = "http://www3.inegi.org.mx/sistemas/api/indicadores/v1/Indicador/1002000001/01/es/false/json/2b393191-23d5-7139-fbe1-3018ff170045"
$(document).ready(function (){  
    $.getJSON( urlApi, function( json ) {  
         var nombreIndicador = json.MetaData.Name ;  
         var nomEntidad = json.MetaData.Region;  
         var codigoHtml = '<table style="text-align:center;" class="tableClass">';  
         codigoHtml += '<tr><th colspan="2" class="tableClass">' + nombreIndicador + ' (' + nomEntidad + ')' + '</th></tr>';    
         codigoHtml += '<tr><th class="tableClass">Año</th><th class="tableClass">Población</th></tr>';    
         for(var i = 0; i < json.Data.Serie.length; i++){  
            var periodos = json.Data.Serie[i].TimePeriod;    
            codigoHtml += '<tr><td class="tableClass">' + periodos + '</td>';    
            var valor = json.Data.Serie[i].CurrentValue;    
            codigoHtml += '<td class="tableClass">' + valor + '</td></tr>';    
         }  
         codigoHtml += '</table>';  
         $('#divTablaDatos').html(codigoHtml);   
     });  
 });  
	
}