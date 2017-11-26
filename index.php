<!DOCTYPE HTML>
<!--
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Future Imperfect by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="/lib/w3.css">
		
	
	</head>
	<body>

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header">
						<h1><a href="#">Computer Engineerring</a></h1>
						<nav class="links">
							<ul>
								<li><a href="#">ADMISSION</a></li>
								<li><a href="#">OUR PROJECTS</a></li>
								<li><a href="#">PEOPLE</a></li>
								<li><a href="#">CONTECT US</a></li>
							</ul>
						</nav>
						<nav class="main">
							<ul>
								<li class="search">
									<a class="fa-search" href="#search">Search</a>
									<form id="search" method="get" action="#">
										<input type="text" name="query" placeholder="Search" />
									</form>
							  </li>
								<li class="menu">
									<a class="fa-bars" href="#menu">Menu</a>								</li>
							</ul>
						</nav>
					</header>

				<!-- Menu -->
					<section id="menu">
						<!-- Search -->
							<section>
								<form class="search" method="get" action="#">
									<input type="text" name="query" placeholder="Search" />
								</form>
							</section>

						<!-- Actions -->
							<section>
								<ul class="actions vertical">
									<li><a href="#" class="button big fit">Log In</a></li>
								</ul>
							</section>
					</section>

				<!-- Main -->
					<div id="main">
					
					
					<!-- Hearweb -->
					
							<article class="post">				
								
<div class="w3-content" style="max-width:800px;position:relative">

<div class="w3-display-container mySlides">
  <img src="pic01.jpg" style="width:100%">
  <div class="w3-display-bottomleft w3-large w3-container w3-padding-hor-16 w3-black">
    Trolltunga, Norway
  </div>
</div>

<div class="w3-display-container mySlides">
  <img src="pic01.jpg" style="width:100%">
  <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black">
    Northern Lights, Norway
  </div>
</div>

<div class="w3-display-container mySlides">
  <img src="pic01.jpg" style="width:100%">
  <div class="w3-display-topleft w3-large w3-container w3-padding-hor-16 w3-black">
    Beautiful Mountains
  </div>
</div>

<div class="w3-display-container mySlides">
  <img src="pic01.jpg" style="width:100%">
  <div class="w3-display-topright w3-large w3-container w3-padding-hor-16 w3-black">
    The Rain Forest
  </div>
</div>

<div class="w3-display-container mySlides">
  <img src="pic01.jpg" style="width:100%">
  <div class="w3-display-middle w3-large w3-container w3-padding-hor-16 w3-black">
    Mountains!
  </div>
</div>

<a class="w3-btn-floating w3-hover-dark-grey" style="position:absolute;top:52%;left:0" onclick="plusDivs(-1)">❮</a>
<a class="w3-btn-floating w3-hover-dark-grey" style="position:absolute;top:52%;right:0" onclick="plusDivs(1)">❯</a>

</div>

<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
</script>
							</article>

						<!-- Post -->
						<?php 
							require_once("config/config.php");
								$sql = "select * from webboard";
								$secel = mysql_query($sql);
						while($result = mysql_fetch_array($secel)){
						?>
							<article class="post">
								<header>
									<div class="title">
										<h2><a href="#"><?=$result["Details"];?></a></h2>
										<p><?=$result["Details"];?></p>
									</div>
									<div class="meta">
										<time class="published" datetime="2015-11-01">November 1, 2015</time>
										<a href="#" class="author"><span class="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>									</div>
								</header>
								<a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
								<p><?=$result["Details"];?></p>
								
								
							
								<footer>
									<ul class="actions">
										<li><a href="#" class="button big">Continue Reading</a></li>
									</ul>
									<ul class="stats">
										<li><a href="#">General</a></li>
										<li><a href="#" class="icon fa-heart">28</a></li>
										<li><a href="#" class="icon fa-comment">128</a></li>
									</ul>
								</footer>
							</article>
			<?php } ?>			
			<!-- Pagination -->
							<ul class="actions pagination">
								<li><a href="" class="disabled button big previous">Previous Page</a></li>
								<li><a href="#" class="button big next">Next Page</a></li>
							</ul>

					</div>

				<!-- Sidebar -->
					<section id="sidebar">

						<!-- Intro -->
							<section id="intro">
								<a href="#" class="logo"><img src="images/logo.jpg" alt="" /></a>
								<header>
									<h2>Computer Engineerring</h2>
									<p>Wellcome <a href="http://html5up.net">HTML5 UP</a></p>
								</header>
					  </section>

						<!-- Mini Posts -->
							<section>
								<div class="mini-posts">

									<!-- start show -->
										<article class="mini-post">
											<header>
												<h3><a href="#">Vitae sed condimentum</a></h3>
												<time class="published" datetime="2015-10-20">October 20, 2015</time>
												<a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>											</header>
											<a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
										</article>
									<!-- End show -->	
									
								</div>
							</section>

						<!-- Posts List -->
							<section>
								<ul class="posts">
								
							<!-- start show -->
									<li>
										<article>
											<header>
												<h3><a href="#">Congue ullam corper lorem ipsum dolor</a></h3>
												<time class="published" datetime="2015-10-06">October 7, 2015</time>
											</header>
											<a href="#" class="image"><img src="images/pic12.jpg" alt="" /></a>
										</article>
									</li>
							<!-- End show -->	
								
								</ul>
							</section>

						<!-- About -->
							<section class="blurb">
								<h2>About</h2>
								<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
								<ul class="actions">
									<li><a href="#" class="button">Learn More</a></li>
								</ul>
							</section>

						<!-- Footer -->
							<section id="footer">
								<ul class="icons">
									<li><a href="#" class="fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="fa-facebook"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="#" class="fa-rss"><span class="label">RSS</span></a></li>
									<li><a href="#" class="fa-envelope"><span class="label">Email</span></a></li>
								</ul>
								<p class="copyright">&copy; Computer Engineerring UP. Design</p>
							</section>

					</section>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>

<!--kkk-->
