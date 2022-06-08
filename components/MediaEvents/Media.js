import React, { Component } from 'react'

class Media extends Component {
	render(){
  		return (
    <section className="blog-details-area ptb-100">
    	<div className="container">
        	<div className="row">
          		<div className="col-lg-8 col-md-12">
				  	<div className="blog-details-desc">
					  	<div className="article-image">
						  	<img src="/images/blog-details/single-blog.jpg" alt="image" />
						</div>
						<div className="article-content">
							<div className="entry-meta">
								<ul>
									<li>
										<span className="mr-1">Posted On:</span> January 02, 2020
									</li>
									<li>
										<span className="mr-1">Posted By:</span>
										<a href="/blog/">John Anderson</a>
									</li>
								</ul>
							</div>
							<h3>Why Business Absolutely Needs a Virtual Office</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
							<blockquote className="wp-block-quote">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
									<cite>Tom Cruise</cite>
							</blockquote>
							<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
							<ul className="wp-block-gallery columns-3">
								<li className="blocks-gallery-item">
									<figure><img src="/images/blog-details/1.jpg" alt="image" /></figure>
								</li>
								<li className="blocks-gallery-item">
									<figure><img src="/images/blog-details/2.jpg" alt="image" /></figure>
								</li>
								<li className="blocks-gallery-item">
									<figure><img src="/images/blog-details/3.jpg" alt="image" /></figure>
								</li>
							</ul>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
						</div>
						<div className="article-footer">
							<div className="article-tags">
								<span><i className="fas fa-bookmark"></i></span>
									<a href="/blog/">Fashion,</a>
									<a href="/blog/">Games,</a>
									<a href="/blog/">Travel</a>
							</div>
							<div className="article-share">
								<ul className="social">
									<li><span>Share:</span></li>
									<li>
										<a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
									</li>
									<li>
										<a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
									</li>
									<li>
										<a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
									</li>
									<li>
										<a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div className="post-navigation">
							<div className="navigation-links">
								<div className="nav-previous">
									<a href="/MediaEvents/#"><i className="fa fa-arrow-left mr-2"></i>Prev Post</a>
								</div>
								<div className="nav-next">
									<a href="/MediaEvents/#">Next Post<i className="fa fa-arrow-right ml-2"></i></a>
								</div>
							</div>
						</div>
						<br />
						<center>
							<nav aria-label="...">
							<ul className="pagination">
								<li className="page-item disabled">
									<a className="page-link" href="#" tabindex="-1">Previous</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">1</a>
								</li>
								<li className="page-item active">
									<a className="page-link" href="#">2 
									<span className="sr-only">(current)</span></a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">3</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">Next</a>
								</li>
							</ul>
							</nav>
						</center>
					</div>
				</div>
				<div className="col-lg-4 col-md-12">
						<aside className="widget-area" id="secondary">
							<div className="widget widget_search">
								<form className="search-form">
									<input type="search" className="search-field" placeholder="Search..." />
									<button type="submit"><i className="fas fa-search"></i></button>
								</form>
							</div>
							<div className="widget widget_zash_posts_thumb">
								<h3 className="widget-title">Recent Posts</h3>
									<article className="item">
										<a className="thumb" href="/single-blog/">
										<span className="fullimage cover bg1" role="img"></span></a>
										<div className="info"><time className="2020-06-30">June 10, 2020</time>
											<h4 className="title usmall">
												<a href="/single-blog/">Making Peace With The Feast Or Famine Of Freelancing</a>
											</h4>
										</div>
									</article>
									<article className="item">
										<a className="thumb" href="/single-blog/"><span className="fullimage cover bg2" role="img"></span>
										</a>
										<div className="info"><time className="2020-06-30">June 21, 2020</time>
										<h4 className="title usmall">
											<a href="/single-blog/">I Used The Web For A Day On A 50 MB Budget</a>
										</h4>
										</div>
										<div className="clear">
										</div>
									</article>
									<article className="item">
										<a className="thumb" href="/single-blog/">
											<span className="fullimage cover bg3" role="img"></span>
										</a>
										<div className="info">
											<time className="2020-06-30">June 30, 2020</time>
											<h4 className="title usmall"><a href="/single-blog/">How To Create A Responsive Popup Gallery?</a></h4>
										</div>
										<div className="clear">

										</div>
									</article>
								</div>
								<div className="widget widget_categories">
									<h3 className="widget-title">Categories</h3>
									<ul>
										<li>
											<a href="/blog/">Business<span className="post-count">(05)</span></a>
										</li>
										<li>
											<a href="/blog/">Privacy<span className="post-count">(10)</span></a>
										</li>
										<li>
											<a href="/blog/">Technology<span className="post-count">(15)</span></a>
										</li>
										<li>
											<a href="/blog/">Tips<span className="post-count">(10)</span></a></li>
										<li>
											<a href="/blog/">Uncategorized<span className="post-count">(05)</span></a>
										</li>
									</ul>
								</div>
								<div className="widget widget_tag_cloud">
									<h3 className="widget-title">Tags</h3>
										<div className="tagcloud">
											<a href="/blog/">IT <span className="tag-link-count"> (3)</span></a>
											<a href="/blog/">Crimso <span className="tag-link-count"> (3)</span></a>
											<a href="/blog/">Games <span className="tag-link-count"> (2)</span></a>
											<a href="/blog/">Fashion <span className="tag-link-count"> (2)</span></a>
											<a href="/blog/">Travel <span className="tag-link-count"> (1)</span></a>
											<a href="/blog/">Smart <span className="tag-link-count"> (1)</span></a>
											<a href="/blog/">Marketing <span className="tag-link-count"> (1)</span></a>
											<a href="/blog/">Tips <span className="tag-link-count"> (2)</span></a>
										</div>
									</div>
								</aside>
				</div>
			</div>
		</div>
	</section>
	)
}
};

export default Media;