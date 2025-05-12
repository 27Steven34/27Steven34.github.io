---
layout: default
title: Posts
permalink: /posts/
---

<h1>Recent Posts</h1>

<ul class="post-list">
  {% for post in site.posts %}
    {% assign url = post.url %}
    {% assign title = post.title %}
    {% assign date = post.date | date: "%B %d, %Y" %}
    {% assign thumbnail = post.thumbnail %}
    {% assign excerpt = post.excerpt | strip_html | strip_newlines | truncate: 500 %}
    {% include postcard.html
      url=url
      title=title
      date=date
      thumbnail=thumbnail
      excerpt=excerpt
    %}
  {% endfor %}
</ul>
