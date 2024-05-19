


export default function tooltipInit (){
  jQuery(function(){
    jQuery('[data-toggle="tooltip"]').tooltip();
    jQuery('[data-toggle="tooltip"]').on('click', function(e){   
      e.stopPropagation();
      e.preventDefault()
  
  })
  })


} 


