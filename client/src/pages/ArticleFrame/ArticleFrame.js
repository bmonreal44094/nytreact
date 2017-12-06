import React from 'react';

const ArticleFrame = props =>

<div>
	<h4 className="card-title">{props.title}</h4>
	<h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
	<a target="_blank" href={props.url}>Read more about this artcile</a>
	{props.children}
</div>


export default ArticleFrame;