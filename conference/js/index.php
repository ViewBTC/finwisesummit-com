<?php /* Template Name: 品牌商城 */ ?>
<?php get_header(); ?>

<style type="text/css">
    #header{
            z-index: 9999 !important;
    }
</style>>
<!--
<div id="page-content">
	<div class="container">
		<div class="row">
			<div class="article  col-xs-12 col-sm-8 col-md-8">
				<div class="post page">
					<?php if(have_posts()): while(have_posts()):the_post();  ?>
					<div class="post-title">
						<?php the_tags('<div class="post-entry-categories">','','</div>'); ?>
						<h1 class="title"><?php the_title(); ?></h1>
					</div>
					<div class="post-content">
						<div class="item-intro-content">
							<?php if(has_excerpt()): ?>
								<p class="post-abstract">
								<span class="abstract-tit">摘要：</span>
								<?php echo get_the_excerpt(); ?>
								</p>
							<?php endif;?>
							<?php the_content();?>
						</div>

					</div>
				</div>
				<div class="clear"></div>
				<?php if (comments_open()) comments_template( '', true ); endwhile;  endif; ?>
			</div>
			<?php get_sidebar(); ?>
		</div>
	</div>
</div>
-->

<!-- <!DOCTYPE html>

<html lang="en">

<head>
    <title>Viewfin,the new reality is comming</title>
    <meta charset="UTF-8">
    <meta name="keywords" content="viewfin, blockchain, metaverse, avatar, oracle, smart property, eric gu, fintech">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="images/favicon.png">
    <link rel="stylesheet" href="css/bundle.css">
    <link rel="stylesheet" href="css/hody-icons.css">
    <link rel="stylesheet" href="/viewfin/css/style.css"> -->

    <!--<link rel="stylesheet" href="css/font-awesome.min.css">-->


    <!--[if lt IE 9]->
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

<!-- </head>

<body> -->
    <!-- Preloader-->
    <!-- <div id="loader">
        <div class="centrize">
              <div class="v-center">
                <div id="mask">
                    <span></span>
                </div>
            </div>
        </div>
    </div>-->
    <!-- End Preloader-->
    <div w3-include-html="top.html"></div>
    <section id="home">
        <div class="flexslider" id="home-slider">
            <ul class="slides">
                <li>
                    <img src="./viewfin/images/slider/bg-4.jpg" alt="">
                    <div class="slide-wrap">
                        <div class="slide-content">
                            <div class="container">
                                <h1 class="font-medium"> The New Reality.</h1>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="/viewfin/images/slider/slider1.jpg" alt="">
                    <div class="slide-wrap">
                        <div class="slide-content">
                            <div class="container">
                                <h1 class="font-medium">Connects the World.</h1>
                                <h5>with a team of professionals.</h5>
                                <p class="mt-25"><a class="btn btn-color" href="http://mvs.live/" target="_blank">Metaverse<span class="btn-icon"><i class="hc-play"></i></span></a></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="pt-70">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 col-sm-4 img-side img-left">
                    <div class="img-holder">
                        <img class="img-responsive" src="/viewfin/images/img-about.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-70 pb-50">
            <div class="col-sm-7  col-sm-offset-5 col-md-offset-6 col-md-6">
                <div class="title">
                    <h2> About Viewfin</h2>
                </div>
                <div class="row">
                    <div class="col-sm-12">

                        <div class="media-right">

                            <p class="text-justify">ViewFin™ is a market leader in Blockchain technology and the developer of Metaverse™, the first
                                public Blockchain in China. As the most visionary Fintech company in China, ViewFin™ has
                                assembled together a team of domestic and international specialists from various industries
                                such as the financial, internet, consulting and Blockchain industries to implement future
                                Fintech applications.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12">

                        <div class="media-right">

                            <p class="text-justify">ViewFin™ recognizes the importance of having digital identities (Avatars) embedded at the protocol
                                level and have predicted well in advance that intermediaries (Oracles) are a necessary part
                                of the Blockchain ecosystem. We believe that digital assets + digital identities + intermediaries
                                = a web of Smart Properties.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12">

                        <div class="media-right">

                            <p class="text-justify">Eric Gu is the Founder and CEO of Viewfin. He is a senior expert in Fintech and Digital Assets
                                and a well-known opinion leader in the Chinese Blockchain ecosystem. Eric is also the main
                                translator of China's first Blockchain book “Blueprint for a New Economy “.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="grey-bg" id="tm">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 col-sm-4 img-side img-right">
                    <div class="img-holder">
                        <img class="img-responsive"  src="/viewfin/images/bg/about1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-70">
            <div class="col-lg-7 col-sm-7 col-md-5">
                <div class="title">
                    <h2>What is Metaverse?</h2>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="icon-thumbs-up"></span><span class="icon-box wow bounceIn"> <i class="hc-global"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title ">A Decentralized World</h4>
                            <p class="text-justify">Metaverse is a decentralized world that redefines digital identities and smart assets through
                                blockchain technology：Within the peer to peer network resides universally unique and self-sovereign
                                identities, attached are user-defined digital identity attributes and smart assets, which
                                will essentially power all decentralized applications or smart contracts coming afterwards.</p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="/viewfin/icon-box wow bounceIn"> <i class="hc-news-paper"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title">A Digital Identity</h4>
                            <p class="text-justify">Owning a digital identity will become essential to virtual life. Avatar is a symbolic term of
                                expressing this identity system in Metaverse——accessible, unified and self-sovereign. With
                                the determinacy and uniqueness of Avatar, smart assets are no longer disordered, they can
                                be frequently created and transferred among identities, flowing into and out of Metaverse
                                as values alongside these assets will constitute a new form of connections——the internet
                                of values.</p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="/viewfin/icon-box wow bounceIn"> <i class="hc-monitor"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title">A New Economic Model</h4>
                            <p class="text-justify">Metaverse is an open source public Blockchain project with a micro inflation model is employed
                                to issue Entropy (ETP), the native digital token used in Metaverse. Entropies can be used
                                to issue and transfer digital assets, and register new digital identity or intermediary service
                                providers (Oracles).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <section id="tme">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 col-sm-4 img-side img-left">
                    <div class="img-holder">
                        <img class="img-responsive" src="/viewfin/images/bg/about2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-70 pb-50">
            <div class="col-sm-7  col-sm-offset-5 col-md-offset-6 col-md-6">
                <div class="title">
                    <h2> The Three Pillars of Metaverse</h2>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="icon-box wow bounceIn"> <i class="hc-users"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title ">Avatars (Digital Identity)</h4>
                            <p class="text-justify">Through having your Avatar, you have your digital passport to the virtual world where an Avatar
                                can be managed by a physical person or artificial intelligence. It is allowed to own several
                                digital assets. There is a many to many relationship in Metaverse where digital assets can
                                also be owned by many Avatars.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="icon-box wow bounceIn"> <i class="hc-diamond"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title">Digital assets</h4>
                            <p class="text-justify">Digital assets + Digital identities= Internet of Value. In Metaverse digital assets represents
                                any category of asset that is in the digital form. As digital assets can represent anything,
                                this gives power to communities to value whatever they want. We are moving towards an age
                                that cannot only transfer money but also transfer value. </p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="icon-box wow bounceIn"> <i class="hc-culture"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title">Oracles</h4>
                            <p class="text-justify">In Metaverse intermediary institutions (Oracles) are invited on-chain. Viewfin believes that
                                intermediaries will still play an important role in the future. As of today, critical thinking
                                and logic are not programmable. We still need the intervention of intermediaries to apply
                                sound judgement and verify our actions. The Metaverse ecosystem will rely on Oracles to ensure
                                that all information shared, stored and provided by the members of the Metaverse community
                                is true and reliable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>


    <section id="tmw" class="grey-bg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 col-sm-4 img-side img-right">
                    <div class="img-holder">
                        <img class="img-responsive" src="/viewfin/images/bg/about3.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-70 pb-50">
            <div class="col-lg-7 col-md-5 col-sm-7">
                <div class="title">
                    <h2>The Metaverse Wallet</h2>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="icon-box wow bounceIn"> <i class="hc-key"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title ">Private Key</h4>
                            <p>Thanks to deterministic wallet technology, a user can easily restore her wallet without needing
                                any information and create public addresses without using a private key.</p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="icon-box wow bounceIn"> <i class="hc-cash"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title">Customed Asset</h4>
                            <p>Our wallet allows the customer to create his own assets from the Metaverse platform and to access
                                all the assets created from the same place.</p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="media-left"> <span class="icon-box wow bounceIn"> <i class="hc-credit"></i> </span> </div>
                        <div class="media-right">
                            <h4 class="icon-title">ETP Address</h4>
                            <p>The customer is allowed to create as many ETP addresses as she wants and can conveniently transfer
                                her ETPs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="team">
        <div class="container pt-70 pb-10">
            <div class="title center">
                <h2>Meet Our Team</h2>
            </div>
            <div class="row" style="cursor: pointer">
                <div class="col-sm-4">
                    <div class="team-member round-thumb big-thumb" data-toggle="modal" data-target="#EGModal">
                        <div class="team-image">
                            <img src="/viewfin/images/team/eric.jpg" alt="Eric Gu">
                        </div>
                        <div class="team-info">
                            <h4>Eric Gu</h4><span class="serif">CEO</span>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="team-member round-thumb big-thumb" data-toggle="modal" data-target="#MJModal">
                        <div class="team-image">
                            <img src="/viewfin/images/team/jym.jpg" alt="Michael Jiang">
                        </div>
                        <div class="team-info">
                            <h4>Michael Jiang</h4><span class="serif">VP Research and Development</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="team-member round-thumb big-thumb" data-toggle="modal" data-target="#JLModal">
                        <div class="team-image">
                            <img src="/viewfin/images/team/jen.jpg" alt="Jen Lee">
                        </div>
                        <div class="team-info">
                            <h4>Jen Lee</h4><span class="serif">Vice President</span>
                        </div>
                    </div>
                </div>

            </div>
             <div class="row" style="cursor: pointer">
                <div class="col-sm-4">
                    <div class="team-member round-thumb big-thumb" data-toggle="modal" data-target="#CHModal">
                        <div class="team-image">
                            <img src="/viewfin/images/team/ch.jpg" alt="Chen Hao">
                        </div>
                        <div class="team-info">
                            <h4>Chen Hao</h4><span class="serif">CTO</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div w3-include-html="news-home-content.html"></div>
    <div w3-include-html="bottom.html">
    </div>
    <!--Eric Modal -->
    <div class="modal fade" id="EGModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="z-index: 999999">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title" id="myModalLabel">Eric Gu</h2>
                </div>
                <div class="modal-body">
                    <div class="team-member round-thumb big-thumb">
                        <div class="team-image">
                            <img src="images/team/eric.jpg" alt="Eric Gu">
                        </div>
                    </div>
                    <div>
                        <p>
                            Viewfin’s Founder and CEO, Eric Gu, is a Blockchain and Digital Asset expert and a well-known opinion leader in the Chinese
                            Blockchain ecosystem. As well as being a lifetime member of the Bitcoin Foundation, Eric was
                            the main translator of ‘Blockchain: Blueprint for a New Economy’, the first Blockchain book to
                            be translated into Chinese.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!--Michael Modal -->
    <div class="modal fade" id="MJModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="z-index: 999999">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title" id="myModalLabel">Michael Jiang</h2>
                </div>
                <div class="modal-body">
                    <div class="team-member round-thumb big-thumb">
                        <div class="team-image">
                            <img src="images/team/jym.jpg" alt="Michael Jiang">
                        </div>
                    </div>
                    <div>
                        <p>
                            Michael is the Co-founder of Viewfin and VP of Research and Development. Being actively involved within Bitcoin and Blockchain
                            since 2012, Michael is the brains behind our research division having been a Big Data Consultant
                            and Project Manager at Hua Yuan Data before cofounding Viewfin. Michael did his Bachelor’s and
                            Masters at Shanghai Jiaotong University
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!--Chen Modal -->
    <div class="modal fade" id="CHModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="z-index: 999999">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title" id="myModalLabel">Chen Hao</h2>
                </div>
                <div class="modal-body">
                    <div class="team-member round-thumb big-thumb">
                        <div class="team-image">
                            <img src="images/team/ch.jpg" alt="Chen Hao">
                        </div>
                    </div>
                    <div>
                        <p>
                            Chen Hao is Viewfin’s CTO. In his role as CTO, he is responsible for Metaverse’s development and is the architect behind
                            HFT Digital Asset Platform. Previously, Chen Hao was a Software Engineer at Accenture and proficient
                            with C++ and Python as well as having many years of experience in the development of payment
                            and settlement systems. Chen Hao is an 8BTC.com columnist, Shared Finance columnist, Libbitcoin
                            developer and contributor to open source projects.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Jen Lee -->
    <div class="modal fade" id="JLModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="z-index: 999999">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title" id="myModalLabel">Jen Lee</h2>
                </div>
                <div class="modal-body">
                    <div class="team-member round-thumb big-thumb">
                        <div class="team-image">
                            <img src="images/team/jen.jpg" alt="Jen Lee">
                        </div>
                    </div>
                    <div>
                        <p>
                            Jen Lee is currently the Vice President of Viewfin. Before joining Viewfin,
                            she was at Pingan where she was heavily involved in establishing a nation wide core insurance system.
                            She has in depth knowledge of Fintech and related laws and regulations. She obtained a Masters in Actuary
                            and Risk control at the University of International Business and Economics in Beijing.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

<!--    -->

    <script type="text/javascript" src="/viewfin/js/jquery.js"></script>
    <script type="text/javascript" src="/viewfin/js/bundle.js"></script>
    <script type="text/javascript" src="/viewfin/js/SmoothScroll.js"></script>
    <script type="text/javascript" src="/viewfin/js/main.js"></script>
    <script type="text/javascript" src="/viewfin/js/w3.js"></script>
    <script>
        w3.includeHTML();
    </script>
<!-- 
</body>
ƒ




</html> -->
<!-- 
<?php get_footer(); ?>

-->
