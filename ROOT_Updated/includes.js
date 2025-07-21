function displayHeader(){
	document.write('<div id="header">');
	document.write('<div id="headerlogo">');
	document.write('<img alt="Adaptive Map Logo" height="75" src="http://mechanicsmap.psu.edu/icons/titleicon.png" width="300">');
	document.write('</div>')
	document.write('<div id="headercourse">');
	document.write('<h2>Engineering Mechanics</h2>');
	document.write('</div>');
	document.write('</div>');
}

function displayMenuMain(){
	document.write('<div id="navmenu">');
    document.write('<ul>');
    document.write('<li><a href="index.html">Home</a></li>');
    document.write('<li><a href="about.html">About</a></li>');
    document.write('<li><a href="instructor.html">Instructor Resources</a></li>');
    document.write('<li><a href="involved.html">Get Involved</a></li>');
    document.write('</ul>');
	document.write('</div>');
 }

function displayMenuSub(){
	document.write('<div id="navmenu">');
    document.write('<ul>');
    document.write('<li><a href="../../../index.html">Home</a></li>');
    document.write('<li><a href="../../../about.html">About</a></li>');
    document.write('<li><a href="../../../instructor.html">Instructor Resources</a></li>');
    document.write('<li><a href="../../../involved.html">Get Involved</a></li>');
    document.write('</ul>');
	document.write('</div>');
 }


function displayResources(){
	document.write('<h2>Useful Resources</h2>');
	document.write('<div class="resource">');
	document.write('<a href="http://mechanicsmap.psu.edu/websites/UnitConversion.pdf" target="_blank">Units and Conversion Table</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="https://www.wolframalpha.com/examples/mathematics/algebra" target="_blank">Wolfram Alpha Equation Solver</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="https://www.wolframalpha.com/examples/mathematics/calculus-and-analysis" target="_blank">Wolfram Alpha Derivative and Integral Calculator</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="https://www.wolframalpha.com/examples/mathematics/linear-algebra/vectors" target="_blank">Wolfram Alpha Vector Operation Calculator</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="http://mechanicsmap.psu.edu/websites/centroidtables/centroids2D/centroids2D.html" target="_blank">2D Centroid and Area Moment of Inertia Table</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="http://mechanicsmap.psu.edu/websites/centroidtables/centroids3D/centroids3D.html" target="_blank">3D Centroid and Mass Moment of Inertia Table</a>');
	document.write('</div>');
}	

function displayFooter(){
	document.write('<div id="footer">');
	document.write('<table style="border:0px">');
	document.write('<tr>');
	document.write('<td style="width:200px"><a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a></td>');
	document.write('<td style="width:200px"><img alt="NSF Icon" height="100" src="http://mechanicsmap.psu.edu/icons/NSF_Logo.jpg" width="100"></td>');
	document.write('<td style="width:200px"><img alt="Open_PSU" height="45" src="http://mechanicsmap.psu.edu/icons/PSU_OER.png" width="100"></td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td style="width:200px">');
	document.write('Authors: <a href="https://mechanicsmap.psu.edu/bio/index.html">Jacob Moore</a>, Majid Chatsaz, <a href="http://mech.ubc.ca/agnes-dentremont/">Agnes d&#39;Entremont</a>, Joan Kowalski, and Douglas Miller have licensed all content under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.');
	document.write('</td>');
	document.write('<td colspan="2" style="width:400px">');
	document.write('This work was partially supported by the U.S. National Science Foundation Award # TUES-1044790 as well as the Affordable Course Transformation Program at PSU. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the sponsoring organizations');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</div>');
 }
