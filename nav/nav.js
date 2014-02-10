function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;
	base = base + 'pages/'
	document.write(

        '<div id="nav"><a name=""></a><a href="javascript:void(0);" onclick="myHeight.toggle();"></div>'+
		'<center>'+ '<h3 style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:40px;">Hardware & Networking </h3>'+ '</center>' +
        '<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
        '<td class="td_sep" valign="top">' +
		'<ul>' +
			'<center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;"><a href="'+base+'001.html">Course Home</a></p>' +
            '</center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Hardware Introduction</p>' +
                   
			'<li><a href="'+base+'001.html">Introduction</a></li>' +
			'<li><a href="'+base+'002.html">Basic Electronics & Precautions</a></li>' +
			'<li><a href="'+base+'003.html">History & Generation of Computers</a></li>' +
			'<li><a href="'+base+'004.html">Types of Computers</a></li>'+'<br>'+'<br>'+
			'<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">PC Overview</p>' +
			'<li><a href="'+base+'005.html">How PC Works</a></li>' +
			'<li><a href="'+base+'006.html">Purpose & Characteristics of PC</a></li>' +
			'<li><a href="'+base+'007.html">Parts (CPU, Memory & Peripherals)</a></li>' +
			'<li><a href="'+base+'008.html">Power Supply Types & Characteristics</a></li>' +'<br>'+
			'<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Mother Board Architecture</p>' +
			'<li><a href="'+base+'010.html">Form Factors</a></li>' +
			'<li><a href="'+base+'011.html">Buses & Types</a></li>' +
			'<li><a href="'+base+'012.html">Sockets, Slots & Ports</a></li>' +
			'<li><a href="'+base+'013.html">Chipset-functions </a></li>' +'<br>'+
			'<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Display & Memory</p>' +
			'<li><a href="'+base+'014.html">Display Devices & Characteristics</a></li>' +
			'<li><a href="'+base+'015.html">Types of Memory</a></li>' +
			'<li><a href="'+base+'016.html">Memory Modules & its specifications</a></li>' +
			'<li><a href="'+base+'017.html">Floppy Disk Storage</a></li>' +'<br>'+
			'</ul>' +
			'</td><td class="td_sep" valign="top">' +
			'<ul>' +'<center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;"><a href="'+base+'001.html">Course Home</a></p></center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Storage Devices & Characteristics</p>' +
            '<li><a href="'+base+'018.html">Hard Disk Storage</a></li>' +
            '<li><a href="'+base+'019.html">Optical Storage</a></li>' +
            '<li><a href="'+base+'020.html">BIOS Basics</a></li>' +'<br>'+'<br>'+'<br>'+'<br>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">BIOS & CMOS</p>' +
			'<li><a href="'+base+'021.html">CMOS Setup Specification</a></li>' +
			'<li><a href="'+base+'022.html">SMPS Overview</a></li>' +
			'<li><a href="'+base+'023.html">Cooling Methods & Devices</a></li>' + '<br>'+'<br>'+'<br>'+
			'<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Printers</p>' +
            '<li><a href="'+base+'024.html">Inkjet Printer</a></li>' +
			'<li><a href="'+base+'025.html">Dot Matrix Printer</a></li>' +
			'<li><a href="'+base+'026.html">Laser Printer</a></li>' +
            '<li><a href="'+base+'028.html">Local vs Network Printers</a></li>' + '<br>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Troubleshooting Repair & Maintenance</p>' +
            '<li><a href="'+base+'024.html">Identify the Problem</a></li>' +
            '<li><a href="'+base+'025.html">Establish a Theory</a></li>' +
            '<li><a href="'+base+'026.html">Test the Theory</a></li>' +
            '<li><a href="'+base+'028.html">Document findings, actions & Outcome</a></li>' + '<br>'+
            '</ul>' +
            '</td><td class="td_sep" valign="top">' +
            '<ul>' +'<center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;"><a href="'+base+'001.html">Course Home</a></p></center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">OS Installation - Windows</p>' +
            '<li><a href="'+base+'../documents/doc/Install Windows XP.docx">Windows XP</a></li>' +   
            '<li><a href="'+base+'../documents/doc/Install Windows 7.docx">Windows 7</a></li>' +
            '<li><a href="'+base+'../documents/doc/Types of Windows OS.docx">Types of Windows OS</a></li>' +
            '<li><a href="'+base+'026.html">Difference between Windows OS</a></li>' + '<br>'+'<br>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">OS Installation - Linux</p>' +
            '<li><a href="'+base+'026.html"> Linux</a></li>' +
            '<li><a href="'+base+'026.html"> Basic Commands in Linux</a></li>' +
            '<li><a href="'+base+'026.html"> Types of Linux OS</a></li>' +'<br>'+'<br>'+'<br>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Dual Boot & USB Bootable</p>' +
            '<li><a href="'+base+'026.html"> Windows & Windows</a></li>' +
            '<li><a href="'+base+'026.html"> Windows & Linux</a></li>' +
            '<li><a href="'+base+'026.html"> Make USB Bootable</a></li>' +'<br>'+'<br>'+'<br>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Software & Driver Installation</p>' +
            '<li><a href="'+base+'026.html"> Microsoft Office 2007 & 2010</a></li>' +
            '<li><a href="'+base+'026.html">Utility Software</a></li>' +
            '<li><a href="'+base+'026.html">System Requirements</a></li>' +
            '<li><a href="'+base+'026.html">Audio, Video & LAN Drivers</a></li>' +'<br>'+'<br>'+'<br>'+
            '</ul>' +
            '</td><td class="td_sep" valign="top">' +
            '<ul>' +'<center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;"><a href="'+base+'001.html">Course Home</a></p></center>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">System Utilities / Tools </p>' +
            '<li><a href="'+base+'026.html">Disk Management Tools</a></li>' +
            '<li><a href="'+base+'026.html">Administrator Tools</a></li>' +
            '<li><a href="'+base+'026.html">Device & Task Manager</a></li>' +
            '<li><a href="'+base+'026.html">Antivirus</a></li>'  + '<br>'+'<br>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">System Back up & Types</p>' +                   
            '<li><a href="'+base+'026.html">Media Back up</a></li>' +
            '<li><a href="'+base+'026.html">Norton Ghost</a></li>' +'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+
            '<p style="font-family:Agency FB;background-color:#000000;color:#FAEBD7;font-size:20px;">Troubleshooting</p>' +          
            '<li><a href="'+base+'026.html">System Assembling</a></li>' +
            '<li><a href="'+base+'026.html">OS Related Issues</a></li>' +
            '<li><a href="'+base+'026.html">Hardware Related Issues</a></li>' +
            '<li><a href="'+base+'026.html">Printers</a></li>' +
            '<li><a href="'+base+'026.html">Proper use of User Interfaces</a></li>' +
            '<li><a href="'+base+'026.html">Preventive Maintenance Techniques</a></li>' +
            '<li><a href="'+base+'026.html">Exams</a></li>' +
            '</ul>' +
            '</td><td class="td_sep" valign="top">' +
            '<ul>' + '<br>'+'<br>'+'<br>'+ 
   	'</td></tr></table>');
}




