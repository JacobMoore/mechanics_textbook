function displayHeader(){
	document.write('<div id="header">')
	document.write('<div id="headerlogo">')
	document.write('<img alt="Adaptive Map Logo" height="77" src="http://adaptivemap.ma.psu.edu/icons/titleicon.png" width="300">')
	document.write('</div>')
	document.write('<div id="headercourse">')
	document.write('<h2>Engineering Mechanics</h2>')
	document.write('</div>')
	document.write('</div>')
}

function displayMenuMain(){
	document.write('<div id="navmenu">');
    document.write('<ul>');
    document.write('<li><a href="index.html">Home</a></li>');
    document.write('<li><a href="about.html">About</a></li>');
    document.write('<li><a href="instructor.html">Instructor Resources</a></li>');
    document.write('<li><a href="contributing.html">Contributing</a></li>');
    document.write('</ul>');
	document.write('</div>');
 }

function displayMenuSub(){
	document.write('<div id="navmenu">');
    document.write('<ul>');
    document.write('<li><a href="../../../index.html">Home</a></li>');
    document.write('<li><a href="../../../about.html">About</a></li>');
    document.write('<li><a href="../../../instructor.html">Instructor Resources</a></li>');
    document.write('<li><a href="../../../contributing.html">Contributing</a></li>');
    document.write('</ul>');
	document.write('</div>');
 }

function displayResources(){
	document.write('<h2>Useful Resources</h2>');
	document.write('<div class="resource">');
	document.write('<a href="http://www.wolframalpha.com/examples/EquationSolving.html" target="_blank">Wolfram Equation Solver</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="http://www.bluebit.gr/matrix-calculator/linear_equations.aspx" target="_blank">Matrix Equation Solver</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="http://www.wolframalpha.com/examples/Vectors.html" target="_blank">Wolfram Vector Operation Calculator</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="../../centroidtables/centroids2D/centroids2D.html" target="_blank">2D Centroid Location and Area Moment of Inertia Table</a>');
	document.write('</div>');
	document.write('<div class="resource">');
	document.write('<a href="../../centroidtables/centroids3D/centroids3D.html" target="_blank">3D Centroid Location and Mass Moment of Inertia Table</a>');
	document.write('</div>');
}	

function displayFooter(){
	document.write('<div id="footer">');
	document.write('<table>');
	document.write('<tr>');
	document.write('<td style="width:200px"><img alt="Creative Commons Icon" height="31" src="http://adaptivemap.ma.psu.edu/icons/cc_icon.png" width="88"></td>');
	document.write('<td style="width:200px"><img alt="GNU Icon" height="98" src="http://adaptivemap.ma.psu.edu/icons/GNU_logo.jpg" width="100"></td>');
	document.write('<td style="width:200px"><img alt="NSF Icon" height="100" src="http://adaptivemap.ma.psu.edu/icons/NSF_Logo.jpg" width="100"></td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td style="width:200px">');
	document.write('Author: <a href="http://www.personal.psu.edu/jpm46/">Dr. Jacob Moore</a> has licensed the content, including the webpages and the concept map, under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/"> Creative Commons Attribution-NonCommercial 3.0 Unported License</a>.');
	document.write('</td>');
	document.write('<td style="width:200px">');
	document.write('Software Developers: Nathanael Bice, Lauren Gibboney, Joseph Luke, James McIntyre, John Nein, Tucker Noia, Michel Pascale, Joshua Rush, Shawn Shroyer, and Menelik Young have licenced this software under a <a href="http://www.gnu.org/licenses/quick-guide-gplv3.html">GNU General Public License, version 3</a>.');
	document.write('</td>');
	document.write('<td style="width:200px">');
	document.write('This work was partially supported by the U.S. National Science Foundation Award # TUES-1044790. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author and do not necessarily reflect the views of the National Science Foundation.');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</div>');
 }