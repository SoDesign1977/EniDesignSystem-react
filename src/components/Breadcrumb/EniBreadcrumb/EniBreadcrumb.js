import React from 'react';
import PropTypes from 'prop-types';


export default function EniBreadcrumb({message,arianne =[{}]}) {
  return (
	<>
		<div className="eni-breadcrumb" aria-label="breadcrumb">
			<span className="eni-breadcrumb-label">{message}</span>
				{
					arianne.map((el,index)=>{
						return <a href={el.link} className={`eni-breadcrumb-level`} aria-current={index+1 === arianne.length ? "page" : ""} >{el.title}</a>
					})
				}
		</div>
	</>
  );
}
EniBreadcrumb.propTypes = {
    message: PropTypes.string,
    arianne: PropTypes.arrayOf( PropTypes.shape({
		title: PropTypes.string,
		link: PropTypes.number
	  })),
};
