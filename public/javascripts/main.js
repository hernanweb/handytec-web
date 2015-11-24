$(document).ready(function(){

  window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  inicializemap();

  $( "#multi-link" ).click(function() {
    $( "#myModal .modal-title" ).empty();
    $( "#myModal .modal-title" ).append("Desarrollo Multiplataforma");
    $( "#myModal .modal-body span" ).empty();
    $( "#myModal .modal-body span" ).append("In computing, cross-platform, multi-platform, or platform independent, is an attribute conferred to computer software or computing methods and concepts that are implemented and inter-operate on multiple computer platforms.[1] Cross-platform software may be divided into two types; one requires individual building or compilation for each platform that it supports, and the other one can be directly run on any platform without special preparation, e.g., software written in an interpreted language or pre-compiled portable bytecode for which the interpreters or run-time packages are common or standard components of all platforms");
    $('#myModal').modal('show'); 
  });

  $( "#multi-nube" ).click(function() {
    $( "#myModal .modal-title" ).empty();
    $( "#myModal .modal-title" ).append("Computación en la Nube");
    $( "#myModal .modal-body span" ).empty();
    $( "#myModal .modal-body span" ).append("Hola esta es una prueba");
    $('#myModal').modal('show'); 
  });

  $( "#multi-training" ).click(function() {
    $( "#myModal .modal-title" ).empty();
    $( "#myModal .modal-title" ).append("Programas de Capacitación");
    $( "#myModal .modal-body span" ).empty();
    $( "#myModal .modal-body span" ).append("Hola esta es una prueba");
    $('#myModal').modal('show'); 
  });

  $('#mision_div_1').css('opacity', 0);
  $('#mision_div_2').css('opacity', 0);
  $('#vision_div_1').css('opacity', 0);
  $('#vision_div_2').css('opacity', 0);

  $('#process_1').css('opacity', 0);
  $('#process_2').css('opacity', 0);
  $('#process_3').css('opacity', 0);
  $('#process_4').css('opacity', 0);
  $('#process_5').css('opacity', 0);
  $('#process_6').css('opacity', 0);

    var waypoint = new Waypoint({
      element: document.getElementById('mision_div_1'),
      handler: function(direction) {
        $('#mision_div_1').addClass('fadeInLeft');
      },
      offset: '60%'
    })


    waypoint = new Waypoint({
      element: document.getElementById('mision_div_2'),
      handler: function(direction) {
        $('#mision_div_2').addClass('fadeInRight');
      },
      offset: '60%'
    })

     waypoint = new Waypoint({
      element: document.getElementById('vision_div_1'),
      handler: function(direction) {
        $('#vision_div_1').addClass('fadeInLeft');
      },
      offset: '70%'
    })


    waypoint = new Waypoint({
      element: document.getElementById('vision_div_2'),
      handler: function(direction) {
        $('#vision_div_2').addClass('fadeInRight');
      },
      offset: '70%'
    })

    waypoint = new Waypoint({
      element: document.getElementById('process_1'),
      handler: function(direction) {
        $('#process_1').addClass('fadeIn');
      },
      offset: '70%'
    })

    waypoint = new Waypoint({
      element: document.getElementById('process_2'),
      handler: function(direction) {
        $('#process_2').addClass('fadeIn');
      },
      offset: '70%'
    })

    waypoint = new Waypoint({
      element: document.getElementById('process_3'),
      handler: function(direction) {
        $('#process_3').addClass('fadeIn');
      },
      offset: '70%'
    })

    waypoint = new Waypoint({
      element: document.getElementById('process_4'),
      handler: function(direction) {
        $('#process_4').addClass('fadeIn');
      },
      offset: '80%'
    })

    waypoint = new Waypoint({
      element: document.getElementById('process_5'),
      handler: function(direction) {
        $('#process_5').addClass('fadeIn');
      },
      offset: '80%'
    })

    waypoint = new Waypoint({
      element: document.getElementById('process_6'),
      handler: function(direction) {
        $('#process_6').addClass('fadeIn');
      },
      offset: '80%'
    })

    waypoint = new Waypoint({
      element: document.getElementById('download_planner'),
      handler: function(direction) {
        $('#download_planner').addClass('flash');
      },
      offset: '80%'
    })

    
   

  //Scroller behaviour
  $('.custom-menu a[href^="#"], .intro-scroller .inner-link').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  //Return to top behaviour
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

   $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

  $('body').append('<div id="toTop" class="btn btn-primary color1"><span class="glyphicon glyphicon-chevron-up"></span></div>');
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    }); 
  $('#toTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
  });

});

function gallery(){};

var $itemsHolder = $('ul.port2');
var $itemsClone = $itemsHolder.clone(); 
var $filterClass = "";
$('ul.filter li').click(function(e) {
e.preventDefault();
$filterClass = $(this).attr('data-value');
    if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
    else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
    $itemsHolder.quicksand(
      $filters,
      { duration: 1000 },
      gallery
      );
});

$(document).ready(gallery);