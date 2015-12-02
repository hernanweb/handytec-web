/*#########################################################################################
#
# Author:       Diego Montufar
# Date:         Nov/2015
# File:         enviar.js
# Context:      Server side code
# Description:  Send email to contact when new customer send request thru web site, then store data on Database.CUSTOMER table
#               and finally send confirmation email to customer.
#
#
#########################################################################################*/


var express = require('express');
var nodemailer = require('nodemailer');
var data = require('../data/data');
var router = express.Router();

//Setup transporter object with noreply credentials
var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'noreply@handytec.mobi',
            pass: 'handytecNOREPLY2016'
        }
    });

/* Method called when post contact form  */
router.post('/', function(req, res, next) {

    //Name + Last Name
    var complete_name = req.body.client_name + ' ' + req.body.client_lastname;

    var reqText = "";

    //Option text based on option list selection
    switch(req.body.request) {
        case 'WEB':
            reqText = "Sitio Web";
            break;
        case 'INF':
            reqText = "Infraestructura";
            break;
        case 'ITS':
            reqText = "Servicios Informáticos";
            break;
        case 'MOB':
            reqText = "Aplicación Móvil";
            break;
        case 'OTH':
            reqText = "Otros";
            break;
        case 'TRA':
            reqText = "Capacitación";
            break;
        case 'WRK':
            reqText = "Trabajar con Uds.";
            break;
    }

    //HTML template to be sent to contact@handytec
    var html_body = '<div style="width:98%; margin:0 auto;"> <div style="text-align:left;vertical-align: middle;"> <div> <img src="http://www.handytec.mobi/images/email/header-enviar.png" style="max-width: 100%; background-color: transparent;"/> </div> </div> <div style="margin-top:3px; "> </div> <div style="text-align: left; padding: 10px 10px 10px 10px; line-height: 23px; margin-top:3px; background-color: aliceblue;"> <label style="color: #2C86C7;"><b>Nombre:&nbsp;</b></label>'+ complete_name +'<br> <label style="color: #2C86C7;"><b>Telefono:&nbsp;</b></label>' + req.body.phone  + '<br> <label style="color: #2C86C7;"><b>Empresa:&nbsp;</b></label>' + req.body.company + '<br> <label style="color: #2C86C7;"><b>Requerimiento:&nbsp;</b></label>' + reqText + '<br> </div> <div style="text-align: left; padding: 10px 10px 10px 10px; line-height: 23px; margin-top:3px; background-color: aliceblue;"> <label style="color: #2C86C7;font-size:16px;"><b>Descripción del Requerimiento:</b></label><br><br>' + req.body.client_message + '<div style="text-align:right; margin-top: 20px; margin-bottom: 15px; margin-right: 10px;"> <a href="mailto:' + req.body.email + '" style="font-family: Tahoma; color: #2C86C7; font-size: 16px; padding: 10px 20px 10px 20px; text-decoration: none; border-style: solid; border-width: 1.5px;">Contestar</a> </div> </div> </div>';

    // setup e-mail data with unicode symbols
    var mailOptions = { 
        from: complete_name + ' <' + req.body.email + '>', // sender address
        to: 'contact@handytec.mobi', // list of receivers
        subject: 'Cliente Requiere: ' + reqText, // Subject line
        html: html_body
    };

    var status = 0;

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.render('error',{message: "Error al enviar mensaje"});
            return console.log(error);

        }else{
            status = 1;
            res.redirect('/?status=' + status);
        }
        console.log('Message sent to contact@handytec: ' + info.response);

    });

    transporter.close();

    /* Store in DB new client */
    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        return str;
    }

    var current_date = getFormattedDate();

    var dev = false;
    var device = 'WEB';

    console.log("Este es el device: " + req.body.device);

    if (req.body.device == "true"){
        device = 'MOB';
    }

    //Setup customer object
    var customer = {
      DATE : current_date,
      NAME : req.body.client_name,
      LAST_NAME : req.body.client_lastname,
      EMAIL : req.body.email,
      PHONE : req.body.phone,
      COMPANY : req.body.company,
      REQUIREMENT : req.body.request,
      ORIGIN : device,
      SUSCRIBED : 1
    };

    //Call to ata layer in order to insert new Client
    var result = data.newCustomer(customer);
    if (result == 1){
        console.log('New customer successfully inserted');
    }

    next();

    //Send email to customer
}, function (req, res, next) {


    var html_body_response = '<div style="width:98%; margin:0 auto;"> <div style="text-align:left;vertical-align: middle;"> <div> <img src="http://www.handytec.mobi/images/email/header-responder.png" style="max-width: 100%; background-color: transparent;"/> </div> </div> <div> <div style="text-align: left; padding: 10px 10px 10px 10px; background-color: aliceblue; min-height: 80px; text-align: justify; font-size:14px; margin-bottom:2px;"> <img src="http://www.handytec.mobi/images/email/bridgett.png" width="80px" height="80px" align="left" style="margin-right:20px;"> <b style="color: #2C86C7; font-size:16px;">Hola ' + req.body.client_name + '!</b><br><br > Hemos recibido tu correo a través de la página web de Handytec. Estamos analizando tu requerimiento y pronto nos pondremos en contacto contigo. </div> </div> <div style="padding: 10px 10px 10px 10px; background-color: aliceblue; min-height:110px; height:auto"> <div style="float:left; margin-right: 10px;"> <p style="font-family: Tahoma; font-size: 10px; line-height: 12px;"> <a style="text-decoration:none" href="http://www.handytec.mobi" class="clink logo-container"> <img src="http://115.146.86.249/images/logo.png" alt="Handytec - Innovating your Bussiness" border="0" class="sig-logo" width="160" > </a> </p> <p style="font-family: Tahoma; font-size: 10px; line-height: 12px;text-align: right;"> <a class="link signature_website-target sig-hide" href="http://www.handytec.mobi" style="color: rgb(71, 124, 204); text-decoration: none; display: inline;">www.handytec.mobi</a> </p> </div> <div style="float:left; margin-right:30px;"> <p style="font-family: Tahoma; font-size: 13px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;"> <span style="font-weight: bold; color: rgb(33, 33, 33); display: inline;" class="txt signature_name-target sig-hide">HandytecMobi S.A</span><br> <span style="color: #C43B27; display: inline; font-size: 10px;" class="txt signature_jobtitle-target sig-hide">Innovating your Business</span> <span class="email-sep break" style="display: inline; font-size: 10px;"><br></span> <a class="link email signature_email-target sig-hide" href="mailto:diego.montufar@handytec.mobi" style="font-size: 10px; color: rgb(71, 124, 204); text-decoration: none; display: inline;">contact@handytec.mobi</a><br> <span style="color: rgb(33, 33, 33); display: inline; font-size: 10px;" class="txt signature_mobilephone-target sig-hide">+593 2 3238528</span><br> <span style="color: rgb(33, 33, 33); display: inline; font-size: 10px;" class="txt signature_mobilephone-target sig-hide">+593 9 95030269</span> </p> <p style="font-family: Tahoma; font-size: 10px; line-height: 12px;"> <a href="https://www.facebook.com/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="facebook.png" src="https://s3.amazonaws.com/htmlsig-assets/round/facebook.png" alt="Facebook"> </a> <a href="https://twitter.com/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="twitter.png" src="https://s3.amazonaws.com/htmlsig-assets/round/twitter.png" alt="Twitter"> </a> <a href="#" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="googleplus.png" src="https://s3.amazonaws.com/htmlsig-assets/round/googleplus.png" alt="Google Plus"> </a> <a href="https://www.linkedin.com/company/handytec" target="_blank" style="display: inline; text-decoration: none;"> <img width="20" height="20" data-filename="linkedin.png" src="https://s3.amazonaws.com/htmlsig-assets/round/linkedin.png" alt="Linkedin"> </a> </p> </div> <div style="font-size: 11px; padding-right:20px; padding-top:10px; text-align: justify;"> Nuestra misión es convertir buenas ideas en soluciones tecnológicas innovadoras que ayudan a establecer un compromiso con nuestros clientes y hacer crecer su negocio por medio de un modelo exitoso y de alta calidad en la entrega rápida de aplicaciones. Somos especialistas en desarrollar aplicaciones para análisis y procesamiento de BigData y tecnologías móviles, dando soluciones inteligentes y estratégicas a nuestros clientes, en la Nube. </div> </div> </div>';

    // setup e-mail data with unicode symbols
    var mailOptionsResponse = {
        from: 'Bridgett via Handytec <noreply@handytec.mobi>', // sender address
        to: req.body.email, // list of receivers
        subject: '(No contestar) Estamos analizano tu requerimiento', // Subject line
        html: html_body_response
    };

    transporter.sendMail(mailOptionsResponse, function(error, info){
        if(error){
            // res.render('error',{message: "Error al enviar mensaje"});
            return console.log(error);

        }

        console.log('Message sent to Client: ' + info.response);

    });

    transporter.close();


});


module.exports = router;
