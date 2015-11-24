var express = require('express');
var nodemailer = require('nodemailer');
var data = require('../data/data');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  // create reusable transporter object using SMTP transport

    //var html_body = '<div style="width:100%;"> <div style="text-align:left;"> <h1 style="color: rgba(96, 130, 139, 0.67);">Has recibido un requerimiento de Cliente</h1> </div> <div style="margin-top:3px; "> <img src="http://115.146.86.249/images/logo.png" style="max-width: 100%; background-color: hsl(39, 100%, 97%);"/> </div> <div style="text-align: left; padding: 10px 10px 10px 10px; line-height: 23px; margin-top:3px; background-color: aliceblue;"> <label><b>Nombre:&nbsp;</b></label>Fernanda Huilca<br> <label><b>Telefono:&nbsp;</b></label>0995030269<br> <label><b>Empresa:&nbsp;</b></label>Kruger<br> <label><b>Requerimiento:&nbsp;</b></label>CAPACITACION<br> </div> <div style="text-align: left; padding: 10px 10px 10px 10px; line-height: 23pxvw; margin-top:3px; background-color: aliceblue;"> <label><b>Descripción del Requerimiento:</b></label><br><br> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. <div style="text-align:right; margin-top: 20px;"> <a href="mailto:diogonal0@gmail.com" style="font-family: Tahoma; color: #ffffff; font-size: 16px; background: #19A5FF; padding: 10px 20px 10px 20px; text-decoration: none; border: none;">Contestar</a> </div> </div> </div>';
    
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sentiment.notificator@gmail.com',
            pass: 'Twittersentiment'
        }
    });

    // console.log(req.body.client_name);
    // console.log(req.body.client_lastname);
    // console.log(req.body.phone);
    // console.log(req.body.company);
    // console.log(req.body.email);
    // console.log(req.body.request);
    // console.log(req.body.client_message);

    var complete_name = req.body.client_name + ' ' + req.body.client_lastname;

    //var html_body = '<div style="width:98%; margin:0 auto;"> <div style="text-align:left;"> <h1 style="color: rgb(60, 118, 162);">Bienvenido a Handytec!</h1> </div> <div> <div style="text-align: left; padding: 10px 10px 10px 10px; background-color: aliceblue; min-height: 80px; text-align: justify;"> <img src="http://115.146.86.249/images/bridgett.png" width="80px" height="80px" align="left" style="margin-bottom:10px; margin-right:20px;"> <b>Hola Fernanda!</b><br> Hemos recibido tu correo a traves de la pagina web de Handytec. Uno de nuestros consultores expertos se ecuentra analizando tu requerimiento y pronto se pondra en contacto contigo. </div> </p> </div> <div style="padding: 10px 10px 10px 10px; background-color: aliceblue; min-height:110px; height:auto"> <div style="float:left; margin-right: 10px;"> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;"> <a style="text-decoration:none" href="http://www.handytec.mobi" class="clink logo-container"> <img src="http://115.146.86.249/images/logo.png" alt="Handytec - Innovating your Bussiness" border="0" class="sig-logo" width="160" > </a> </p> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;     text-align: right;"> <a class="link signature_website-target sig-hide" href="http://www.handytec.mobi" style="color: rgb(71, 124, 204); text-decoration: none; display: inline;">www.handytec.mobi</a> </p> </div> <div style="float:left; margin-right:30px;"> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;"> <span style="font-weight: bold; color: rgb(33, 33, 33); display: inline;" class="txt signature_name-target sig-hide">HandytecMobi S.A</span><br> <span style="color: #C43B27; display: inline; font-size: 10px;" class="txt signature_jobtitle-target sig-hide">Innovating your Business</span> <span class="email-sep break" style="display: inline; font-size: 10px;"><br></span> <a class="link email signature_email-target sig-hide" href="mailto:diego.montufar@handytec.mobi" style="font-size: 10px; color: rgb(71, 124, 204); text-decoration: none; display: inline;">contact@handytec.mobi</a><br> <span style="color: rgb(33, 33, 33); display: inline; font-size: 10px;" class="txt signature_mobilephone-target sig-hide">+593 2 3238528</span><br> <span style="color: rgb(33, 33, 33); display: inline; font-size: 10px;" class="txt signature_mobilephone-target sig-hide">+593 9 95030269</span> </p> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px;"> <a href="https://www.facebook.com/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="facebook.png" src="https://s3.amazonaws.com/htmlsig-assets/round/facebook.png" alt="Facebook"> </a> <a href="https://twitter.com/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="twitter.png" src="https://s3.amazonaws.com/htmlsig-assets/round/twitter.png" alt="Twitter"> </a> <a href="#" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="googleplus.png" src="https://s3.amazonaws.com/htmlsig-assets/round/googleplus.png" alt="Google Plus"> </a> <a href="https://www.linkedin.com/company/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="linkedin.png" src="https://s3.amazonaws.com/htmlsig-assets/round/linkedin.png" alt="Linkedin"> </a> </p> </div> <div style="font-size: 11px; padding-right:20px; padding-top:10px; text-align: justify;"> Nuestra misión es convertir buenas ideas en soluciones tecnológicas innovadoras que ayudan a establecer un compromiso con nuestros clientes y hacer crecer su negocio por medio de un modelo exitoso y de alta calidad en la entrega rapida de aplicaciones. Nuestros ingenieros trabajan de cerca con los clientes y proveen la mejor experiencia de usuario siguiendo metodologias agiles durante el desarrollo. Somos especialistas en desarrollar aplicaciones para analisis de BigData y tecnologias moviles, dando soluciones inteligentes y estrategicas a nuestros clientes, en la nube. </div> </div> </div>'; 
    var html_body = '<div style="width:98%; margin:0 auto;"> <div style="text-align:left;"> <h1 style="color: rgb(60, 118, 162);">Has recibido un requerimiento de Cliente</h1> </div> <div style="margin-top:3px; "> <!-- <img src="http://115.146.86.249/images/logo.png" style="max-width: 100%; background-color: hsl(39, 100%, 97%);"/> --> <img src="http://115.146.86.249/images/header-mail-enviar.png" style="max-width: 100%; background-color: hsl(39, 100%, 97%);"/> </div> <div style="text-align: left; padding: 10px 10px 10px 10px; line-height: 23px; margin-top:3px; background-color: aliceblue;"> <label><b>Nombre:&nbsp;</b></label>' + complete_name +'<br> <label><b>Telefono:&nbsp;</b></label>' + req.body.phone  + '<br> <label><b>Empresa:&nbsp;</b></label>' + req.body.company + '<br> <label><b>Requerimiento:&nbsp;</b></label>' + req.body.request + '<br> </div> <div style="text-align: left; padding: 10px 10px 10px 10px; line-height: 23px; margin-top:3px; background-color: aliceblue;"> <label><b>Descripción del Requerimiento:</b></label><br><br>' + req.body.client_message + '<div style="text-align:right; margin-top: 20px; margin-bottom: 15px; margin-right: 10px;"> <a href="mailto:' + req.body.email + '" style="font-family: Helvetica, Arial, sans-serif;; color: #ffffff; font-size: 16px; background: #FF5E19; padding: 10px 20px 10px 20px; text-decoration: none; border: none; ">Contestar</a> </div> </div> </div>';


    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: complete_name + ' <' + req.body.email + '>', // sender address
        to: 'diogonal0@gmail.com', // list of receivers
        subject: 'Cliente Requiere: ' + req.body.request, // Subject line
        // text: req.body.texto, // plaintext body
        html: html_body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.render('error',{message: "Error al enviar mensaje"});
            return console.log(error);

        }else{
            res.render('enviado',{title: "Mensaje enviado exitosamente"});
        }
        console.log('Message sent: ' + info.response);

    });

    transporter.close();

    var html_body_response = '<div style="width:98%; margin:0 auto;"> <div style="text-align:left;"> <h1 style="color: rgb(60, 118, 162);">Bienvenido a Handytec!</h1> </div> <div> <div style="text-align: left; padding: 10px 10px 10px 10px; background-color: aliceblue; min-height: 80px; text-align: justify;"> <img src="http://115.146.86.249/images/bridgett.png" width="80px" height="80px" align="left" style="margin-bottom:10px; margin-right:20px;"> <b>Hola ' + req.body.client_name + '</b><br> Hemos recibido tu correo a traves de la pagina web de Handytec. Uno de nuestros consultores expertos se ecuentra analizando tu requerimiento y pronto se pondra en contacto contigo. </div> </p> </div> <div style="padding: 10px 10px 10px 10px; background-color: aliceblue; min-height:110px; height:auto"> <div style="float:left; margin-right: 10px;"> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;"> <a style="text-decoration:none" href="http://www.handytec.mobi" class="clink logo-container"> <img src="http://115.146.86.249/images/logo.png" alt="Handytec - Innovating your Bussiness" border="0" class="sig-logo" width="160" > </a> </p> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;     text-align: right;"> <a class="link signature_website-target sig-hide" href="http://www.handytec.mobi" style="color: rgb(71, 124, 204); text-decoration: none; display: inline;">www.handytec.mobi</a> </p> </div> <div style="float:left; margin-right:30px;"> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;"> <span style="font-weight: bold; color: rgb(33, 33, 33); display: inline;" class="txt signature_name-target sig-hide">HandytecMobi S.A</span><br> <span style="color: #C43B27; display: inline; font-size: 10px;" class="txt signature_jobtitle-target sig-hide">Innovating your Business</span> <span class="email-sep break" style="display: inline; font-size: 10px;"><br></span> <a class="link email signature_email-target sig-hide" href="mailto:diego.montufar@handytec.mobi" style="font-size: 10px; color: rgb(71, 124, 204); text-decoration: none; display: inline;">contact@handytec.mobi</a><br> <span style="color: rgb(33, 33, 33); display: inline; font-size: 10px;" class="txt signature_mobilephone-target sig-hide">+593 2 3238528</span><br> <span style="color: rgb(33, 33, 33); display: inline; font-size: 10px;" class="txt signature_mobilephone-target sig-hide">+593 9 95030269</span> </p> <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px;"> <a href="https://www.facebook.com/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="facebook.png" src="https://s3.amazonaws.com/htmlsig-assets/round/facebook.png" alt="Facebook"> </a> <a href="https://twitter.com/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="twitter.png" src="https://s3.amazonaws.com/htmlsig-assets/round/twitter.png" alt="Twitter"> </a> <a href="#" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="googleplus.png" src="https://s3.amazonaws.com/htmlsig-assets/round/googleplus.png" alt="Google Plus"> </a> <a href="https://www.linkedin.com/company/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="linkedin.png" src="https://s3.amazonaws.com/htmlsig-assets/round/linkedin.png" alt="Linkedin"> </a> </p> </div> <div style="font-size: 11px; padding-right:20px; padding-top:10px; text-align: justify;"> Nuestra misión es convertir buenas ideas en soluciones tecnológicas innovadoras que ayudan a establecer un compromiso con nuestros clientes y hacer crecer su negocio por medio de un modelo exitoso y de alta calidad en la entrega rapida de aplicaciones. Nuestros ingenieros trabajan de cerca con los clientes y proveen la mejor experiencia de usuario siguiendo metodologias agiles durante el desarrollo. Somos especialistas en desarrollar aplicaciones para analisis de BigData y tecnologias moviles, dando soluciones inteligentes y estrategicas a nuestros clientes, en la nube. </div> </div> </div>';
    // setup e-mail data with unicode symbols
    var mailOptionsResponse = {
        from: 'Bridgett at Handytec <noreply@handytec.mobi>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Estamos analizano su Requerimiento', // Subject line
        // text: req.body.texto, // plaintext body
        html: html_body_response
    };

    transporter.sendMail(mailOptionsResponse, function(error, info){
        if(error){
            res.render('error',{message: "Error al enviar mensaje"});
            return console.log(error);

        }else{
            res.render('enviado',{title: "Mensaje enviado exitosamente"});
        }
        console.log('Message sent: ' + info.response);

    });

    var current_date = new Date()

    function formatDate(curr_date) {
      return curr_date.getFullYear() + '-' +
        (curr_date.getMonth() < 9 ? '0' : '') + (curr_date.getMonth()+1) + '-' +
        (curr_date.getDate() < 10 ? '0' : '') + curr_date.getDate();
    }

    var customer = {
      DATE : formatDate(current_date),
      NAME : req.body.client_name,
      LAST_NAME : req.body.client_lastname,
      EMAIL : req.body.email,
      PHONE : req.body.phone,
      COMPANY : req.body.company,
      REQUIREMENT : 'TRA',
      ORIGIN : 'WEB',
      SUSCRIBED : 1
    };

    var result = data.newCustomer(customer);
    if (result == 1){
        console.log('New customer successfully inserted');
    }



});

module.exports = router;
