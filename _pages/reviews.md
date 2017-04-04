---
layout:    default
permalink: "/reviews/"
author:    boldlygoes
keywords:  reviews equipment clothing techniques
title:     Reviews
menutitle: Reviews
weight:    90
excerpt:   Reviews of outdoor gear and techniques.
---


<div class="tile-wrap no-touch">
    <div class="tile">
      <div class="boxInner">
        <a href="{{ site.github.url }}/reviews/delta-gtx-review"><img src="{{ site.github.url }}/media/img/tiles/tile-deltagtx.jpg" /></a>
        <div class="titleBox"><a href="{{ site.github.url }}/reviews/delta-gtx-review">SCARPA DELTA GTX ACTIV REVIEW</a></div>
      </div>
    </div>
    <div class="tile">
      <div class="boxInner">
        <a href="{{ site.github.url }}/reviews/sunix-review"><img src="{{ site.github.url }}/media/img/tiles/tile-sunix.jpg" /></a>
        <div class="titleBox"><a href="{{ site.github.url }}/reviews/sunix-review">SUNIX 120 HEADTORCH REVIEW</a></div>
      </div>
    </div>
    <div class="tile">
      <div class="boxInner">
        <a href="{{ site.github.url }}/reviews/gossamer-review"><img src="{{ site.github.url }}/media/img/tiles/tile-gossamer.jpg" /></a>
        <div class="titleBox"><a href="{{ site.github.url }}/reviews/gossamer-review">GOSSAMER 1 REVIEW</a></div>
      </div>
    </div>
</div>


<div>
{% assign sorted_cats = site.categories | sort %}
    {% for category in sorted_cats %}
    {% assign sorted_posts = category[1] | reversed %}
    <h3 id="{{category[0] | uri_escape | downcase | slugify }}">{{category[0] | camelcase }}</h3>
    <ul class="category {{category[0] | uri_escape | downcase | slugify}}">  
        {% for post in sorted_posts %}
        {% unless post.draft %}

        {% if post.menutitle %}
        {% assign title = post.menutitle %}
        {% else %}
        {% assign title = post.title %}
        {% endif %}

        <li>
            <div class="article">
                <article class="article" itemscope itemtype="http://schema.org/BlogPosting">
                    <header class="post-header">
                        <span class="title"><a itemprop="name" href="{{ post.url | prepend: site.github.url | prepend: site.baseurl }}" title="{{ title }}">{{ title }}</a></span>
                        <time class="date" itemprop="datePublished" datetime="{{post.date | date: "%Y-%m-%d"}}">{{post.date | date: "%B %e, %Y"}}</time>
                    </header>
                </article>
            </div>
        </li>
        {% endunless %}
        {% endfor %}
    </ul>
    {% endfor %}
</div>