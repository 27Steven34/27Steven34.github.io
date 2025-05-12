---
layout: default
title: Doodles
permalink: /doodles/
---

<ul class="post-list">
  {% for doodle in site.doodles %}
    {% assign url = doodle.url %}
    {% assign title = doodle.title %}
    {% assign date = doodle.date | date: "%B %d, %Y" %}
    {% assign thumbnail = doodle.thumbnail %}
    {% include postcard.html
      url=url
      title=title
      date=date
      thumbnail=thumbnail
    %}
  {% endfor %}
</ul>